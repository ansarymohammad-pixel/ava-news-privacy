(function () {
  const stage = document.querySelector("[data-dashboard-stage]");
  const kpis = document.querySelector("[data-dashboard-kpis]");
  const filters = Array.from(document.querySelectorAll("[data-dashboard-filter]"));
  if (!stage || !kpis || !filters.length) return;

  const cards = [
    {
      group: "mobility",
      title: "AVA Fuel",
      label: "Intelligence carburant",
      metric: "1.72 EUR/L",
      metricLabel: "Meilleur SP95 detecte",
      status: "Tendance stable",
      href: "./fuel.html",
      cta: "Comparer les prix",
      accent: "#f2b84b",
      values: [42, 58, 51, 66, 61, 74, 70]
    },
    {
      group: "energy",
      title: "AVA ElectricityCost",
      label: "Planificateur energie maison",
      metric: "0.14 EUR/kWh",
      metricLabel: "Meilleur creux 24h",
      status: "Lancer a 02:00",
      href: "./electricity.html",
      cta: "Planifier appareil",
      accent: "#35bdb2",
      values: [76, 62, 44, 32, 38, 57, 71]
    },
    {
      group: "energy",
      title: "AVA News Verify",
      label: "Moteur d'impact",
      metric: "82/100",
      metricLabel: "Credibilite moyenne",
      status: "Impact carburant +0.18",
      href: "./news.html",
      cta: "Voir les signaux",
      accent: "#6f63d9",
      values: [31, 46, 52, 68, 72, 66, 82]
    },
    {
      group: "mobility",
      title: "AVA Parking",
      label: "Parking intelligent",
      metric: "12 places",
      metricLabel: "Disponibilite estimee",
      status: "Risque trafic moyen",
      href: "./parking.html",
      cta: "Trouver parking",
      accent: "#2f6fed",
      values: [70, 65, 54, 44, 38, 49, 58]
    },
    {
      group: "startup",
      title: "MindMatch",
      label: "Matching startup",
      metric: "43 profils",
      metricLabel: "Early access actifs",
      status: "Founder/talent 1.4",
      href: "./mindmatch.html",
      cta: "Rejoindre",
      accent: "#d24b4b",
      values: [28, 34, 47, 55, 61, 72, 80]
    }
  ];

  const summary = [
    ["Sources connectees", "18"],
    ["Pays suivis", "3"],
    ["Signaux news", "124"],
    ["Actions recommandees", "31"]
  ];

  function chart(values, color) {
    const max = Math.max(...values);
    return values.map((value) => {
      const height = Math.max(18, Math.round((value / max) * 76));
      return `<span style="height:${height}px;background:${color}" aria-hidden="true"></span>`;
    }).join("");
  }

  function render(filter) {
    const visible = filter === "all" ? cards : cards.filter((card) => card.group === filter);
    stage.innerHTML = visible.map((card, index) => `
      <article class="dashboard-card dashboard-card-${index + 1}" style="--card-accent:${card.accent}">
        <div class="dashboard-card-media">
          <div class="dashboard-orbit" aria-hidden="true"></div>
          <div class="dashboard-bars">${chart(card.values, card.accent)}</div>
        </div>
        <div class="dashboard-card-body">
          <span>${card.label}</span>
          <h3>${card.title}</h3>
          <strong>${card.metric}</strong>
          <p>${card.metricLabel}</p>
          <div class="dashboard-card-footer">
            <small>${card.status}</small>
            <a href="${card.href}">${card.cta}</a>
          </div>
        </div>
      </article>
    `).join("");

    kpis.innerHTML = summary.map(([label, value]) => `
      <article>
        <span>${label}</span>
        <strong>${value}</strong>
      </article>
    `).join("");
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.toggle("active", item === button));
      render(button.dataset.dashboardFilter);
    });
  });

  render("all");
})();
