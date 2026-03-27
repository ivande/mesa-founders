"use client";

import { useEffect, useState } from "react";
import { useT } from "@/i18n/context";

const sectionIds = [
  "hero", "problem", "vision", "platform", "journey", "rollout", "partner", "workshop-cta",
] as const;

type NavKey = "home" | "problem" | "vision" | "platform" | "journey" | "rollout" | "partner" | "workshop";

const idToNavKey: Record<string, NavKey> = {
  hero: "home",
  problem: "problem",
  vision: "vision",
  platform: "platform",
  journey: "journey",
  rollout: "rollout",
  partner: "partner",
  "workshop-cta": "workshop",
};

export function SectionNav() {
  const [active, setActive] = useState("hero");
  const { t } = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sectionIds.map((id) => {
        const label = t.nav[idToNavKey[id]];
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3 justify-end"
            aria-label={label}
          >
            <span
              className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                active === id ? "text-accent" : "text-text-secondary"
              }`}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? "w-3 h-3 bg-accent"
                  : "w-2 h-2 bg-border hover:bg-accent-light"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
