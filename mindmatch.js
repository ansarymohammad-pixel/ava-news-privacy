(function () {
  const form = document.querySelector("[data-mindmatch-form]");
  if (!form) return;

  const status = document.querySelector("[data-mindmatch-status]");
  function resolveApiUrl() {
    if (window.MINDMATCH_API_URL) return window.MINDMATCH_API_URL;
    if (location.hostname === "avaintelligent.info" || location.hostname === "www.avaintelligent.info") {
      return "https://mindmatch-api.avaintelligent.info";
    }
    return "http://127.0.0.1:8010";
  }

  const apiBase = resolveApiUrl().replace(/\/$/, "");
  const waitlistPath = window.MINDMATCH_WAITLIST_PATH || "/waitlist/mindmatch";

  function track(eventName, data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...data });
  }

  track("mindmatch_page_view", {
    traffic_source: new URLSearchParams(window.location.search).get("utm_source") || "direct",
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.consent = formData.get("consent") === "on";
    payload.traffic_source = new URLSearchParams(window.location.search).get("utm_source") || "website";

    if (!payload.consent) {
      status.textContent = "Merci d'accepter les communications de lancement pour rejoindre la liste.";
      status.dataset.state = "error";
      return;
    }

    status.textContent = "Envoi en cours...";
    status.dataset.state = "loading";

    try {
      const response = await fetch(`${apiBase}${waitlistPath}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("waitlist_unavailable");
      }

      form.reset();
      status.textContent = "Merci. Votre demande Early Access MindMatch est bien enregistree.";
      status.dataset.state = "success";
      track("mindmatch_registration_completed", {
        profile_type: payload.profile_type,
        city: payload.city,
      });
    } catch (error) {
      status.textContent = "Le serveur MindMatch est disponible, mais l'inscription waitlist doit etre activee cote API. Contactez support@avaintelligent.info ou reessayez plus tard.";
      status.dataset.state = "error";
    }
  });
})();
