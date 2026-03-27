"use client";

import { useT } from "@/i18n/context";
import { LOCALES, type Locale } from "@/i18n/types";

const LABELS: Record<Locale, string> = { en: "EN", es: "ES", fr: "FR" };

export function LanguageSwitcher() {
  const { locale, setLocale } = useT();

  return (
    <div className="fixed top-4 left-6 z-50 flex items-center gap-1.5 text-xs tracking-widest uppercase">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-text-on-dark/20 select-none">&middot;</span>}
          <button
            onClick={() => setLocale(l)}
            className={`transition-colors duration-200 ${
              locale === l
                ? "text-accent font-medium"
                : "text-text-on-dark/40 hover:text-text-on-dark/70"
            }`}
          >
            {LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
