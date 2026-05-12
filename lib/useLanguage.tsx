"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { copy, type Lang, type Copy } from "./copy";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("mts_lang") as Lang | null;
    if (stored === "it" || stored === "en") {
      setLangState(stored);
    } else if (navigator.language.startsWith("it")) {
      setLangState("it");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("mts_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: copy[lang] as Copy }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
