(function () {
  const chart = document.querySelector("[data-analytics-chart]");
  const totalViews = document.querySelector("[data-total-views]");
  const totalVisitors = document.querySelector("[data-total-visitors]");
  const status = document.querySelector("[data-analytics-status]");
  if (!chart) return;

  function resolveApiUrl() {
    if (window.AVA_API_URL) return window.AVA_API_URL;
    if (location.hostname === "avaintelligent.info" || location.hostname === "www.avaintelligent.info") {
      return "https://api.avaintelligent.info";
    }
    return "http://127.0.0.1:8000";
  }

  function shortDate(value) {
    return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  function render(data) {
    const max = Math.max(...data.days.map((day) => day.page_views), 1);
    totalViews.textContent = data.total_page_views;
    totalVisitors.textContent = data.total_unique_visitors;
    chart.innerHTML = data.days.map((day) => {
      const height = Math.max(8, Math.round((day.page_views / max) * 160));
      return `
        <article class="analytics-bar">
          <div class="analytics-column" style="height:${height}px"></div>
          <strong>${day.page_views}</strong>
          <span>${shortDate(day.date)}</span>
        </article>
      `;
    }).join("");
    status.textContent = "Donnees chargees depuis le backend FastAPI.";
  }

  fetch(`${resolveApiUrl().replace(/\/$/, "")}/analytics/daily?days=14`)
    .then((response) => {
      if (!response.ok) throw new Error("analytics unavailable");
      return response.json();
    })
    .then(render)
    .catch(() => {
      status.textContent = "Le backend analytics n'est pas encore disponible. Deploie FastAPI sur api.avaintelligent.info pour compter les visites publiques.";
    });
})();
