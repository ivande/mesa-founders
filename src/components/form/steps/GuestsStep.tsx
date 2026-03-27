"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";
import { useT } from "@/i18n/context";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function GuestsStep({ register, errors }: StepProps) {
  const { t } = useT();
  const f = t.form.guests;

  return (
    <div className="space-y-2">
      <TextArea name="regularPercentage" label={f.regularPercentage.label} placeholder={f.regularPercentage.placeholder} register={register} errors={errors} />
      <TextArea name="preferenceTracking" label={f.preferenceTracking.label} placeholder={f.preferenceTracking.placeholder} register={register} errors={errors} />
      <TextArea name="desiredInsights" label={f.desiredInsights.label} placeholder={f.desiredInsights.placeholder} register={register} errors={errors} />
      <TextArea name="discoveryChannels" label={f.discoveryChannels.label} placeholder={f.discoveryChannels.placeholder} register={register} errors={errors} />
    </div>
  );
}
