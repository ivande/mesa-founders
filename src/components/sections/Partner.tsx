"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const benefits = [
  "Founding partner pricing locked in for the first 12 months",
  "Direct input into product development — your feedback shapes what gets built",
  "White-glove onboarding: we set everything up, train your team, provide ongoing support",
  "Priority access to new features and modules",
  "Your venue featured as a showcase partner as we expand",
];

const commitments = [
  "Willingness to use the platform consistently during the pilot period",
  "Honest, direct feedback on what works, what doesn't, and what's missing",
  "A point of contact for weekly check-ins during the first two months",
  "Permission to use anonymized data and results as case studies",
];

export function Partner() {
  return (
    <ScrollSection id="partner">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          Early Partner Program
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          We are inviting 3–5 premium venues to join as founding partners. Not a
          beta test — a partnership to build the best hospitality technology in the
          Dominican Republic together.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <FadeIn delay={0.1}>
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">
              What You Get
            </h3>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
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
              What We Need From You
            </h3>
            <ul className="space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
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
