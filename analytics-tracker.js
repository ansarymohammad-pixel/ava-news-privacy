(function () {
  if (navigator.doNotTrack === "1") return;

  const VISITOR_KEY = "ava_visitor_id";
  const SESSION_KEY = "ava_session_id";

  function resolveApiUrl() {
    if (window.AVA_API_URL) return window.AVA_API_URL;
    if (location.hostname === "avaintelligent.info" || location.hostname === "www.avaintelligent.info") {
      return "https://api.avaintelligent.info";
    }
    return "http://127.0.0.1:8000";
  }

  function trafficSource() {
    const params = new URLSearchParams(location.search);
    return params.get("utm_source") || document.referrer || "direct";
  }

  function stableId(storage, key) {
    try {
      let value = storage.getItem(key);
      if (!value) {
        value = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
        storage.setItem(key, value);
      }
      return value;
    } catch (error) {
      return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    }
  }

  function currentLanguage() {
    try {
      const saved = localStorage.getItem("avaLanguage");
      if (["fr", "en", "es"].includes(saved)) return saved;
    } catch (error) {
      // Ignore storage errors and fall back to the document language.
    }
    const selected = document.querySelector("[data-language-select]");
    const language = selected ? selected.value : document.documentElement.lang;
    return ["fr", "en", "es"].includes(language) ? language : "fr";
  }

  const payload = {
    page: location.pathname || "/",
    title: document.title,
    referrer: document.referrer || "",
    language: currentLanguage(),
    traffic_source: trafficSource(),
    visitor_id: stableId(localStorage, VISITOR_KEY),
    session_id: stableId(sessionStorage, SESSION_KEY),
    screen_size: `${window.screen.width}x${window.screen.height}`,
  };

  const url = `${resolveApiUrl().replace(/\/$/, "")}/analytics/visit`;
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
    return;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
})();
