"use client";

import { useState, useEffect } from "react";
import { useT } from "@/i18n/context";
import { LOCALES, type Locale } from "@/i18n/types";

const LABELS: Record<Locale, string> = { en: "EN", es: "ES", fr: "FR" };

export function LanguageSwitcher() {
  const { locale, setLocale } = useT();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inactiveBase = pastHero
    ? "text-text-secondary/40 group-hover:text-accent"
    : "text-text-on-dark/40 group-hover:text-accent";

  const dotBase = pastHero
    ? "text-text-secondary/20 group-hover:text-accent/40"
    : "text-text-on-dark/20 group-hover:text-accent/40";

  return (
    <div className="group fixed top-4 left-6 z-50 flex items-center gap-1.5 text-xs tracking-widest uppercase">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className={`select-none transition-colors duration-200 ${dotBase}`}>
              &middot;
            </span>
          )}
          <button
            onClick={() => setLocale(l)}
            className={`transition-colors duration-200 ${
              locale === l
                ? "text-accent font-medium"
                : `${inactiveBase} hover:!text-accent`
            }`}
          >
            {LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
