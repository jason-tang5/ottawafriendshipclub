"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { CONTENT, type Lang } from "../_content";

type LangContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof CONTENT)[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  return (
    <LangContext.Provider value={{ lang, toggle, t: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function LangToggle({ className }: { className?: string }) {
  const { toggle, t } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch language"
      className={`rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary ${className ?? ""}`}
    >
      {t.langButton}
    </button>
  );
}
