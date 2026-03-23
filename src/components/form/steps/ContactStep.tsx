"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextInput } from "@/components/form/fields/TextInput";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function ContactStep({ register, errors }: StepProps) {
  return (
    <div className="grid md:grid-cols-2 gap-x-8">
      <TextInput
        name="venueName"
        label="Venue Name"
        placeholder="e.g., La Terraza del Mar"
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="contactName"
        label="Your Name"
        placeholder="e.g., María García"
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="role"
        label="Your Role"
        placeholder="e.g., Owner, General Manager, Host"
        register={register}
        errors={errors}
        required
      />
      <TextInput
        name="whatsapp"
        label="WhatsApp Number"
        placeholder="e.g., +1 809 555 1234"
        register={register}
        errors={errors}
        required
      />
    </div>
  );
}
