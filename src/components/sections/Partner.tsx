"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";
import { useT } from "@/i18n/context";

export function Partner() {
  const { t } = useT();

  return (
    <ScrollSection id="partner">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          {t.partner.title}
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          {t.partner.subtitle}
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">
              {t.partner.whatYouGet}
            </h3>
            <ul className="space-y-4">
              {t.partner.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <svg
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">
              {t.partner.whatWeNeed}
            </h3>
            <ul className="space-y-4">
              {t.partner.commitments.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <svg
                    className="w-5 h-5 text-text-secondary shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 10l3 3 6-6" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </ScrollSection>
  );
}
