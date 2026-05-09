(function () {
  const translations = {
    en: {
      "Accueil": "Home",
      "Confidentialite": "Privacy",
      "Choix de langue": "Language choice",
      "Langue": "Language",
      "Navigation principale": "Main navigation",
      "Telecharger AVA sur Google Play": "Download AVA on Google Play",
      "Fonctionnalites principales": "Main features",
      "Apercu de l'application AVA": "AVA app preview",
      "Une plateforme mobile pour economiser sur le carburant, trouver une place plus vite, verifier l'information et optimiser chaque deplacement.": "A mobile platform to save on fuel, find parking faster, verify information, and optimize every trip.",
      "Disponible sur": "Available on",
      "Demander une demo": "Request a demo",
      "Prix carburant en temps reel": "Real-time fuel prices",
      "Smart parking prediction": "Smart parking prediction",
      "AI news verification": "AI news verification",
      "Optimisation deplacement": "Trip optimization",
      "Prediction demain": "Tomorrow prediction",
      "Tendance locale": "Local trend",
      "12 places libres": "12 free spaces",
      "Prediction haute": "High prediction",
      "Produits AVA": "AVA Products",
      "Une architecture claire pour trois besoins quotidiens.": "A clear architecture for three everyday needs.",
      "Chaque module AVA a sa propre page, ses propres fonctionnalites et une promesse simple pour l'utilisateur final.": "Each AVA module has its own page, features, and simple promise for the final user.",
      "Comparer les prix carburant, voir les stations sur carte et anticiper les variations locales.": "Compare fuel prices, view stations on a map, and anticipate local changes.",
      "Prix en temps reel": "Real-time prices",
      "Cartes stations": "Station maps",
      "Prediction prix": "Price prediction",
      "Voir AVA Fuel": "View AVA Fuel",
      "Predire la disponibilite des parkings et guider l'utilisateur vers la meilleure option.": "Predict parking availability and guide the user to the best option.",
      "Disponibilite parking": "Parking availability",
      "Prevision trafic": "Traffic forecast",
      "Optimisation place": "Space optimization",
      "Voir AVA Parking": "View AVA Parking",
      "Evaluer la credibilite d'une information avec un score IA et une lecture rhetorique.": "Evaluate the credibility of information with an AI score and rhetorical analysis.",
      "Score credibilite": "Credibility score",
      "Source transparency": "Source transparency",
      "Detection rhetorique": "Rhetorical detection",
      "Voir AVA News": "View AVA News",
      "Des interfaces pensees pour agir rapidement.": "Interfaces designed for quick action.",
      "Les apercus ci-dessous montrent les ecrans cles a integrer ou remplacer plus tard par de vraies captures Google Play.": "The previews below show key screens that can later be replaced with real Google Play screenshots.",
      "Carte carburant": "Fuel map",
      "Station la moins chere": "Cheapest station",
      "Prediction parking": "Parking prediction",
      "Centre-ville": "City center",
      "Temps estime": "Estimated time",
      "Score IA": "AI score",
      "Rhetorique detectee": "Rhetoric detected",
      "Emotion forte": "Strong emotion",
      "Confiance": "Trust",
      "Un site optimise pour inspirer confiance et ameliorer le SEO.": "A site optimized to build trust and improve SEO.",
      "Messages clairs": "Clear messages",
      "Chaque produit explique sa valeur, ses cas d'usage et ses benefices concrets.": "Each product explains its value, use cases, and concrete benefits.",
      "Telechargement visible": "Visible download",
      "Le bouton Google Play est present sur l'accueil et la section download.": "The Google Play button is visible on the home page and download section.",
      "Pages indexables": "Indexable pages",
      "Fuel, Parking, News et Contact ont leurs propres URLs pour le referencement.": "Fuel, Parking, News, and Contact have their own URLs for search indexing.",
      "Telecharger AVA ou demander l'acces.": "Download AVA or request access.",
      "Ajoutez ici le lien officiel Google Play des que l'application est publiee. En attendant, le contact support peut recevoir les demandes beta, presse ou partenaires.": "Add the official Google Play link here once the app is published. Until then, support can receive beta, press, or partner requests.",
      "Comparer le carburant avant de rouler.": "Compare fuel before driving.",
      "AVA Fuel aide l'utilisateur a trouver la meilleure station, comprendre les ecarts de prix et anticiper les variations locales.": "AVA Fuel helps users find the best station, understand price differences, and anticipate local changes.",
      "Acces beta": "Beta access",
      "Demander le lien": "Request the link",
      "Comparaison carburant": "Fuel comparison",
      "Classement des stations selon le prix, la distance, le type de carburant et la pertinence du trajet.": "Station ranking by price, distance, fuel type, and route relevance.",
      "Carte claire avec stations proches, informations utiles et itineraire vers l'option la plus interessante.": "A clear map with nearby stations, useful information, and directions to the best option.",
      "Lecture des tendances pour aider l'utilisateur a choisir le bon moment pour faire le plein.": "Trend analysis to help users choose the right time to refuel.",
      "Stations proches": "Nearby stations",
      "Meilleur choix": "Best choice",
      "Comparaison": "Comparison",
      "Demain": "Tomorrow",
      "Probabilite de baisse moderee sur votre zone.": "Moderate probability of a price drop in your area.",
      "Trouver une place avec moins d'incertitude.": "Find a space with less uncertainty.",
      "AVA Parking combine disponibilite, trafic et prediction pour guider l'utilisateur vers la meilleure zone de stationnement.": "AVA Parking combines availability, traffic, and prediction to guide users to the best parking area.",
      "Affichage des parkings et zones avec probabilite de place disponible.": "Displays parking lots and areas with probability of available spaces.",
      "Prise en compte de la circulation pour eviter les zones lentes et saturées.": "Accounts for traffic to avoid slow and saturated areas.",
      "Suggestion de l'option la plus rationnelle selon distance, temps, prix et confiance.": "Suggests the most rational option based on distance, time, price, and confidence.",
      "Prediction zone": "Area prediction",
      "Trafic": "Traffic",
      "Meilleure option": "Best option",
      "Bonne probabilite et marche restante courte.": "Good probability and short remaining walk.",
      "Lire l'information avec plus de recul.": "Read information with more perspective.",
      "AVA News Verify aide a evaluer une news avec un score de credibilite, une analyse de source et une detection des signaux rhetoriques.": "AVA News Verify helps evaluate news with a credibility score, source analysis, and rhetorical signal detection.",
      "Credibilite news": "News credibility",
      "Analyse du titre, du contenu, de la coherence et des indices de fiabilite.": "Analysis of the headline, content, coherence, and reliability signals.",
      "Resultat lisible avec un score global et des explications courtes.": "Readable result with a global score and short explanations.",
      "Identification des signaux emotionnels, sensationnalistes ou trop affirmatifs.": "Identification of emotional, sensational, or overly assertive signals.",
      "Score global": "Global score",
      "Credibilite": "Credibility",
      "Transparence": "Transparency",
      "Bonne": "Good",
      "Source identifiee, contexte disponible.": "Source identified, context available.",
      "Rhetorique": "Rhetoric",
      "Signal": "Signal",
      "Risque": "Risk",
      "Moyen": "Medium",
      "Parlons d'AVA Intelligence.": "Let's talk about AVA Intelligence.",
      "Support utilisateur, beta test, partenariat, presse ou question privacy : un seul point de contact.": "User support, beta testing, partnerships, press, or privacy questions: one contact point.",
      "Pour les demandes de support, confidentialite, suppression de donnees et partenariats.": "For support, privacy, data deletion, and partnership requests.",
      "Download App": "Download App",
      "Contact / Download App": "Contact / Download App",
      "Le lien Google Play officiel peut etre place ici des que l'application est publiee.": "The official Google Play link can be placed here once the app is published.",
      "Confiance et donnees": "Trust and data",
      "Politique de confidentialite": "Privacy Policy",
      "Cette page explique comment AVA Intelligence traite les donnees liees a ses applications mobiles et services connectes.": "This page explains how AVA Intelligence processes data related to its mobile apps and connected services.",
      "Date d'effet": "Effective date",
      "Date d'effet :": "Effective date:",
      "Applications couvertes": "Covered applications",
      ": comparaison des prix carburant, stations et prediction de prix.": ": fuel price comparison, stations, and price prediction.",
      ": disponibilite parking, trafic et optimisation de place.": ": parking availability, traffic, and space optimization.",
      ": analyse de credibilite, score IA et detection rhetorique.": ": credibility analysis, AI score, and rhetorical detection.",
      "Informations traitees": "Information processed",
      "Selon les fonctionnalites utilisees, AVA peut traiter des informations techniques necessaires au fonctionnement du service, des donnees saisies par l'utilisateur, des donnees de localisation lorsque l'autorisation est accordee, ainsi que des donnees de diagnostic limitees pour ameliorer la fiabilite.": "Depending on the features used, AVA may process technical information required for service operation, user-entered data, location data when permission is granted, and limited diagnostic data to improve reliability.",
      "Utilisation des donnees": "Use of data",
      "Fournir les fonctions de comparaison, prediction, verification et optimisation.": "Provide comparison, prediction, verification, and optimization features.",
      "Afficher des resultats personnalises selon le contexte utilisateur.": "Display personalized results based on user context.",
      "Maintenir la securite, corriger les erreurs et ameliorer les performances.": "Maintain security, fix errors, and improve performance.",
      "Respecter les obligations legales applicables.": "Comply with applicable legal obligations.",
      "Partage et conservation": "Sharing and retention",
      "AVA Intelligence ne vend pas les donnees personnelles. Les donnees peuvent etre partagees uniquement avec des prestataires necessaires au fonctionnement, a la securite ou a la conformite du service. Elles sont conservees uniquement pendant la duree raisonnablement necessaire.": "AVA Intelligence does not sell personal data. Data may only be shared with providers required for service operation, security, or compliance. It is retained only for a reasonably necessary period.",
      "Contact privacy": "Privacy contact",
      "Pour toute question ou demande de suppression, contactez": "For any question or deletion request, contact",
      "Electricity best-time planning": "Electricity best-time planning",
      "Planifier les appareils de la maison selon les prix de l'electricite et estimer le cout avant de lancer.": "Plan home appliances based on electricity prices and estimate the cost before starting.",
      "Prix electricite sur 24 heures": "Electricity prices over 24 hours",
      "Meilleur horaire automatique": "Automatic best-time suggestion",
      "Estimation kWh et cout": "kWh and cost estimate",
      "Voir AVA ElectricityCost": "View AVA ElectricityCost",
      "Prix electricite": "Electricity prices",
      "Meilleur creux": "Best low-price window",
      "Lave-linge": "Washing machine",
      "0.31 € estime": "0.31 € estimated",
      "Fuel, ElectricityCost, Parking, News et Contact ont leurs propres URLs pour le referencement.": "Fuel, ElectricityCost, Parking, News, and Contact have their own URLs for search indexing.",
      "Planifier les appareils quand l'electricite coute moins cher.": "Plan appliances when electricity costs less.",
      "AVA ElectricityCost aide a choisir le meilleur moment pour lancer lave-linge, lave-vaisselle, aspirateur, four, climatisation ou radiateur electrique selon les prix de l'electricite.": "AVA ElectricityCost helps choose the best time to run washing machines, dishwashers, vacuum cleaners, ovens, air conditioners, or electric radiators based on electricity prices.",
      "Prix sur 24 heures": "Prices over 24 hours",
      "Voir les prix electricite a venir et choisir le pays ou la bidding zone adaptee.": "View upcoming electricity prices and choose the right country or bidding zone.",
      "Puissance appareil": "Device power",
      "Entrer la puissance en kW, la duree d'utilisation et la limite de puissance du contrat.": "Enter power in kW, usage duration, and contract power limit.",
      "Cout estime": "Estimated cost",
      "Comparer les horaires manuels et automatiques pour reduire le cout estime.": "Compare manual and automatic schedules to reduce estimated cost.",
      "Exemple de prix pour les prochaines heures.": "Example prices for the next hours.",
      "Ces donnees sont des exemples d'interface. Elles peuvent etre branchees plus tard sur une source de prix electricite par pays ou zone.": "These values are interface examples. They can later be connected to an electricity price source by country or zone.",
      "Heure": "Hour",
      "Prix": "Price",
      "Signal": "Signal",
      "Recommandation AVA": "AVA recommendation",
      "Attendre si possible": "Wait if possible",
      "Eleve": "High",
      "Eviter gros appareils": "Avoid large appliances",
      "Bas": "Low",
      "Bon moment": "Good time",
      "Tres bas": "Very low",
      "Meilleur choix": "Best choice",
      "Lave-vaisselle": "Dishwasher",
      "Four": "Oven",
      "Climatisation": "Air conditioner",
      "Formule de calcul": "Calculation formula",
      "Cout = energie consommee x prix par kWh": "Cost = energy consumed x price per kWh",
      "Exemple : si un appareil utilise 2 kW pendant 1.5 heure, il consomme 3 kWh. Si le prix electricite est 0.18 €/kWh, le cout estime est 0.54 €.": "Example: if a device uses 2 kW for 1.5 hours, it consumes 3 kWh. If the electricity price is 0.18 €/kWh, the estimated cost is 0.54 €.",
      "Fonctionnalites principales": "Main features",
      "Selection du pays ou de la bidding zone.": "Country or bidding zone selection.",
      "Profils utilisateurs, appareils favoris, historique et recommandations sauvegardees.": "User profiles, favorite appliances, history, and saved recommendations.",
      "Comparaison entre suggestion automatique, horaire de debut manuel et horaire de fin manuel.": "Comparison between automatic suggestion, manual start time, and manual finish time.",
      "Risque possible de depassement de puissance contrat.": "Possible risk of exceeding contract power limit.",
      "Important": "Important",
      "AVA ElectricityCost est un outil de planification et d'estimation. Les prix, couts et economies reels peuvent varier selon le fournisseur, le tarif, les taxes, le contrat et la consommation reelle de l'appareil.": "AVA ElectricityCost is a planning and estimation tool. Actual prices, costs, and savings may vary depending on provider, tariff, taxes, contract, and real device consumption."
    },
    es: {
      "Accueil": "Inicio",
      "Confidentialite": "Privacidad",
      "Choix de langue": "Eleccion de idioma",
      "Langue": "Idioma",
      "Navigation principale": "Navegacion principal",
      "Telecharger AVA sur Google Play": "Descargar AVA en Google Play",
      "Fonctionnalites principales": "Funciones principales",
      "Apercu de l'application AVA": "Vista previa de la aplicacion AVA",
      "Une plateforme mobile pour economiser sur le carburant, trouver une place plus vite, verifier l'information et optimiser chaque deplacement.": "Una plataforma movil para ahorrar combustible, encontrar aparcamiento mas rapido, verificar informacion y optimizar cada desplazamiento.",
      "Disponible sur": "Disponible en",
      "Demander une demo": "Solicitar una demo",
      "Prix carburant en temps reel": "Precios de combustible en tiempo real",
      "Smart parking prediction": "Prediccion inteligente de aparcamiento",
      "AI news verification": "Verificacion de noticias con IA",
      "Optimisation deplacement": "Optimizacion de desplazamientos",
      "Prediction demain": "Prediccion de manana",
      "Tendance locale": "Tendencia local",
      "12 places libres": "12 plazas libres",
      "Prediction haute": "Prediccion alta",
      "Produits AVA": "Productos AVA",
      "Une architecture claire pour trois besoins quotidiens.": "Una arquitectura clara para tres necesidades diarias.",
      "Chaque module AVA a sa propre page, ses propres fonctionnalites et une promesse simple pour l'utilisateur final.": "Cada modulo AVA tiene su propia pagina, funciones y una promesa simple para el usuario final.",
      "Comparer les prix carburant, voir les stations sur carte et anticiper les variations locales.": "Comparar precios de combustible, ver estaciones en el mapa y anticipar variaciones locales.",
      "Prix en temps reel": "Precios en tiempo real",
      "Cartes stations": "Mapas de estaciones",
      "Prediction prix": "Prediccion de precios",
      "Voir AVA Fuel": "Ver AVA Fuel",
      "Predire la disponibilite des parkings et guider l'utilisateur vers la meilleure option.": "Predecir la disponibilidad de aparcamiento y guiar al usuario hacia la mejor opcion.",
      "Disponibilite parking": "Disponibilidad de aparcamiento",
      "Prevision trafic": "Prevision de trafico",
      "Optimisation place": "Optimizacion de plaza",
      "Voir AVA Parking": "Ver AVA Parking",
      "Evaluer la credibilite d'une information avec un score IA et une lecture rhetorique.": "Evaluar la credibilidad de una informacion con una puntuacion de IA y un analisis retorico.",
      "Score credibilite": "Puntuacion de credibilidad",
      "Source transparency": "Transparencia de fuente",
      "Detection rhetorique": "Deteccion retorica",
      "Voir AVA News": "Ver AVA News",
      "Des interfaces pensees pour agir rapidement.": "Interfaces pensadas para actuar rapido.",
      "Les apercus ci-dessous montrent les ecrans cles a integrer ou remplacer plus tard par de vraies captures Google Play.": "Las vistas previas muestran pantallas clave que luego pueden sustituirse por capturas reales de Google Play.",
      "Carte carburant": "Mapa de combustible",
      "Station la moins chere": "Estacion mas barata",
      "Prediction parking": "Prediccion de aparcamiento",
      "Centre-ville": "Centro ciudad",
      "Temps estime": "Tiempo estimado",
      "Score IA": "Puntuacion IA",
      "Rhetorique detectee": "Retorica detectada",
      "Emotion forte": "Emocion fuerte",
      "Confiance": "Confianza",
      "Un site optimise pour inspirer confiance et ameliorer le SEO.": "Un sitio optimizado para generar confianza y mejorar el SEO.",
      "Messages clairs": "Mensajes claros",
      "Chaque produit explique sa valeur, ses cas d'usage et ses benefices concrets.": "Cada producto explica su valor, casos de uso y beneficios concretos.",
      "Telechargement visible": "Descarga visible",
      "Le bouton Google Play est present sur l'accueil et la section download.": "El boton de Google Play aparece en la pagina de inicio y en la seccion de descarga.",
      "Pages indexables": "Paginas indexables",
      "Fuel, Parking, News et Contact ont leurs propres URLs pour le referencement.": "Fuel, Parking, News y Contact tienen sus propias URLs para indexacion.",
      "Telecharger AVA ou demander l'acces.": "Descargar AVA o solicitar acceso.",
      "Ajoutez ici le lien officiel Google Play des que l'application est publiee. En attendant, le contact support peut recevoir les demandes beta, presse ou partenaires.": "Anade aqui el enlace oficial de Google Play cuando la app este publicada. Mientras tanto, soporte puede recibir solicitudes beta, prensa o socios.",
      "Comparer le carburant avant de rouler.": "Comparar combustible antes de conducir.",
      "AVA Fuel aide l'utilisateur a trouver la meilleure station, comprendre les ecarts de prix et anticiper les variations locales.": "AVA Fuel ayuda al usuario a encontrar la mejor estacion, entender diferencias de precio y anticipar variaciones locales.",
      "Acces beta": "Acceso beta",
      "Demander le lien": "Solicitar enlace",
      "Comparaison carburant": "Comparacion de combustible",
      "Classement des stations selon le prix, la distance, le type de carburant et la pertinence du trajet.": "Clasificacion de estaciones por precio, distancia, tipo de combustible y relevancia del trayecto.",
      "Carte claire avec stations proches, informations utiles et itineraire vers l'option la plus interessante.": "Mapa claro con estaciones cercanas, informacion util e itinerario hacia la mejor opcion.",
      "Lecture des tendances pour aider l'utilisateur a choisir le bon moment pour faire le plein.": "Analisis de tendencias para ayudar al usuario a elegir el mejor momento para repostar.",
      "Stations proches": "Estaciones cercanas",
      "Meilleur choix": "Mejor opcion",
      "Comparaison": "Comparacion",
      "Demain": "Manana",
      "Probabilite de baisse moderee sur votre zone.": "Probabilidad moderada de bajada en tu zona.",
      "Trouver une place avec moins d'incertitude.": "Encontrar una plaza con menos incertidumbre.",
      "AVA Parking combine disponibilite, trafic et prediction pour guider l'utilisateur vers la meilleure zone de stationnement.": "AVA Parking combina disponibilidad, trafico y prediccion para guiar al usuario hacia la mejor zona de estacionamiento.",
      "Affichage des parkings et zones avec probabilite de place disponible.": "Muestra aparcamientos y zonas con probabilidad de plazas disponibles.",
      "Prise en compte de la circulation pour eviter les zones lentes et saturées.": "Tiene en cuenta el trafico para evitar zonas lentas y saturadas.",
      "Suggestion de l'option la plus rationnelle selon distance, temps, prix et confiance.": "Sugiere la opcion mas racional segun distancia, tiempo, precio y confianza.",
      "Prediction zone": "Prediccion de zona",
      "Trafic": "Trafico",
      "Meilleure option": "Mejor opcion",
      "Bonne probabilite et marche restante courte.": "Buena probabilidad y caminata restante corta.",
      "Lire l'information avec plus de recul.": "Leer la informacion con mas perspectiva.",
      "AVA News Verify aide a evaluer une news avec un score de credibilite, une analyse de source et une detection des signaux rhetoriques.": "AVA News Verify ayuda a evaluar noticias con una puntuacion de credibilidad, analisis de fuente y deteccion de senales retoricas.",
      "Credibilite news": "Credibilidad de noticias",
      "Analyse du titre, du contenu, de la coherence et des indices de fiabilite.": "Analisis del titular, contenido, coherencia e indicios de fiabilidad.",
      "Resultat lisible avec un score global et des explications courtes.": "Resultado legible con puntuacion global y explicaciones breves.",
      "Identification des signaux emotionnels, sensationnalistes ou trop affirmatifs.": "Identificacion de senales emocionales, sensacionalistas o demasiado afirmativas.",
      "Score global": "Puntuacion global",
      "Credibilite": "Credibilidad",
      "Transparence": "Transparencia",
      "Bonne": "Buena",
      "Source identifiee, contexte disponible.": "Fuente identificada, contexto disponible.",
      "Rhetorique": "Retorica",
      "Signal": "Senal",
      "Risque": "Riesgo",
      "Moyen": "Medio",
      "Parlons d'AVA Intelligence.": "Hablemos de AVA Intelligence.",
      "Support utilisateur, beta test, partenariat, presse ou question privacy : un seul point de contact.": "Soporte de usuario, beta test, colaboraciones, prensa o privacidad: un unico punto de contacto.",
      "Pour les demandes de support, confidentialite, suppression de donnees et partenariats.": "Para solicitudes de soporte, privacidad, eliminacion de datos y colaboraciones.",
      "Download App": "Descargar App",
      "Contact / Download App": "Contacto / Descargar App",
      "Le lien Google Play officiel peut etre place ici des que l'application est publiee.": "El enlace oficial de Google Play puede colocarse aqui cuando la app este publicada.",
      "Confiance et donnees": "Confianza y datos",
      "Politique de confidentialite": "Politica de privacidad",
      "Cette page explique comment AVA Intelligence traite les donnees liees a ses applications mobiles et services connectes.": "Esta pagina explica como AVA Intelligence trata los datos vinculados a sus aplicaciones moviles y servicios conectados.",
      "Date d'effet": "Fecha de entrada en vigor",
      "Date d'effet :": "Fecha de entrada en vigor:",
      "Applications couvertes": "Aplicaciones cubiertas",
      ": comparaison des prix carburant, stations et prediction de prix.": ": comparacion de precios de combustible, estaciones y prediccion de precios.",
      ": disponibilite parking, trafic et optimisation de place.": ": disponibilidad de aparcamiento, trafico y optimizacion de plaza.",
      ": analyse de credibilite, score IA et detection rhetorique.": ": analisis de credibilidad, puntuacion IA y deteccion retorica.",
      "Informations traitees": "Informacion tratada",
      "Selon les fonctionnalites utilisees, AVA peut traiter des informations techniques necessaires au fonctionnement du service, des donnees saisies par l'utilisateur, des donnees de localisation lorsque l'autorisation est accordee, ainsi que des donnees de diagnostic limitees pour ameliorer la fiabilite.": "Segun las funciones utilizadas, AVA puede tratar informacion tecnica necesaria para el funcionamiento del servicio, datos introducidos por el usuario, datos de ubicacion cuando se concede permiso y datos de diagnostico limitados para mejorar la fiabilidad.",
      "Utilisation des donnees": "Uso de los datos",
      "Fournir les fonctions de comparaison, prediction, verification et optimisation.": "Proporcionar funciones de comparacion, prediccion, verificacion y optimizacion.",
      "Afficher des resultats personnalises selon le contexte utilisateur.": "Mostrar resultados personalizados segun el contexto del usuario.",
      "Maintenir la securite, corriger les erreurs et ameliorer les performances.": "Mantener la seguridad, corregir errores y mejorar el rendimiento.",
      "Respecter les obligations legales applicables.": "Cumplir las obligaciones legales aplicables.",
      "Partage et conservation": "Comparticion y conservacion",
      "AVA Intelligence ne vend pas les donnees personnelles. Les donnees peuvent etre partagees uniquement avec des prestataires necessaires au fonctionnement, a la securite ou a la conformite du service. Elles sont conservees uniquement pendant la duree raisonnablement necessaire.": "AVA Intelligence no vende datos personales. Los datos solo pueden compartirse con proveedores necesarios para el funcionamiento, la seguridad o la conformidad del servicio. Se conservan solo durante el tiempo razonablemente necesario.",
      "Contact privacy": "Contacto de privacidad",
      "Pour toute question ou demande de suppression, contactez": "Para cualquier pregunta o solicitud de eliminacion, contacta con",
      "Electricity best-time planning": "Planificacion del mejor horario electrico",
      "Planifier les appareils de la maison selon les prix de l'electricite et estimer le cout avant de lancer.": "Planificar los electrodomesticos segun los precios de la electricidad y estimar el coste antes de empezar.",
      "Prix electricite sur 24 heures": "Precios de electricidad en 24 horas",
      "Meilleur horaire automatique": "Mejor horario automatico",
      "Estimation kWh et cout": "Estimacion kWh y coste",
      "Voir AVA ElectricityCost": "Ver AVA ElectricityCost",
      "Prix electricite": "Precios de electricidad",
      "Meilleur creux": "Mejor periodo barato",
      "Lave-linge": "Lavadora",
      "0.31 € estime": "0.31 € estimado",
      "Fuel, ElectricityCost, Parking, News et Contact ont leurs propres URLs pour le referencement.": "Fuel, ElectricityCost, Parking, News y Contact tienen sus propias URLs para indexacion.",
      "Planifier les appareils quand l'electricite coute moins cher.": "Planificar los aparatos cuando la electricidad cuesta menos.",
      "AVA ElectricityCost aide a choisir le meilleur moment pour lancer lave-linge, lave-vaisselle, aspirateur, four, climatisation ou radiateur electrique selon les prix de l'electricite.": "AVA ElectricityCost ayuda a elegir el mejor momento para usar lavadora, lavavajillas, aspiradora, horno, aire acondicionado o radiador electrico segun los precios de electricidad.",
      "Prix sur 24 heures": "Precios en 24 horas",
      "Voir les prix electricite a venir et choisir le pays ou la bidding zone adaptee.": "Ver los proximos precios de electricidad y elegir el pais o zona de oferta adecuada.",
      "Puissance appareil": "Potencia del aparato",
      "Entrer la puissance en kW, la duree d'utilisation et la limite de puissance du contrat.": "Introducir potencia en kW, duracion de uso y limite de potencia del contrato.",
      "Cout estime": "Coste estimado",
      "Comparer les horaires manuels et automatiques pour reduire le cout estime.": "Comparar horarios manuales y automaticos para reducir el coste estimado.",
      "Exemple de prix pour les prochaines heures.": "Ejemplo de precios para las proximas horas.",
      "Ces donnees sont des exemples d'interface. Elles peuvent etre branchees plus tard sur une source de prix electricite par pays ou zone.": "Estos datos son ejemplos de interfaz. Mas tarde pueden conectarse a una fuente de precios de electricidad por pais o zona.",
      "Heure": "Hora",
      "Prix": "Precio",
      "Signal": "Senal",
      "Recommandation AVA": "Recomendacion AVA",
      "Attendre si possible": "Esperar si es posible",
      "Eleve": "Alto",
      "Eviter gros appareils": "Evitar grandes aparatos",
      "Bas": "Bajo",
      "Bon moment": "Buen momento",
      "Tres bas": "Muy bajo",
      "Meilleur choix": "Mejor opcion",
      "Lave-vaisselle": "Lavavajillas",
      "Four": "Horno",
      "Climatisation": "Aire acondicionado",
      "Formule de calcul": "Formula de calculo",
      "Cout = energie consommee x prix par kWh": "Coste = energia consumida x precio por kWh",
      "Exemple : si un appareil utilise 2 kW pendant 1.5 heure, il consomme 3 kWh. Si le prix electricite est 0.18 €/kWh, le cout estime est 0.54 €.": "Ejemplo: si un aparato usa 2 kW durante 1.5 horas, consume 3 kWh. Si el precio electrico es 0.18 €/kWh, el coste estimado es 0.54 €.",
      "Fonctionnalites principales": "Funciones principales",
      "Selection du pays ou de la bidding zone.": "Seleccion del pais o zona de oferta.",
      "Profils utilisateurs, appareils favoris, historique et recommandations sauvegardees.": "Perfiles de usuario, aparatos favoritos, historial y recomendaciones guardadas.",
      "Comparaison entre suggestion automatique, horaire de debut manuel et horaire de fin manuel.": "Comparacion entre sugerencia automatica, hora de inicio manual y hora de fin manual.",
      "Risque possible de depassement de puissance contrat.": "Posible riesgo de superar el limite de potencia contratada.",
      "Important": "Importante",
      "AVA ElectricityCost est un outil de planification et d'estimation. Les prix, couts et economies reels peuvent varier selon le fournisseur, le tarif, les taxes, le contrat et la consommation reelle de l'appareil.": "AVA ElectricityCost es una herramienta de planificacion y estimacion. Los precios, costes y ahorros reales pueden variar segun proveedor, tarifa, impuestos, contrato y consumo real del aparato."
    }
  };

  const pageMeta = {
    "index.html": {
      en: ["AVA Intelligence - Smart Mobility & AI Platform", "AVA Intelligence is a Smart Mobility & AI platform for fuel comparison, parking prediction, and AI news verification."],
      es: ["AVA Intelligence - Plataforma de movilidad inteligente e IA", "AVA Intelligence es una plataforma de movilidad inteligente e IA para comparar combustible, predecir aparcamiento y verificar noticias."]
    },
    "fuel.html": {
      en: ["AVA Fuel - Fuel comparison and price prediction", "AVA Fuel compares fuel prices, displays stations on a map, and predicts price changes."],
      es: ["AVA Fuel - Comparacion de combustible y prediccion de precios", "AVA Fuel compara precios de combustible, muestra estaciones en un mapa y predice cambios de precio."]
    },
    "electricity.html": {
      en: ["AVA ElectricityCost - Electricity planning and kWh cost", "AVA ElectricityCost helps plan home appliances based on electricity prices and estimate kWh costs."],
      es: ["AVA ElectricityCost - Planificacion electrica y coste kWh", "AVA ElectricityCost ayuda a planificar electrodomesticos segun precios de electricidad y estimar costes kWh."]
    },
    "parking.html": {
      en: ["AVA Parking - Smart parking prediction", "AVA Parking predicts space availability, anticipates traffic, and optimizes parking decisions."],
      es: ["AVA Parking - Prediccion inteligente de aparcamiento", "AVA Parking predice la disponibilidad de plazas, anticipa el trafico y optimiza el aparcamiento."]
    },
    "news.html": {
      en: ["AVA News Verify - AI news verification", "AVA News Verify analyzes news credibility, assigns an AI score, and detects rhetorical signals."],
      es: ["AVA News Verify - Verificacion de noticias con IA", "AVA News Verify analiza la credibilidad de noticias, asigna una puntuacion IA y detecta senales retoricas."]
    },
    "contact.html": {
      en: ["Contact / Download App - AVA Intelligence", "Contact AVA Intelligence for support, beta access, partnerships, press, or data deletion requests."],
      es: ["Contacto / Descargar App - AVA Intelligence", "Contacta con AVA Intelligence para soporte, acceso beta, colaboraciones, prensa o solicitudes de eliminacion de datos."]
    },
    "privacy.html": {
      en: ["Privacy Policy - AVA Intelligence", "Privacy policy for AVA Intelligence applications."],
      es: ["Politica de privacidad - AVA Intelligence", "Politica de privacidad de las aplicaciones AVA Intelligence."]
    }
  };

  const originalTitle = document.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";
  const textNodes = [];
  const attributes = [];

  function key(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function withSpacing(source, translated) {
    return source.match(/^\s*/)[0] + translated + source.match(/\s*$/)[0];
  }

  function collect() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "OPTION"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return key(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    while (walker.nextNode()) {
      textNodes.push({ node: walker.currentNode, source: walker.currentNode.nodeValue });
    }

    document.querySelectorAll("[aria-label]").forEach((node) => {
      attributes.push({ node, source: node.getAttribute("aria-label") });
    });
  }

  function setLanguage(lang) {
    const dictionary = translations[lang] || {};

    textNodes.forEach(({ node, source }) => {
      const sourceKey = key(source);
      node.nodeValue = lang === "fr" ? source : withSpacing(source, dictionary[sourceKey] || sourceKey);
    });

    attributes.forEach(({ node, source }) => {
      const sourceKey = key(source);
      node.setAttribute("aria-label", lang === "fr" ? source : dictionary[sourceKey] || source);
    });

    const page = location.pathname.split("/").pop() || "index.html";
    const meta = pageMeta[page] && pageMeta[page][lang];
    document.documentElement.lang = lang;
    document.title = meta ? meta[0] : originalTitle;
    if (metaDescription) {
      metaDescription.setAttribute("content", meta ? meta[1] : originalDescription);
    }
    localStorage.setItem("avaLanguage", lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    collect();
    const select = document.querySelector("[data-language-select]");
    const saved = localStorage.getItem("avaLanguage") || "fr";
    const lang = ["fr", "en", "es"].includes(saved) ? saved : "fr";

    if (select) {
      select.value = lang;
      select.addEventListener("change", (event) => setLanguage(event.target.value));
    }

    setLanguage(lang);
  });
})();
