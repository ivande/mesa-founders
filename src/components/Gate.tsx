"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GATE_KEY = "mesa-access";
const PASSWORD = "sobremesa";

export function Gate({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(GATE_KEY);
    if (stored === "granted") {
      setAuthorized(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === PASSWORD) {
      localStorage.setItem(GATE_KEY, "granted");
      setAuthorized(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (checking) return null;
  if (authorized) return <>{children}</>;

  return (
    <div className="min-h-svh bg-bg-dark text-text-on-dark flex flex-col items-center justify-center px-[clamp(1.5rem,5vw,6rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,115,51,0.06)_0%,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        <p className="text-accent tracking-[0.25em] uppercase text-xs font-medium mb-8">
          Coming Soon
        </p>

        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-semibold mb-4">
          Mesa
        </h1>

        <p className="text-text-on-dark/50 text-lg leading-relaxed mb-12">
          The complete guest management platform for premium hospitality.
          <br className="hidden sm:block" />
          {" "}Launching soon in the Dominican Republic.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
          <label
            htmlFor="password"
            className="block text-text-on-dark/40 text-sm mb-3"
          >
            Enter password to continue
          </label>
          <div className="flex gap-3">
            <input
              id="password"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              autoComplete="off"
              className={`flex-1 bg-transparent border rounded-md px-4 py-3 text-text-on-dark placeholder:text-text-on-dark/20 focus:outline-none transition-colors text-center tracking-wider ${
                error ? "border-red-400" : "border-border-dark focus:border-accent"
              }`}
            />
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400/80 text-xs mt-3"
            >
              Not quite. Try again.
            </motion.p>
          )}
        </form>

        <div className="w-12 h-px bg-border-dark mx-auto mt-16 mb-6" />
        <p className="text-text-on-dark/20 text-xs">
          Reservations &middot; Guest Intelligence &middot; Campaigns &middot; Reputation
        </p>
      </motion.div>
    </div>
  );
}
