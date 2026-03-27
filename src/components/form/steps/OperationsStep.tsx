"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";
import { useT } from "@/i18n/context";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function OperationsStep({ register, errors }: StepProps) {
  const { t } = useT();
  const f = t.form.operations;

  return (
    <div className="space-y-2">
      <TextArea name="reservationFlow" label={f.reservationFlow.label} placeholder={f.reservationFlow.placeholder} register={register} errors={errors} required />
      <TextArea name="reservationVolume" label={f.reservationVolume.label} placeholder={f.reservationVolume.placeholder} register={register} errors={errors} />
      <TextArea name="noShowRate" label={f.noShowRate.label} placeholder={f.noShowRate.placeholder} register={register} errors={errors} />
      <TextArea name="currentTools" label={f.currentTools.label} placeholder={f.currentTools.placeholder} register={register} errors={errors} />
      <TextArea name="primaryUser" label={f.primaryUser.label} placeholder={f.primaryUser.placeholder} register={register} errors={errors} />
    </div>
  );
}
