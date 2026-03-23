"use client";

import { ScrollSection } from "@/components/ui/ScrollSection";
import { FadeIn } from "@/components/ui/FadeIn";

const painPoints = [
  {
    title: "Scattered Reservation Channels",
    description:
      "Reservations arrive via WhatsApp, Instagram DMs, phone calls, walk-ins, and even social media comments. There is no single system to capture and organize them.",
  },
  {
    title: "Manual, Error-Prone Processes",
    description:
      "Most venues track reservations on paper, in spreadsheets, or from memory. Double-bookings happen. When staff leave, institutional knowledge walks out the door.",
  },
  {
    title: "The No-Show Epidemic",
    description:
      "Without automated reminders, no-show rates at premium venues reach 15\u201325%. Each empty table on a busy night represents thousands of pesos in lost revenue.",
  },
  {
    title: "Zero Guest Memory",
    description:
      "A guest who visits monthly is treated the same as a first-timer. Preferences, allergies, and special occasions are left to individual staff recall.",
  },
  {
    title: "No Proactive Engagement",
    description:
      "Venues have no efficient way to reach past guests with targeted offers or event invitations. Marketing efforts are generic blasts, not relevant communications.",
  },
];

export function Problem() {
  return (
    <ScrollSection id="problem" className="!bg-bg-secondary">
      <FadeIn>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-4">
          The Problem
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mb-12">
          Premium restaurants and bars in the Dominican Republic face a paradox:
          their guests communicate through WhatsApp and Instagram, but the tools
          available were built for markets where phone calls and email are the norm.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.1}>
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
          The tools that exist today &mdash; OpenTable, Resy, SevenRooms &mdash;
          were not designed for this market. They are priced in US dollars, assume
          email-first communication, and require guests to download apps or create
          accounts.
        </p>
      </FadeIn>
    </ScrollSection>
  );
}
