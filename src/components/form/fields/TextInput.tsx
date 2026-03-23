"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { WorkshopData } from "@/types/workshop";

interface TextInputProps {
  name: keyof WorkshopData;
  label: string;
  placeholder?: string;
  register: UseFormRegister<WorkshopData>;
  errors: FieldErrors<WorkshopData>;
  required?: boolean;
}

export function TextInput({
  name,
  label,
  placeholder,
  register,
  errors,
  required = false,
}: TextInputProps) {
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
      <input
        id={name}
        type="text"
        {...register(name)}
        placeholder={placeholder}
        className={`w-full bg-transparent border rounded-md px-4 py-3 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors ${
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
