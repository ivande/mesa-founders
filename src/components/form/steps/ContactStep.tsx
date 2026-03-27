"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextInput } from "@/components/form/fields/TextInput";
import { useT } from "@/i18n/context";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function ContactStep({ register, errors }: StepProps) {
  const { t } = useT();

  return (
    <div className="grid md:grid-cols-2 gap-x-8">
      <TextInput
        name="venueName"
        label={t.form.contact.venueName.label}
        placeholder={t.form.contact.venueName.placeholder}
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="contactName"
        label={t.form.contact.contactName.label}
        placeholder={t.form.contact.contactName.placeholder}
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="role"
        label={t.form.contact.role.label}
        placeholder={t.form.contact.role.placeholder}
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="whatsapp"
        label={t.form.contact.whatsapp.label}
        placeholder={t.form.contact.whatsapp.placeholder}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
}
