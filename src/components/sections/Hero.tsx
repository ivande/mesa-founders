"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-svh snap-start flex flex-col justify-center items-center relative bg-bg-dark text-text-on-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,115,51,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-[72rem] mx-auto px-[clamp(1.5rem,5vw,6rem)] text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent tracking-[0.25em] uppercase text-sm font-medium mb-8"
        >
          Workshop Draft &middot; February 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-[clamp(2rem,5vw,5rem)] leading-[1.1] font-semibold mb-6"
        >
          The Complete Hospitality
          <br className="hidden md:block" />
          {" "}Guest Management Platform
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 md:gap-3 flex-wrap text-text-on-dark/60 text-[clamp(0.875rem,1.5vw,1.25rem)] mb-4"
        >
          <span>Reservations</span>
          <span className="text-accent">·</span>
          <span>Guest Intelligence</span>
          <span className="text-accent">·</span>
          <span>Campaigns</span>
          <span className="text-accent">·</span>
          <span>Reputation</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-text-on-dark/40 text-base mb-2"
        >
          Powered by WhatsApp <span className="text-accent">&</span> Instagram
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-text-on-dark/30 text-sm italic mt-6"
        >
          Built for premium venues in the Dominican Republic
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-on-dark/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M8 4v12M3 12l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
