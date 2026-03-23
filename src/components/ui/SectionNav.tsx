"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "vision", label: "Vision" },
  { id: "platform", label: "Platform" },
  { id: "journey", label: "Journey" },
  { id: "rollout", label: "Rollout" },
  { id: "partner", label: "Partner" },
  { id: "workshop-cta", label: "Workshop" },
];

export function SectionNav() {
  const [active, setActive] = useState("hero");

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

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={section.label}
        >
          <span
            className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              active === section.id ? "text-accent" : "text-text-secondary"
            }`}
          >
            {section.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === section.id
                ? "w-3 h-3 bg-accent"
                : "w-2 h-2 bg-border hover:bg-accent-light"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
