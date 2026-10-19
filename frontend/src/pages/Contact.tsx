import { Link } from "react-router-dom";
import { Mail, ArrowLeft, ArrowUpRight } from "lucide-react";
import { products, type Language } from "../content";
import { usePreferences } from "../Preferences";
import ApplicationCard from "../components/ApplicationCard";
type ContactCopy = {
  title: string;
  intro: string;
  email: string;
  emailBody: string;
  requests: string;
  requestsBody: string;
  downloads: string;
  downloadBody: string;
  back: string;
};
const copy: Record<Language, ContactCopy> = {
  en: {
    title: "Let’s talk about AVA Intelligent.",
    intro:
      "User support, partnerships, beta testing, press or privacy questions. One point of contact.",
    email: "Start a conversation",
    emailBody: "Tell us which application you use and how we can help.",
    requests: "Support and privacy",
    requestsBody:
      "For support, privacy, account or data deletion, and partnership requests, contact our support team.",
    downloads: "Find your AVA application.",
    downloadBody:
      "Choose an application to explore its features or download it directly from Google Play.",
    back: "Back to home",
  },
  fr: {
    title: "Parlons d’AVA Intelligent.",
    intro:
      "Support utilisateur, partenariats, beta test, presse ou confidentialite. Un seul point de contact.",
    email: "Commencons une conversation",
    emailBody:
      "Indiquez l’application que vous utilisez et comment nous pouvons vous aider.",
    requests: "Support et confidentialite",
    requestsBody:
      "Pour le support, la confidentialite, la suppression de compte ou de donnees et les partenariats, contactez notre equipe.",
    downloads: "Trouvez votre application AVA.",
    downloadBody:
      "Decouvrez les fonctionnalites de chaque application ou telechargez-la directement sur Google Play.",
    back: "Retour a l’accueil",
  },
  es: {
    title: "Hablemos de AVA Intelligent.",
    intro:
      "Soporte, colaboraciones, pruebas beta, prensa o privacidad. Un unico punto de contacto.",
    email: "Iniciemos una conversacion",
    emailBody: "Indica que aplicacion utilizas y como podemos ayudarte.",
    requests: "Soporte y privacidad",
    requestsBody:
      "Para soporte, privacidad, eliminacion de cuenta o datos y colaboraciones, contacta con nuestro equipo.",
    downloads: "Encuentra tu aplicacion AVA.",
    downloadBody:
      "Explora las funciones de cada aplicacion o descargala directamente desde Google Play.",
    back: "Volver al inicio",
  },
};
export default function Contact() {
  const { language, t } = usePreferences();
  const c = copy[language];
  return (
    <section className="shell section analytics-page">
      <Link className="button-text" to="/">
        <ArrowLeft size={16} />
        {c.back}
      </Link>
      <p className="eyebrow">AVA / CONNECT</p>
      <h1>{c.title}</h1>
      <p className="hero-intro">{c.intro}</p>
      <div className="contact-info-grid">
        <article className="app-card">
          <div className="card-top">
            <Mail size={24} />
          </div>
          <h2>{c.email}</h2>
          <p>{c.emailBody}</p>
          <a className="card-link" href="mailto:support@avaintelligent.info">
            support@avaintelligent.info
            <ArrowUpRight size={16} />
          </a>
        </article>
        <article className="app-card">
          <h2>{c.requests}</h2>
          <p>{c.requestsBody}</p>
          <div className="contact-policy-links">
            <a className="button-text" href="/privacy.html">
              {t.privacy}
              <ArrowUpRight size={16} />
            </a>
            <a className="button-text" href="/delete-account.html">
              {t.deletion}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </div>
      <div className="section-heading">
        <div>
          <p className="eyebrow">AVA / APPS</p>
          <h2>{c.downloads}</h2>
        </div>
        <p>{c.downloadBody}</p>
      </div>
      <div className="apps-grid">
        {products.map((product, index) => (
          <ApplicationCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
