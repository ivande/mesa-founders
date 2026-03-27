"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";
import { useT } from "@/i18n/context";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function MarketingStep({ register, errors }: StepProps) {
  const { t } = useT();
  const f = t.form.marketing;

  return (
    <div className="space-y-2">
      <TextArea name="proactiveOutreach" label={f.proactiveOutreach.label} placeholder={f.proactiveOutreach.placeholder} register={register} errors={errors} />
      <TextArea name="eventPromotion" label={f.eventPromotion.label} placeholder={f.eventPromotion.placeholder} register={register} errors={errors} />
      <TextArea name="reviewManagement" label={f.reviewManagement.label} placeholder={f.reviewManagement.placeholder} register={register} errors={errors} />
      <TextArea name="dreamMessage" label={f.dreamMessage.label} placeholder={f.dreamMessage.placeholder} register={register} errors={errors} />
    </div>
  );
}
