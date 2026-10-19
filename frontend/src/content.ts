export type Language = "fr" | "en" | "es";
export type Category = "mobility" | "energy" | "information" | "people";
export interface Product {
  id: string;
  name: string;
  path: string;
  storeUrl: string;
  group: Category;
  color: string;
  icon: "fuel" | "energy" | "parking" | "news" | "people";
  text: [string, string, string];
}
export const products: Product[] = [
  {
    id: "fuel",
    storeUrl:
      "https://play.google.com/store/apps/details?id=info.avaintelligent.smartfuel&pcampaignid=web_share",
    name: "AVA Fuel",
    path: "/fuel.html",
    group: "mobility",
    color: "#c3dda1",
    icon: "fuel",
    text: [
      "Comparez les stations. Choisissez votre prochain arret.",
      "Compare stations. Choose your next stop.",
      "Compara estaciones. Elige tu proxima parada.",
    ],
  },
  {
    id: "electricity",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.ava.electricity&pcampaignid=web_share",
    name: "ElectricityCost",
    path: "/electricity.html",
    group: "energy",
    color: "#edcc94",
    icon: "energy",
    text: [
      "Comprenez votre consommation et planifiez votre energie.",
      "Understand consumption and plan your energy use.",
      "Comprende el consumo y planifica tu energia.",
    ],
  },
  {
    id: "parking",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.ava.parking&pcampaignid=web_share",
    name: "AVA Parking",
    path: "/parking.html",
    group: "mobility",
    color: "#a8ccd9",
    icon: "parking",
    text: [
      "Explorez une mobilite plus simple, jusque dans le stationnement.",
      "Explore simpler mobility, right down to parking.",
      "Explora una movilidad mas sencilla, incluido el aparcamiento.",
    ],
  },
  {
    id: "news",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.ansary.avaintelligence&pcampaignid=web_share",
    name: "News Verify",
    path: "/news.html",
    group: "information",
    color: "#c4b9dd",
    icon: "news",
    text: [
      "Mettez les sources et les signaux de l’information en perspective.",
      "Get perspective on sources and information signals.",
      "Pon en perspectiva las fuentes y las senales de informacion.",
    ],
  },
  {
    id: "mindmatch",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.ava.mindmatch&pcampaignid=web_share",
    name: "MindMatch",
    path: "/mindmatch.html",
    group: "people",
    color: "#e2b3a7",
    icon: "people",
    text: [
      "Rencontrez les bonnes personnes pour votre prochain projet.",
      "Meet the right people for your next venture.",
      "Encuentra a las personas adecuadas para tu proximo proyecto.",
    ],
  },
];
const rows = {
  previewError: [
    "L’aperçu ne peut pas etre charge.",
    "The preview could not be loaded.",
    "No se pudo cargar la vista previa.",
  ],
  previewRetry: ["Recharger la page", "Reload page", "Recargar pagina"],
  store: [
    "Disponible sur Google Play",
    "Get it on Google Play",
    "Disponible en Google Play",
  ],
  nav: [
    ["Applications", "Notre approche", "Analytics"],
    ["Applications", "Our approach", "Analytics"],
    ["Aplicaciones", "Nuestro enfoque", "Analytics"],
  ],
  contact: ["Parlons de votre projet", "Let’s talk", "Hablemos"],
  menu: ["Menu", "Menu", "Menu"],
  close: ["Fermer le menu", "Close menu", "Cerrar menu"],
  theme: ["Changer le theme", "Switch theme", "Cambiar tema"],
  language: ["Langue", "Language", "Idioma"],
  skip: ["Aller au contenu", "Skip to content", "Saltar al contenido"],
  eyebrow: [
    "UN ECOSYSTEME. DE NOUVELLES POSSIBILITES.",
    "ONE ECOSYSTEM. NEW POSSIBILITIES.",
    "UN ECOSISTEMA. NUEVAS POSIBILIDADES.",
  ],
  headline: [
    "L’intelligence utile.",
    "Intelligence that matters.",
    "Inteligencia que importa.",
  ],
  headline2: ["Au quotidien.", "Every day.", "Cada dia."],
  intro: [
    "Mobilite, energie, information, rencontres. AVA relie les idees aux outils qui vous aident a decider.",
    "Mobility, energy, information, connections. AVA connects ideas with tools that help you decide.",
    "Movilidad, energia, informacion, conexiones. AVA conecta ideas con herramientas que te ayudan a decidir.",
  ],
  explore: [
    "Explorer les applications",
    "Explore the applications",
    "Explorar las aplicaciones",
  ],
  approach: [
    "Decouvrir notre approche",
    "Discover our approach",
    "Descubrir nuestro enfoque",
  ],
  heroNote: [
    "Cinq applications. Une vision commune.",
    "Five applications. One shared vision.",
    "Cinco aplicaciones. Una vision compartida.",
  ],
  workspace: [
    "ESPACE EXPLORATION",
    "EXPLORATION SPACE",
    "ESPACIO DE EXPLORACION",
  ],
  illustration: [
    "Donnees illustratives · aucune mesure en direct",
    "Illustrative data · no live measurements",
    "Datos ilustrativos · sin mediciones en directo",
  ],
  chartTitle: [
    "Voir au-dela des chiffres.",
    "See beyond the numbers.",
    "Mira mas alla de los numeros.",
  ],
  chartBody: [
    "Explorez une courbe d’exemple. Les donnees reelles restent dans les applications existantes.",
    "Explore an example curve. Real data remains in the existing applications.",
    "Explora una curva de ejemplo. Los datos reales siguen en las aplicaciones existentes.",
  ],
  chartLabel: [
    "Indice illustratif",
    "Illustrative index",
    "Indice ilustrativo",
  ],
  series: [
    ["Mobilite", "Energie"],
    ["Mobility", "Energy"],
    ["Movilidad", "Energia"],
  ],
  ecosystem: ["L’ECOSYSTEME AVA", "THE AVA ECOSYSTEM", "EL ECOSISTEMA AVA"],
  appsTitle: [
    "Une meilleure decision commence ici.",
    "A better decision starts here.",
    "Una mejor decision empieza aqui.",
  ],
  appsBody: [
    "Des outils distincts. Une experience connectee a vos besoins.",
    "Distinct tools. An experience connected to your needs.",
    "Herramientas distintas. Una experiencia conectada a tus necesidades.",
  ],
  all: ["Toutes", "All", "Todas"],
  groups: [
    ["Mobilite", "Energie", "Information", "Rencontres"],
    ["Mobility", "Energy", "Information", "Connections"],
    ["Movilidad", "Energia", "Informacion", "Conexiones"],
  ],
  open: ["Explorer", "Explore", "Explorar"],
  method: ["NOTRE APPROCHE", "OUR APPROACH", "NUESTRO ENFOQUE"],
  methodTitle: [
    "Moins de bruit. Plus de perspective.",
    "Less noise. More perspective.",
    "Menos ruido. Mas perspectiva.",
  ],
  steps: [
    [
      ["Observer", "Rassembler les informations utiles a votre contexte."],
      ["Comprendre", "Mettre les sources et les tendances en perspective."],
      ["Decider", "Passer a l’action avec les outils adaptes."],
    ],
    [
      ["Observe", "Gather the information relevant to your context."],
      ["Understand", "Put sources and trends into perspective."],
      ["Decide", "Take action with the right tools."],
    ],
    [
      ["Observar", "Reunir la informacion relevante para tu contexto."],
      ["Comprender", "Poner en perspectiva las fuentes y tendencias."],
      ["Decidir", "Actuar con las herramientas adecuadas."],
    ],
  ],
  cta: [
    "Votre prochain pas commence par une conversation.",
    "Your next step starts with a conversation.",
    "Tu proximo paso comienza con una conversacion.",
  ],
  ctaBody: [
    "Une question sur une application ou une idee de partenariat ?",
    "A question about an application or an idea for a partnership?",
    "¿Una pregunta sobre una aplicacion o una idea de colaboracion?",
  ],
  footer: [
    "Des outils intelligents pour des choix eclaires.",
    "Intelligent tools for informed choices.",
    "Herramientas inteligentes para decisiones informadas.",
  ],
  privacy: ["Confidentialite", "Privacy", "Privacidad"],
  deletion: ["Suppression de compte", "Account deletion", "Eliminar cuenta"],
  safety: ["Securite MindMatch", "MindMatch safety", "Seguridad MindMatch"],
  legacy: ["Site classique", "Classic website", "Sitio clasico"],
  preview: ["Apercu React", "React preview", "Vista React"],
  notfound: [
    "Cette page n’existe pas.",
    "This page does not exist.",
    "Esta pagina no existe.",
  ],
  home: ["Retour a l’accueil", "Back to home", "Volver al inicio"],
  loading: ["Chargement du graphique", "Loading chart", "Cargando grafico"],
  values: [
    "Valeurs illustratives",
    "Illustrative values",
    "Valores ilustrativos",
  ],
  days: [
    ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
  ],
};
export const languages: Language[] = ["fr", "en", "es"];
export const groups: Category[] = [
  "mobility",
  "energy",
  "information",
  "people",
];
export type Translation = {
  [K in keyof typeof rows]: K extends "steps"
    ? string[][]
    : K extends "nav" | "groups" | "series" | "days"
      ? string[]
      : string;
};
export const copy = Object.fromEntries(
  languages.map((lang, i) => [
    lang,
    Object.fromEntries(
      Object.entries(rows).map(([key, value]) => [key, value[i]]),
    ),
  ]),
) as Record<Language, Translation>;
