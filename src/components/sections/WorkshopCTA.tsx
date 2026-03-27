"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/context";

export function WorkshopCTA() {
  const { t } = useT();

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
          {t.workshopCta.title}
        </h2>

        <p className="text-text-on-dark/60 text-lg leading-relaxed mb-10">
          {t.workshopCta.subtitle}
        </p>

        <Button href="/workshop" variant="primary" size="lg">
          {t.workshopCta.button}
        </Button>

        <p className="text-text-on-dark/30 text-sm mt-6">
          {t.workshopCta.footnote}
        </p>
      </motion.div>
    </section>
  );
}
