"use client";

import en from "@/locales/en.json";
import zh from "@/locales/zh.json";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dictionaries = { en, zh };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-language");
    if (saved && dictionaries[saved]) setLang(saved);
  }, []);

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
