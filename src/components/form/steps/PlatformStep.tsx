"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";
import { useT } from "@/i18n/context";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function PlatformStep({ register, errors }: StepProps) {
  const { t } = useT();
  const f = t.form.platformStep;

  return (
    <div className="space-y-2">
      <TextArea name="mostExciting" label={f.mostExciting.label} placeholder={f.mostExciting.placeholder} register={register} errors={errors} />
      <TextArea name="dealbreakers" label={f.dealbreakers.label} placeholder={f.dealbreakers.placeholder} register={register} errors={errors} />
      <TextArea name="mustHave" label={f.mustHave.label} placeholder={f.mustHave.placeholder} register={register} errors={errors} />
      <TextArea name="missingFeatures" label={f.missingFeatures.label} placeholder={f.missingFeatures.placeholder} register={register} errors={errors} />
      <TextArea name="budgetComfort" label={f.budgetComfort.label} placeholder={f.budgetComfort.placeholder} register={register} errors={errors} />
    </div>
  );
}
