(function () {
  window.AVA_SITE = {
    brand: {
      label: "AVA Intelligence",
      mark: "AVA",
      homeUrl: "./index.html",
      footer: "© 2026 AVA Intelligence. Smart Mobility, AI and startup matching platform."
    },
    nav: [
      { label: "Accueil", href: "./index.html", match: ["", "index.html"] },
      { label: "AVA Ecosystem", href: "./ecosystem.html", match: ["ecosystem.html"] },
      { label: "AVA Fuel", href: "./fuel.html", match: ["fuel.html"] },
      { label: "AVA ElectricityCost", href: "./electricity.html", match: ["electricity.html"] },
      { label: "AVA Parking", href: "./parking.html", match: ["parking.html"] },
      { label: "AVA News Verify", href: "./news.html", match: ["news.html"] },
      { label: "MindMatch", href: "./mindmatch.html", match: ["mindmatch.html"] },
      { label: "Contact", href: "./contact.html", match: ["contact.html"] }
    ],
    footerLinks: [
      { label: "Confidentialite", href: "./privacy.html" },
      { label: "Contact", href: "./contact.html" },
      { label: "MindMatch", href: "./mindmatch.html" }
    ],
    products: [
      {
        name: "AVA Fuel",
        logoClass: "fuel-logo",
        logoText: "€",
        description: "Comparer les prix carburant, voir les stations sur carte et anticiper les variations locales.",
        features: ["Prix en temps reel", "Cartes stations", "Prediction prix"],
        href: "./fuel.html",
        cta: "Voir AVA Fuel"
      },
      {
        name: "AVA ElectricityCost",
        logoClass: "electricity-logo",
        logoText: "AVA",
        description: "Planifier les appareils de la maison selon les prix de l'electricite et estimer le cout avant de lancer.",
        features: ["Prix electricite sur 24 heures", "Meilleur horaire automatique", "Estimation kWh et cout"],
        href: "./electricity.html",
        cta: "Voir AVA ElectricityCost"
      },
      {
        name: "AVA Parking",
        logoClass: "parking-logo",
        logoText: "P",
        description: "Predire la disponibilite des parkings et guider l'utilisateur vers la meilleure option.",
        features: ["Disponibilite parking", "Prevision trafic", "Optimisation place"],
        href: "./parking.html",
        cta: "Voir AVA Parking"
      },
      {
        name: "AVA News Verify",
        logoClass: "news-logo",
        logoText: "AVA",
        description: "Evaluer la credibilite d'une information avec un score IA et une lecture rhetorique.",
        features: ["Score credibilite", "Source transparency", "Detection rhetorique"],
        href: "./news.html",
        cta: "Voir AVA News"
      },
      {
        name: "MindMatch",
        logoClass: "mindmatch-logo",
        logoText: "MM",
        description: "Trouver les bonnes personnes pour construire une startup selon competences, objectifs, disponibilite et ville.",
        features: ["Founder-to-talent matching", "Early-access waitlist", "Startup team discovery"],
        href: "./mindmatch.html",
        cta: "Rejoindre MindMatch"
      }
    ]
  };
})();
