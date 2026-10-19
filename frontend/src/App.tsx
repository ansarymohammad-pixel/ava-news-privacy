import { lazy, Suspense, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Preferences, usePreferences } from "./Preferences";
const Contact = lazy(() => import("./pages/Contact"));
const Analytics = lazy(() => import("./pages/Analytics"));
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const { language, t } = usePreferences();
  useEffect(() => {
    document.title =
      pathname === "/contact"
        ? "Contact | AVA Intelligent"
        : pathname === "/analytics"
          ? "Analytics | AVA Intelligent"
          : "AVA Intelligent | " + t.headline;
  }, [pathname, language, t.headline]);
  useEffect(() => {
    if (hash)
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function NotFound() {
  const { t } = usePreferences();
  return (
    <div className="shell section">
      <h1>{t.notfound}</h1>
      <Link to="/">{t.home}</Link>
    </div>
  );
}
export default function App() {
  return (
    <Preferences>
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <ScrollManager />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/analytics"
                element={
                  <Suspense
                    fallback={
                      <div className="shell section" role="status">
                        Analytics…
                      </div>
                    }
                  >
                    <Analytics />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense
                    fallback={
                      <div className="shell section" role="status">
                        AVA…
                      </div>
                    }
                  >
                    <Contact />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </MotionConfig>
    </Preferences>
  );
}
