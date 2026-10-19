import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./locales/en";
import is from "./locales/is";
import es from "./locales/es";
import pt from "./locales/pt";
import de from "./locales/de";
import fr from "./locales/fr";
import zh from "./locales/zh";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "is", label: "Íslenska" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
];

const DICTS = { en, is, es, pt, de, fr, zh };
const STORAGE_KEY = "wayora-language";

const LanguageContext = createContext(null);

function lookup(dict, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    return saved && DICTS[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const value = lookup(DICTS[lang], path);
    if (value !== undefined) return value;
    const fallback = lookup(en, path);
    return fallback !== undefined ? fallback : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}