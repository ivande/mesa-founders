"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";

interface TextAreaProps {
  name: keyof WorkshopData;
  label: string;
  placeholder?: string;
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
  required?: boolean;
}

export function TextArea({
  name,
  label,
  placeholder,
  register,
  errors,
  required = false,
}: TextAreaProps) {
  const error = errors[name];

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-text-primary mb-2"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        rows={4}
        className={`w-full bg-transparent border rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors resize-none ${
          error ? "border-red-400" : "border-border"
        }`}
      />
      {error && (
        <p className="text-red-400 text-xs mt-1">
          {error.message as string}
        </p>
      )}
    </div>
  );
}
