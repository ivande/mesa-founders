"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const pillars = [
  {
    title: "WhatsApp-Native",
    description:
      "Built around the channel your guests already use every day. No apps to download, no accounts to create.",
  },
  {
    title: "Premium by Design",
    description:
      "Every touchpoint reflects the quality and sophistication your venue is known for. Professional, elegant, on-brand.",
  },
  {
    title: "Intelligent, Not Complex",
    description:
      "Powerful automation that works behind the scenes. Your team focuses on hospitality, not software.",
  },
];

export function Vision() {
  return (
    <ScrollSection id="vision">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          The Vision
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-16">
          A complete guest management platform designed from the ground up for
          premium hospitality venues in Latin America. The platform meets guests
          where they already are and gives venues a powerful, unified system to
          manage reservations, understand their guests, and drive repeat business.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.15}>
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
          Not a reservation widget bolted onto a website. The operating system for
          the guest relationship, from the first message to the tenth visit and
          beyond.
        </p>
      </FadeIn>
    </ScrollSection>
  );
}
