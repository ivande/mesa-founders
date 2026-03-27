"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Journey() {
  const { t } = useT();

  return (
    <ScrollSection id="journey">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.journey.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-16">
          {t.journey.subtitle}
        </p>
      </FadeIn>

      <div className="space-y-0">
        {t.journey.stages.map((stage, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex gap-6 md:gap-10 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-accent text-sm font-medium shrink-0">
                  {stage.step}
                </div>
                {i < t.journey.stages.length - 1 && (
                  <div className="w-px h-full bg-border min-h-[2rem]" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {stage.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                  {stage.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </ScrollSection>
  );
}
