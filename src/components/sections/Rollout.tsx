"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Rollout() {
  const { t } = useT();

  return (
    <ScrollSection id="rollout" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.rollout.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          {t.rollout.subtitle}
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {t.rollout.phases.map((phase, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-bg-card border border-border rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent font-serif font-semibold text-lg">
                  {phase.phase}
                </span>
                <span className="text-text-secondary text-sm">
                  {phase.timeline}
                </span>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="text-text-secondary text-sm flex items-start gap-2"
                  >
                    <span className="text-accent mt-1.5 text-[8px]">●</span>
                    {item}
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
