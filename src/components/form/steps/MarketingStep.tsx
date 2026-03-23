"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function MarketingStep({ register, errors }: StepProps) {
  return (
    <div className="space-y-2">
      <TextArea
        name="proactiveOutreach"
        label="Do you currently do any proactive outreach to past guests? What has worked?"
        placeholder="WhatsApp broadcasts, email, SMS, or nothing yet..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="eventPromotion"
        label="How do you promote special events, new menus, or seasonal offerings?"
        placeholder="Your current promotion channels and approach..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="reviewManagement"
        label="How important are online reviews to your business? Do you actively manage your Google or TripAdvisor presence?"
        placeholder="How much attention reviews get, and what you do about them..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="dreamMessage"
        label="If you could send a message to a specific group of your guests right now, who would you target and what would you say?"
        placeholder="The message you wish you could send today..."
        register={register}
        errors={errors}
      />
    </div>
  );
}
