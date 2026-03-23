"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function GuestsStep({ register, errors }: StepProps) {
  return (
    <div className="space-y-2">
      <TextArea
        name="regularPercentage"
        label="What percentage of your guests would you consider regulars? How do you currently recognize and reward them?"
        placeholder="Your best estimate, and how you handle VIPs..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="preferenceTracking"
        label="Do you track guest preferences, allergies, or special occasions? How?"
        placeholder="Notes, memory, spreadsheets, or nothing at all..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="desiredInsights"
        label="What would you most want to know about your guests that you don't currently have visibility into?"
        placeholder="The insights that would change how you operate..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="discoveryChannels"
        label="How do your guests typically discover your venue for the first time?"
        placeholder="Instagram, word of mouth, Google, something else..."
        register={register}
        errors={errors}
      />
    </div>
  );
}
