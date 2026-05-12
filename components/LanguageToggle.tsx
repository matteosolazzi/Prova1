"use client";

import { useLanguage } from "@/lib/useLanguage";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="fixed top-0 right-0 z-50 px-6 py-5 flex items-center gap-2 text-sm tracking-wide"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <button
        onClick={() => setLang("it")}
        aria-label="Passa all'italiano"
        className="cursor-pointer transition-colors"
        style={{ color: lang === "it" ? "var(--foreground)" : "var(--gray-2)" }}
      >
        IT
      </button>
      <span style={{ color: "var(--gray-2)" }}>·</span>
      <button
        onClick={() => setLang("en")}
        aria-label="Switch to English"
        className="cursor-pointer transition-colors"
        style={{ color: lang === "en" ? "var(--foreground)" : "var(--gray-2)" }}
      >
        EN
      </button>
    </div>
  );
}
