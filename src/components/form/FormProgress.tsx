"use client";

import { motion } from "framer-motion";
import { stepTitles } from "@/types/workshop";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-border">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-center py-4 bg-bg-primary/80 backdrop-blur-sm">
        <div className="flex items-center gap-6 text-sm">
          {stepTitles.map((title, i) => (
            <span
              key={title}
              className={`hidden sm:inline transition-colors ${
                i === currentStep
                  ? "text-accent font-medium"
                  : i < currentStep
                  ? "text-text-primary"
                  : "text-text-secondary/40"
              }`}
            >
              {title}
            </span>
          ))}
          <span className="sm:hidden text-text-secondary text-xs">
            {currentStep + 1} of {totalSteps}
          </span>
        </div>
      </div>
    </div>
  );
}
