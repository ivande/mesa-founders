"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Vision() {
  const { t } = useT();

  return (
    <ScrollSection id="vision">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.vision.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-16">
          {t.vision.subtitle}
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {t.vision.pillars.map((pillar, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="text-center md:text-left">
              <div className="w-12 h-px bg-accent mb-6 mx-auto md:mx-0" />
              <h3 className="font-serif text-2xl font-semibold mb-4 text-accent">
                {pillar.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="text-text-secondary text-base mt-16 max-w-3xl text-center mx-auto italic">
          {t.vision.closingQuote}
        </p>
      </FadeIn>
    </ScrollSection>
  );
}
