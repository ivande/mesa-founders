import { z } from "zod";

export const contactSchema = z.object({
  venueName: z.string().min(1, "Venue name is required"),
  contactName: z.string().min(1, "Your name is required"),
  role: z.string().min(1, "Your role is required"),
  whatsapp: z.string().min(1, "WhatsApp number is required"),
});

export const operationsSchema = z.object({
  reservationFlow: z.string().min(1, "Please describe your reservation flow"),
  reservationVolume: z.string().optional(),
  noShowRate: z.string().optional(),
  currentTools: z.string().optional(),
  primaryUser: z.string().optional(),
});

export const guestsSchema = z.object({
  regularPercentage: z.string().optional(),
  preferenceTracking: z.string().optional(),
  desiredInsights: z.string().optional(),
  discoveryChannels: z.string().optional(),
});

export const marketingSchema = z.object({
  proactiveOutreach: z.string().optional(),
  eventPromotion: z.string().optional(),
  reviewManagement: z.string().optional(),
  dreamMessage: z.string().optional(),
});

export const platformSchema = z.object({
  mostExciting: z.string().optional(),
  dealbreakers: z.string().optional(),
  mustHave: z.string().optional(),
  missingFeatures: z.string().optional(),
  budgetComfort: z.string().optional(),
});

export const workshopSchema = z.object({
  ...contactSchema.shape,
  ...operationsSchema.shape,
  ...guestsSchema.shape,
  ...marketingSchema.shape,
  ...platformSchema.shape,
});

export type WorkshopData = z.infer<typeof workshopSchema>;

export const stepSchemas = [
  contactSchema,
  operationsSchema,
  guestsSchema,
  marketingSchema,
  platformSchema,
] as const;

export const stepTitles = [
  "About You",
  "Current Operations",
  "Your Guests",
  "Marketing & Engagement",
  "About This Platform",
] as const;

export const stepIntros = [
  "Let's start with some basics about you and your venue.",
  "Walk us through a typical evening — from the first reservation request to closing.",
  "Tell us about the people who make your venue special.",
  "How do you stay connected with guests between visits?",
  "Help us understand what would make this platform indispensable for you.",
] as const;
