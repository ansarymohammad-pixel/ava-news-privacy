import { type ReactNode, useRef } from "react";
import { type Language } from "../content";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { usePreferences } from "../Preferences";
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="AVA Intelligent">
      <span className="brand-mark">
        a<span>v</span>a
      </span>
      <span>
        AVA <b>Intelligent</b>
      </span>
    </Link>
  );
}
export function Header() {
  const { t, language, setLanguage, theme, setTheme } = usePreferences();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="header">
      <div className="shell header-inner">
        <Brand />
        <button
          ref={menuButton}
          className="mobile-toggle"
          aria-label={open ? t.close : t.menu}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              menuButton.current?.focus();
            }
          }}
          id="primary-nav"
          aria-label={t.menu}
          className={open ? "navigation is-open" : "navigation"}
        >
          <Link to="/#applications" onClick={() => setOpen(false)}>
            {t.nav[0]}
          </Link>
          <Link to="/#approach" onClick={() => setOpen(false)}>
            {t.nav[1]}
          </Link>
          <Link to="/analytics" onClick={() => setOpen(false)}>
            {t.nav[2]}
          </Link>
          <div className="nav-controls">
            <label className="sr-only" htmlFor="language">
              {t.language}
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <button
              aria-label={t.theme}
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <Link className="nav-contact" to="/contact">
            {t.contact}
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  const { t } = usePreferences();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Brand />
            <p>{t.footer}</p>
          </div>
          <div className="footer-links">
            <a href="/privacy.html">{t.privacy}</a>
            <a href="/delete-account.html">{t.deletion}</a>
            <a href="/mindmatch/child-safety/">{t.safety}</a>
            <a href="/legacy-home.html">{t.legacy}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AVA Intelligent</span>
          <span>{t.preview} / 01</span>
        </div>
      </div>
    </footer>
  );
}
export default function Layout({ children }: { children: ReactNode }) {
  const { t } = usePreferences();
  return (
    <>
      <a
        className="skip-link"
        href="#/#main-content"
        onClick={() => document.getElementById("main-content")?.focus()}
      >
        {t.skip}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
