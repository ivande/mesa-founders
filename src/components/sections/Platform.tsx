"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const modules = [
  {
    name: "Reservation Engine",
    tagline: "The front door to your venue, now open 24/7",
    features: [
      "WhatsApp bot handles requests instantly",
      "Instagram DM integration",
      "Real-time availability by zone",
      "Smart reminders & one-tap confirmation",
      "Waitlist with automatic notifications",
    ],
  },
  {
    name: "Guest Intelligence",
    tagline: "Every guest has a story, your team should know it",
    features: [
      "Auto-generated profiles from WhatsApp",
      "Visit history & staff notes",
      "Automatic segmentation (VIP, regular, at-risk)",
      "Special date tracking",
      "Quick host lookup before arrival",
    ],
  },
  {
    name: "Campaigns & Re-engagement",
    tagline: "Bring guests back with messages they want to receive",
    features: [
      "WhatsApp broadcasts to segments",
      "Automated birthday & win-back flows",
      "Event promotion to relevant guests",
      "Performance tracking per campaign",
      "Multi-language: Spanish & English",
    ],
  },
  {
    name: "Reputation & Feedback",
    tagline: "Turn every visit into a growth opportunity",
    features: [
      "Post-visit feedback via WhatsApp",
      "Smart routing: happy → public review",
      "Unhappy → private resolution flow",
      "AI-powered review response suggestions",
      "NPS tracking over time",
    ],
  },
  {
    name: "Analytics & Insights",
    tagline: "Make decisions with data, not guesswork",
    features: [
      "Reservation analytics by channel",
      "No-show tracking by segment",
      "Guest new vs returning ratio",
      "Capacity utilization insights",
      "Exportable reports",
    ],
  },
  {
    name: "Events & Experiences",
    tagline: "Fill your private dining rooms effortlessly",
    features: [
      "Event creation with capacity & pricing",
      "Dedicated reservation flow",
      "Targeted promotion to matching guests",
      "RSVP tracking & reminders",
      "Recurring event templates",
    ],
  },
];

export function Platform() {
  return (
    <ScrollSection id="platform" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          The Platform
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mb-12">
          Six integrated modules. Each adds value independently, together they
          create a complete guest management ecosystem.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <FadeIn key={mod.name} delay={i * 0.08}>
            <div className="bg-bg-card border border-border rounded-lg p-6 h-full flex flex-col">
              <h3 className="font-serif text-xl font-semibold mb-1">
                {mod.name}
              </h3>
              <p className="text-accent text-sm italic mb-5">{mod.tagline}</p>
              <ul className="space-y-2 mt-auto">
                {mod.features.map((feature) => (
                  <li
                    key={feature}
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
