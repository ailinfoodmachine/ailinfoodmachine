"use client";

import en from "@/locales/en.json";
import zh from "@/locales/zh.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import ru from "@/locales/ru.json";
import ar from "@/locales/ar.json";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dictionaries = { en, zh, es, fr, ru, ar };
export const languages = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "es", label: "ES", dir: "ltr" },
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "ru", label: "RU", dir: "ltr" },
  { code: "ar", label: "AR", dir: "rtl" }
];

function getDirection(language) {
  return languages.find((item) => item.code === language)?.dir || "ltr";
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-language");
    if (saved && dictionaries[saved]) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = getDirection(lang);
  }, [lang]);

  const changeLanguage = (value) => {
    setLang(value);
    window.localStorage.setItem("site-language", value);
  };

  const value = useMemo(
    () => ({ lang, setLang: changeLanguage, t: dictionaries[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
