(function () {
  const labels = {
    fr: {
      countries: { france: "France", italy: "Italie", spain: "Espagne" },
      advice: {
        "Diesel sous pression": "Diesel sous pression",
        "Bon compromis": "Bon compromis",
        "Meilleur SP95": "Meilleur SP95",
        "Prix premium": "Prix premium",
        "Diesel eleve": "Diesel eleve",
        "Prix stable": "Prix stable",
        "Euro 95 competitif": "Euro 95 competitif"
      }
    },
    en: {
      countries: { france: "France", italy: "Italy", spain: "Spain" },
      advice: {
        "Diesel sous pression": "Diesel under pressure",
        "Bon compromis": "Good compromise",
        "Meilleur SP95": "Best SP95",
        "Prix premium": "Premium price",
        "Diesel eleve": "High diesel",
        "Prix stable": "Stable price",
        "Euro 95 competitif": "Competitive Euro 95"
      }
    },
    es: {
      countries: { france: "Francia", italy: "Italia", spain: "Espana" },
      advice: {
        "Diesel sous pression": "Diesel bajo presion",
        "Bon compromis": "Buen equilibrio",
        "Meilleur SP95": "Mejor SP95",
        "Prix premium": "Precio premium",
        "Diesel eleve": "Diesel alto",
        "Prix stable": "Precio estable",
        "Euro 95 competitif": "Euro 95 competitivo"
      }
    }
  };

  const sources = {
    france: {
      country: "France",
      date: "15/04/2026",
      sourceUrl: "https://www.data.gouv.fr/fr/datasets/prix-des-carburants-en-france-flux-instantane-v2/",
      rows: [
        ["totalenergies", "TotalEnergies", "data.gouv.fr / Roole Data", "2.049 EUR", "2.312 EUR", "Diesel sous pression"],
        ["esso", "Esso Express", "data.gouv.fr", "2.061 EUR", "2.298 EUR", "Bon compromis"],
        ["carrefour", "Carrefour", "data.gouv.fr", "2.018 EUR", "2.284 EUR", "Meilleur SP95"],
        ["shell", "Shell", "data.gouv.fr", "2.087 EUR", "2.330 EUR", "Prix premium"]
      ]
    },
    italy: {
      country: "Italie",
      date: "06/04/2026",
      sourceUrl: "https://dgsaie.mise.gov.it/prezzi_carburanti_settimanali.php?lang=en_US",
      rows: [
        ["eni", "Eni", "MASE weekly fuel prices", "1.762 EUR", "2.092 EUR", "Diesel eleve"],
        ["q8", "Q8", "MASE weekly fuel prices", "1.774 EUR", "2.104 EUR", "Prix stable"],
        ["ip", "IP", "MASE weekly fuel prices", "1.755 EUR", "2.088 EUR", "Bon compromis"],
        ["tamoil", "Tamoil", "MASE weekly fuel prices", "1.781 EUR", "2.116 EUR", "Prix premium"]
      ]
    },
    spain: {
      country: "Espagne",
      date: "13/04/2026",
      sourceUrl: "https://geoportalgasolineras.es/geoportal-instalaciones/Inicio",
      rows: [
        ["repsol", "Repsol", "Geoportal Gasolineras", "1.552 EUR", "1.885 EUR", "Euro 95 competitif"],
        ["cepsa", "Cepsa", "Geoportal Gasolineras", "1.564 EUR", "1.892 EUR", "Bon compromis"],
        ["bp", "BP", "Geoportal Gasolineras", "1.571 EUR", "1.901 EUR", "Prix stable"],
        ["galp", "Galp", "Geoportal Gasolineras", "1.548 EUR", "1.878 EUR", "Meilleur SP95"]
      ]
    }
  };

  const body = document.querySelector("[data-fuel-table-body]");
  const buttons = document.querySelectorAll("[data-fuel-country]");
  let activeCountry = "france";

  function logoClass(key) {
    return `operator-logo ${key}`;
  }

  function currentLanguage() {
    const lang = localStorage.getItem("avaLanguage") || document.documentElement.lang || "fr";
    return labels[lang] ? lang : "fr";
  }

  function render(countryKey) {
    const dataset = sources[countryKey];
    if (!dataset || !body) return;

    activeCountry = countryKey;
    const dictionary = labels[currentLanguage()];

    body.innerHTML = dataset.rows
      .map(([logo, operator, label, sp95, diesel, advice]) => `
        <tr>
          <td><span class="${logoClass(logo)}">${operator.slice(0, 2)}</span>${operator}</td>
          <td>${dictionary.countries[countryKey] || dataset.country}</td>
          <td>${dataset.date}</td>
          <td><a class="source-link" href="${dataset.sourceUrl}" target="_blank" rel="noopener">${label}</a></td>
          <td>${sp95}</td>
          <td>${diesel}</td>
          <td>${dictionary.advice[advice] || advice}</td>
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

  window.addEventListener("ava-language-change", () => render(activeCountry));
})();
