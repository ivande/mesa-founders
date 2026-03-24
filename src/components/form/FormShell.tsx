"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  WorkshopData,
  stepSchemas,
  stepTitles,
  stepIntros,
  workshopSchema,
} from "@/types/workshop";
import { FormProgress } from "./FormProgress";
import { ContactStep } from "./steps/ContactStep";
import { OperationsStep } from "./steps/OperationsStep";
import { GuestsStep } from "./steps/GuestsStep";
import { MarketingStep } from "./steps/MarketingStep";
import { PlatformStep } from "./steps/PlatformStep";
import { Button } from "@/components/ui/Button";
import { submitWorkshop } from "@/lib/actions/submitWorkshop";

const STORAGE_KEY = "mesa-workshop-data";
const STEP_KEY = "mesa-workshop-step";
const TOTAL_STEPS = 5;

// Fields that belong to each step, used for per-step validation
const STEP_FIELDS: (keyof WorkshopData)[][] = [
  ["venueName", "contactName", "role", "whatsapp"],
  ["reservationFlow", "reservationVolume", "noShowRate", "currentTools", "primaryUser"],
  ["regularPercentage", "preferenceTracking", "desiredInsights", "discoveryChannels"],
  ["proactiveOutreach", "eventPromotion", "reviewManagement", "dreamMessage"],
  ["mostExciting", "dealbreakers", "mustHave", "missingFeatures", "budgetComfort"],
];

export function FormShell() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  const {
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<WorkshopData>({
    mode: "onTouched",
    defaultValues: {
      venueName: "",
      contactName: "",
      role: "",
      whatsapp: "",
      reservationFlow: "",
      reservationVolume: "",
      noShowRate: "",
      currentTools: "",
      primaryUser: "",
      regularPercentage: "",
      preferenceTracking: "",
      desiredInsights: "",
      discoveryChannels: "",
      proactiveOutreach: "",
      eventPromotion: "",
      reviewManagement: "",
      dreamMessage: "",
      mostExciting: "",
      dealbreakers: "",
      mustHave: "",
      missingFeatures: "",
      budgetComfort: "",
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        reset(JSON.parse(saved));
      } catch {
        // ignore invalid data
      }
    }
    const savedStep = localStorage.getItem(STEP_KEY);
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (step >= 0 && step < TOTAL_STEPS) {
        setCurrentStep(step);
      }
    }
  }, [reset]);

  const saveToStorage = useCallback((step?: number) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getValues()));
    localStorage.setItem(STEP_KEY, String(step ?? currentStep));
  }, [getValues, currentStep]);

  const validateCurrentStep = (): boolean => {
    const values = getValues();
    const schema = stepSchemas[currentStep];
    const result = schema.safeParse(values);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0] as string;
        newErrors[fieldName] = issue.message;
      }
      setStepErrors(newErrors);
      return false;
    }

    setStepErrors({});
    return true;
  };

  const goNext = () => {
    if (!validateCurrentStep()) return;

    const nextStep = currentStep + 1;
    if (nextStep < TOTAL_STEPS) {
      saveToStorage(nextStep);
      setDirection(1);
      setCurrentStep(nextStep);
      setStepErrors({});
      window.scrollTo(0, 0);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      saveToStorage(prevStep);
      setDirection(-1);
      setCurrentStep(prevStep);
      setStepErrors({});
      window.scrollTo(0, 0);
    }
  };

  const doSubmit = async () => {
    // Validate current (last) step first
    if (!validateCurrentStep()) return;

    const values = getValues();

    // Validate the full schema before submitting
    const result = workshopSchema.safeParse(values);
    if (!result.success) {
      setSubmitError("Please go back and fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await submitWorkshop(result.data);
      if (response.success) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STEP_KEY);
        window.location.href = "/workshop/gracias";
      } else {
        setSubmitError(response.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLElement;
      // Allow Enter in textareas for newlines
      if (target.tagName === "TEXTAREA") return;

      e.preventDefault();
      if (isLastStep) {
        doSubmit();
      } else {
        goNext();
      }
    }
  };

  // Merge react-hook-form errors with our step validation errors
  const mergedErrors = { ...errors };
  for (const [field, message] of Object.entries(stepErrors)) {
    if (!mergedErrors[field as keyof WorkshopData]) {
      (mergedErrors as Record<string, { message: string }>)[field] = { message };
    }
  }

  const stepComponents = [
    <ContactStep key="contact" register={register} errors={mergedErrors} />,
    <OperationsStep key="operations" register={register} errors={mergedErrors} />,
    <GuestsStep key="guests" register={register} errors={mergedErrors} />,
    <MarketingStep key="marketing" register={register} errors={mergedErrors} />,
    <PlatformStep key="platform" register={register} errors={mergedErrors} />,
  ];

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  return (
    <div className="min-h-svh bg-bg-primary">
      <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div
        onKeyDown={handleKeyDown}
        className="min-h-svh flex flex-col justify-center max-w-3xl mx-auto px-[clamp(1.5rem,5vw,4rem)] pt-24 pb-16"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-accent text-sm tracking-widest uppercase mb-2">
              {stepTitles[currentStep]}
            </p>
            <p className="text-text-secondary text-lg mb-10">
              {stepIntros[currentStep]}
            </p>

            {stepComponents[currentStep]}
          </motion.div>
        </AnimatePresence>

        {submitError && (
          <p className="text-red-500 text-sm mb-4">{submitError}</p>
        )}

        <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
          {currentStep > 0 ? (
            <Button variant="ghost" onClick={goBack}>
              Back
            </Button>
          ) : (
            <Button variant="ghost" href="/">
              &larr; Back to presentation
            </Button>
          )}

          {isLastStep ? (
            <Button onClick={doSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Responses"}
            </Button>
          ) : (
            <Button onClick={goNext}>
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
