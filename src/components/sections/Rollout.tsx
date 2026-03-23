"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const phases = [
  {
    phase: "Phase 1",
    timeline: "Month 1",
    items: [
      "WhatsApp reservation bot (intake, confirmation, reminders)",
      "Basic availability and capacity management",
      "Admin dashboard for managing today's reservations",
      "Walk-in logging",
      "Automated no-show reduction flow",
    ],
  },
  {
    phase: "Phase 2",
    timeline: "Month 2",
    items: [
      "Guest CRM with auto-generated profiles",
      "Visit history and staff notes",
      "Guest segmentation (new, returning, regular, VIP, at-risk)",
      "Instagram DM integration",
      "Host lookup tool — guest history at a glance",
    ],
  },
  {
    phase: "Phase 3",
    timeline: "Month 3",
    items: [
      "WhatsApp campaign broadcasts to segments",
      "Automated flows (birthday, win-back, post-first-visit)",
      "Post-visit feedback collection and review routing",
      "Basic analytics dashboard",
      "Event management and promotion",
    ],
  },
  {
    phase: "Phase 4",
    timeline: "Month 4+",
    items: [
      "Advanced analytics and reporting",
      "POS integration for spend data",
      "AI-powered insights and recommendations",
      "Multi-venue management for restaurant groups",
      "API for third-party integrations",
    ],
  },
];

export function Rollout() {
  return (
    <ScrollSection id="rollout" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          Rollout Plan
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          Built and rolled out in phases. Early partners have direct input into
          the product and shape what gets built.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {phases.map((phase, i) => (
          <FadeIn key={phase.phase} delay={i * 0.1}>
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
                {phase.items.map((item) => (
                  <li
                    key={item}
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
