"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function GraciasPage() {
  return (
    <div className="min-h-svh bg-bg-dark text-text-on-dark flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,6rem)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-xl"
      >
        <div className="w-16 h-px bg-accent mx-auto mb-8" />

        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-6">
          Gracias
        </h1>

        <p className="text-text-on-dark/60 text-lg leading-relaxed mb-4">
          Thank you for taking the time to share your perspective. Your
          experience as an operator is what will make this platform exceptional.
        </p>

        <p className="text-text-on-dark/40 text-base mb-10">
          We will be in touch shortly to discuss next steps.
        </p>

        <Button href="/" variant="secondary">
          Back to Presentation
        </Button>
      </motion.div>
    </div>
  );
}
