import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";
import { copy, languages, type Language, type Translation } from "./content";
type Theme = "light" | "dark";
interface PreferenceContext {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  t: Translation;
}
const Context = createContext<PreferenceContext | null>(null);
function saved(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
export function Preferences({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const v = saved("avaLanguage", "en");
    return languages.includes(v as Language) ? (v as Language) : "en";
  });
  const [theme, setTheme] = useState<Theme>(() =>
    saved("avaTheme", "light") === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = copy[language].intro;
    try {
      localStorage.setItem("avaLanguage", language);
      localStorage.setItem("avaTheme", theme);
    } catch {
      /* Storage is optional. */
    }
    window.dispatchEvent(
      new CustomEvent("ava-language-change", { detail: { lang: language } }),
    );
  }, [language, theme]);
  return (
    <Context.Provider
      value={{ language, setLanguage, theme, setTheme, t: copy[language] }}
    >
      {children}
    </Context.Provider>
  );
}
export function usePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error("Preferences provider is required");
  return value;
}
