import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, BarChart3, Users } from "lucide-react";
import { usePreferences } from "../Preferences";
const labels = {
  en: {
    title: "A clearer view of your audience.",
    intro:
      "Website activity over the last 14 days, from the existing AVA analytics service.",
    views: "Page views",
    visitors: "Approximate daily visitors",
    daily: "Daily page views",
    period: "Last 14 days",
    loading: "Loading analytics…",
    error: "Analytics is currently unavailable. Please try again later.",
    retry: "Refresh data",
    empty: "No visits recorded for this period.",
    source: "Source: AVA analytics API",
    note: "Visitor total is the sum of daily estimates, not unique people across the entire period.",
    table: "View daily data",
    date: "Date",
    home: "Back to home",
  },
  fr: {
    title: "Une vue plus claire de votre audience.",
    intro:
      "Activite du site sur les 14 derniers jours, depuis le service analytics AVA existant.",
    views: "Pages vues",
    visitors: "Visiteurs quotidiens approx.",
    daily: "Pages vues par jour",
    period: "14 derniers jours",
    loading: "Chargement des statistiques…",
    error:
      "Les statistiques sont indisponibles pour le moment. Reessayez plus tard.",
    retry: "Actualiser",
    empty: "Aucune visite enregistree sur cette periode.",
    source: "Source : API analytics AVA",
    note: "Le total visiteurs est la somme des estimations quotidiennes, pas des personnes uniques sur toute la periode.",
    table: "Voir les donnees quotidiennes",
    date: "Date",
    home: "Retour a l’accueil",
  },
  es: {
    title: "Una vision mas clara de tu audiencia.",
    intro:
      "Actividad del sitio durante los ultimos 14 dias, desde el servicio analytics AVA existente.",
    views: "Paginas vistas",
    visitors: "Visitantes diarios aprox.",
    daily: "Paginas vistas por dia",
    period: "Ultimos 14 dias",
    loading: "Cargando estadisticas…",
    error: "Las estadisticas no estan disponibles. Intentalo mas tarde.",
    retry: "Actualizar",
    empty: "No hay visitas registradas en este periodo.",
    source: "Fuente: API analytics AVA",
    note: "El total de visitantes suma las estimaciones diarias, no personas unicas de todo el periodo.",
    table: "Ver datos diarios",
    date: "Fecha",
    home: "Volver al inicio",
  },
};
export function analyticsUrl() {
  const base =
    window.AVA_API_URL ||
    (["avaintelligent.info", "www.avaintelligent.info"].includes(
      location.hostname,
    )
      ? "https://api.avaintelligent.info"
      : "http://127.0.0.1:8000");
  return base.replace(/\/$/, "") + "/analytics/daily?days=14";
}
export default function Analytics() {
  const { language } = usePreferences();
  const t = labels[language];
  const [state, setState] = useState({ status: "loading" });
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });
    const timer = setTimeout(() => controller.abort(), 12000);
    fetch(analyticsUrl(), { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw Error("Unavailable");
        return r.json();
      })
      .then((data) => {
        if (
          !Array.isArray(data.days) ||
          !Number.isFinite(data.total_page_views) ||
          !Number.isFinite(data.total_unique_visitors) ||
          data.days.some(
            (d) =>
              !/^\d{4}-\d{2}-\d{2}$/.test(d.date) ||
              !Number.isFinite(d.page_views) ||
              d.page_views < 0 ||
              !Number.isFinite(d.unique_visitors) ||
              d.unique_visitors < 0,
          )
        )
          throw Error("Invalid data");
        setState({ status: "ready", data });
      })
      .catch(() => {
        if (!disposed) setState({ status: "error" });
      })
      .finally(() => clearTimeout(timer));
    let disposed = false;
    return () => {
      disposed = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [revision]);
  useEffect(() => {
    document.title = "Analytics | AVA Intelligent";
  }, [language]);
  const data = state.data;
  const maximum = data ? Math.max(1, ...data.days.map((d) => d.page_views)) : 1;
  const number = (n) => new Intl.NumberFormat(language).format(n);
  const date = (value) =>
    new Date(value + "T00:00:00").toLocaleDateString(language, {
      month: "short",
      day: "numeric",
    });
  return (
    <section className="shell section analytics-page">
      <Link to="/" className="button-text">
        <ArrowLeft size={16} />
        {t.home}
      </Link>
      <p className="eyebrow">AVA / ANALYTICS</p>
      <h1>{t.title}</h1>
      <p className="hero-intro">{t.intro}</p>
      <div className="analytics-metrics">
        <article>
          <BarChart3 size={22} />
          <span>{t.views}</span>
          <strong>{data ? number(data.total_page_views) : "—"}</strong>
        </article>
        <article>
          <Users size={22} />
          <span>{t.visitors}</span>
          <strong>{data ? number(data.total_unique_visitors) : "—"}</strong>
        </article>
      </div>
      <div className="analytics-panel">
        <div className="analytics-panel-heading">
          <div>
            <h2>{t.daily}</h2>
            <p>{t.period}</p>
          </div>
          <button
            className="button-text"
            disabled={state.status === "loading"}
            onClick={() => setRevision((v) => v + 1)}
          >
            <RefreshCw size={16} />
            {t.retry}
          </button>
        </div>
        <div aria-live="polite" role="status">
          {state.status === "loading" && (
            <p className="analytics-message">{t.loading}</p>
          )}
          {state.status === "error" && (
            <p className="analytics-message">{t.error}</p>
          )}
        </div>
        {data && (
          <>
            {data.total_page_views === 0 ? (
              <p className="analytics-message">{t.empty}</p>
            ) : (
              <div className="analytics-bars" aria-label={t.daily}>
                {data.days.map((d) => (
                  <div className="analytics-day" key={d.date}>
                    <strong>{number(d.page_views)}</strong>
                    <div className="analytics-bar-space">
                      <span
                        style={{ height: (d.page_views / maximum) * 100 + "%" }}
                      />
                    </div>
                    <span>{date(d.date)}</span>
                  </div>
                ))}
              </div>
            )}
            <details className="analytics-table">
              <summary>{t.table}</summary>
              <table>
                <thead>
                  <tr>
                    <th>{t.date}</th>
                    <th>{t.views}</th>
                    <th>{t.visitors}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.days.map((d) => (
                    <tr key={d.date}>
                      <th scope="row">{date(d.date)}</th>
                      <td>{number(d.page_views)}</td>
                      <td>{number(d.unique_visitors)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </details>
            <p className="analytics-source">{t.source}</p>
          </>
        )}
      </div>
      <p className="analytics-note">{t.note}</p>
    </section>
  );
}
