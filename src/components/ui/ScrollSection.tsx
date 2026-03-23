"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export function ScrollSection({
  children,
  id,
  className = "",
  dark = false,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-svh snap-start flex flex-col justify-center relative ${
        dark ? "bg-bg-dark text-text-on-dark" : "bg-bg-primary text-text-primary"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[72rem] mx-auto px-[clamp(1.5rem,5vw,6rem)] py-16 md:py-24"
      >
        {children}
      </motion.div>
    </section>
  );
}
