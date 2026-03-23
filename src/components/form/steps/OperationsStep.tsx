"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function OperationsStep({ register, errors }: StepProps) {
  return (
    <div className="space-y-2">
      <TextArea
        name="reservationFlow"
        label="How do you currently handle reservations? Walk us through a typical Friday evening."
        placeholder="From the first reservation request to closing..."
        register={register}
        errors={errors}
        required
      />
      <TextArea
        name="reservationVolume"
        label="How many reservations on a typical weekend night? How many come through WhatsApp vs phone vs walk-ins?"
        placeholder="Roughly how many, and through which channels..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="noShowRate"
        label="What is your estimated no-show rate? How do you currently handle no-shows?"
        placeholder="Your best estimate and current approach..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="currentTools"
        label="Do you use any software today for reservations, guest tracking, or marketing?"
        placeholder="What you use now, and what you like or dislike about it..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="primaryUser"
        label="Who on your team would primarily use this system?"
        placeholder="The host, the manager, the owner, or someone else..."
        register={register}
        errors={errors}
      />
    </div>
  );
}
