"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";
import { TextArea } from "@/components/form/fields/TextArea";

interface StepProps {
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
}

export function PlatformStep({ register, errors }: StepProps) {
  return (
    <div className="space-y-2">
      <TextArea
        name="mostExciting"
        label="Which of the six modules excites you most? Which feels least important?"
        placeholder="Reservation Engine, Guest Intelligence, Campaigns, Reputation, Analytics, Events..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="dealbreakers"
        label="What would make you stop using a tool like this after the first month?"
        placeholder="The things that would make you walk away..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="mustHave"
        label="What would make this a 'must-have' rather than a 'nice-to-have' for your venue?"
        placeholder="The line between interesting and indispensable..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="missingFeatures"
        label="Is there anything we didn't mention that you wish a system like this could do?"
        placeholder="Features or capabilities we might have missed..."
        register={register}
        errors={errors}
      />
      <TextArea
        name="budgetComfort"
        label="What would you be comfortable paying monthly for a platform that demonstrably reduces no-shows and increases repeat visits?"
        placeholder="A range or number you'd consider fair..."
        register={register}
        errors={errors}
      />
    </div>
  );
}
