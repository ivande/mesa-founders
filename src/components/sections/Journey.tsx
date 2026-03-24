"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const stages = [
  {
    step: "01",
    title: "First Contact",
    description:
      "Guest sends a WhatsApp message or Instagram DM. The bot responds in seconds with a branded greeting, takes the reservation through a simple conversational flow, confirms instantly, and creates a guest profile automatically.",
  },
  {
    step: "02",
    title: "Before the Visit",
    description:
      "24 hours before: WhatsApp reminder with one-tap confirm, modify, or cancel. 2 hours before: final reminder. Host pulls up the guest profile to see notes, preferences, and special occasions.",
  },
  {
    step: "03",
    title: "After the Visit",
    description:
      "The following day, a brief WhatsApp message asks for quick feedback. Positive ratings are invited to leave a public review. Negative feedback triggers a private resolution flow.",
  },
  {
    step: "04",
    title: "Ongoing Relationship",
    description:
      "Birthday offers, exclusive event invitations matching past preferences, and timely re-engagement messages. Each touchpoint is relevant, personal, and drives repeat visits.",
  },
  {
    step: "05",
    title: "The Flywheel",
    description:
      "The data compounds. Know your most valuable guests, which campaigns drive revenue, which nights need promotion, and where operational improvements have the greatest impact.",
  },
];

export function Journey() {
  return (
    <ScrollSection id="journey">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          The Guest Journey
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-16">
          From first contact to loyal regular, every interaction flows through
          the platform.
        </p>
      </FadeIn>

      <div className="space-y-0">
        {stages.map((stage, i) => (
          <FadeIn key={stage.step} delay={i * 0.1}>
            <div className="flex gap-6 md:gap-10 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-accent text-sm font-medium shrink-0">
                  {stage.step}
                </div>
                {i < stages.length - 1 && (
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
