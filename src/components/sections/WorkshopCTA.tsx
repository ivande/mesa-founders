"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function WorkshopCTA() {
  return (
    <section
      id="workshop-cta"
      className="min-h-svh snap-start flex flex-col justify-center items-center relative bg-bg-dark text-text-on-dark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(184,115,51,0.08)_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center max-w-2xl mx-auto px-[clamp(1.5rem,5vw,6rem)]"
      >
        <div className="w-16 h-px bg-accent mx-auto mb-8" />

        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] font-semibold mb-6">
          Help Us Build This
          <br />
          Together
        </h2>

        <p className="text-text-on-dark/60 text-lg leading-relaxed mb-10">
          Your experience and perspective as operators is what will make this
          platform exceptional. Answer a few questions about your venue, your
          guests, and what matters most to you.
        </p>

        <Button href="/workshop" variant="primary" size="lg">
          Begin the Workshop
        </Button>

        <p className="text-text-on-dark/30 text-sm mt-6">
          Takes about 10 minutes &middot; No wrong answers
        </p>
      </motion.div>
    </section>
  );
}
