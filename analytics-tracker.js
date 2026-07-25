(function () {
  if (navigator.doNotTrack === "1") return;

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

  const payload = {
    page: location.pathname || "/",
    title: document.title,
    referrer: document.referrer || "",
    language: document.documentElement.lang || "fr",
    traffic_source: trafficSource(),
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
