"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Platform() {
  const { t } = useT();

  return (
    <ScrollSection id="platform" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.platform.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          {t.platform.subtitle}
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.platform.modules.map((mod, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-bg-card border border-border rounded-lg p-6 h-full flex flex-col">
              <h3 className="font-serif text-xl font-semibold mb-1">
                {mod.name}
              </h3>
              <p className="text-accent text-sm italic mb-5">{mod.tagline}</p>
              <ul className="space-y-2 mt-auto">
                {mod.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="text-text-secondary text-sm flex items-start gap-2"
                  >
                    <span className="text-accent mt-1.5 text-[8px]">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </ScrollSection>
  );
}
