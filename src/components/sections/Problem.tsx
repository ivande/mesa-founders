"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Problem() {
  const { t } = useT();

  return (
    <ScrollSection id="problem" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.problem.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mb-12">
          {t.problem.subtitle}
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.problem.painPoints.map((point, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-bg-card border border-border rounded-lg p-6 h-full">
              <div className="w-2 h-2 rounded-full bg-accent mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <p className="text-text-secondary italic text-base mt-12 max-w-3xl border-l-2 border-accent pl-6">
          {t.problem.quote}
        </p>
      </FadeIn>
    </ScrollSection>
  );
}
