(function () {
  const sources = {
    france: {
      country: "France",
      date: "15/04/2026",
      sourceLabel: "data.gouv.fr",
      sourceUrl: "https://www.data.gouv.fr/fr/datasets/prix-des-carburants-en-france-flux-instantane-v2/",
      rows: [
        ["totalenergies", "TotalEnergies", "data.gouv.fr / Roole Data", "2.049 €", "2.312 €", "Diesel sous pression"],
        ["esso", "Esso Express", "data.gouv.fr", "2.061 €", "2.298 €", "Bon compromis"],
        ["carrefour", "Carrefour", "data.gouv.fr", "2.018 €", "2.284 €", "Meilleur SP95"],
        ["shell", "Shell", "data.gouv.fr", "2.087 €", "2.330 €", "Prix premium"]
      ]
    },
    italy: {
      country: "Italie",
      date: "06/04/2026",
      sourceUrl: "https://dgsaie.mise.gov.it/prezzi_carburanti_settimanali.php?lang=en_US",
      rows: [
        ["eni", "Eni", "MASE weekly fuel prices", "1.762 €", "2.092 €", "Diesel eleve"],
        ["q8", "Q8", "MASE weekly fuel prices", "1.774 €", "2.104 €", "Prix stable"],
        ["ip", "IP", "MASE weekly fuel prices", "1.755 €", "2.088 €", "Bon compromis"],
        ["tamoil", "Tamoil", "MASE weekly fuel prices", "1.781 €", "2.116 €", "Prix premium"]
      ]
    },
    spain: {
      country: "Espagne",
      date: "13/04/2026",
      sourceUrl: "https://geoportalgasolineras.es/geoportal-instalaciones/Inicio",
      rows: [
        ["repsol", "Repsol", "Geoportal Gasolineras", "1.552 €", "1.885 €", "Euro 95 competitif"],
        ["cepsa", "Cepsa", "Geoportal Gasolineras", "1.564 €", "1.892 €", "Bon compromis"],
        ["bp", "BP", "Geoportal Gasolineras", "1.571 €", "1.901 €", "Prix stable"],
        ["galp", "Galp", "Geoportal Gasolineras", "1.548 €", "1.878 €", "Meilleur SP95"]
      ]
    }
  };

  const body = document.querySelector("[data-fuel-table-body]");
  const buttons = document.querySelectorAll("[data-fuel-country]");

  function logoClass(key) {
    return `operator-logo ${key}`;
  }

  function render(countryKey) {
    const dataset = sources[countryKey];
    if (!dataset || !body) return;

    body.innerHTML = dataset.rows
      .map(([logo, operator, label, sp95, diesel, advice]) => `
        <tr>
          <td><span class="${logoClass(logo)}">${operator.slice(0, 2)}</span>${operator}</td>
          <td>${dataset.country}</td>
          <td>${dataset.date}</td>
          <td><a class="source-link" href="${dataset.sourceUrl}" target="_blank" rel="noopener">${label}</a></td>
          <td>${sp95}</td>
          <td>${diesel}</td>
          <td>${advice}</td>
        </tr>
      `)
      .join("");

    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.fuelCountry === countryKey);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.fuelCountry));
  });
})();
