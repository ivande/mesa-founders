"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  WorkshopData,
  workshopSchema,
  stepTitles,
  stepIntros,
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
const TOTAL_STEPS = 5;

export function FormShell() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm<WorkshopData>({
    resolver: zodResolver(workshopSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        reset(JSON.parse(saved));
      } catch {
        // ignore invalid data
      }
    }
  }, [reset]);

  const saveToStorage = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(getValues()));
  }, [getValues]);

  const stepFields: (keyof WorkshopData)[][] = [
    ["venueName", "contactName", "role", "whatsapp"],
    ["reservationFlow", "reservationVolume", "noShowRate", "currentTools", "primaryUser"],
    ["regularPercentage", "preferenceTracking", "desiredInsights", "discoveryChannels"],
    ["proactiveOutreach", "eventPromotion", "reviewManagement", "dreamMessage"],
    ["mostExciting", "dealbreakers", "mustHave", "missingFeatures", "budgetComfort"],
  ];

  const goNext = async () => {
    const fields = stepFields[currentStep];
    const valid = await trigger(fields);
    if (!valid) return;

    saveToStorage();

    if (currentStep < TOTAL_STEPS - 1) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  };

  const goBack = () => {
    saveToStorage();
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const onSubmit = async (data: WorkshopData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitWorkshop(data);
      if (result.success) {
        sessionStorage.removeItem(STORAGE_KEY);
        window.location.href = "/workshop/gracias";
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepComponents = [
    <ContactStep key="contact" register={register} errors={errors} />,
    <OperationsStep key="operations" register={register} errors={errors} />,
    <GuestsStep key="guests" register={register} errors={errors} />,
    <MarketingStep key="marketing" register={register} errors={errors} />,
    <PlatformStep key="platform" register={register} errors={errors} />,
  ];

  const isLastStep = currentStep === TOTAL_STEPS - 1;

  return (
    <div className="min-h-svh bg-bg-primary">
      <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <form
        onSubmit={handleSubmit(onSubmit)}
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
            <Button variant="ghost" onClick={goBack} type="button">
              Back
            </Button>
          ) : (
            <Button variant="ghost" href="/" type="button">
              &larr; Back to presentation
            </Button>
          )}

          {isLastStep ? (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Responses"}
            </Button>
          ) : (
            <Button onClick={goNext} type="button">
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
