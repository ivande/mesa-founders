"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  const { t } = useT();
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
          {t.form.stepTitles.map((title, i) => (
            <span
              key={i}
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
            {t.form.stepOf(currentStep + 1, totalSteps)}
          </span>
        </div>
      </div>
    </div>
  );
}
