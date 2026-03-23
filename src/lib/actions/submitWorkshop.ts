"use server";

import { WorkshopData, workshopSchema } from "@/types/workshop";

export async function submitWorkshop(
  data: WorkshopData
): Promise<{ success: boolean; error?: string }> {
  const parsed = workshopSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const formData = parsed.data;

  // Airtable submission
  const airtableKey = process.env.AIRTABLE_API_KEY;
  const airtableBase = process.env.AIRTABLE_BASE_ID;
  const airtableTable = process.env.AIRTABLE_TABLE_NAME;

  if (airtableKey && airtableBase && airtableTable) {
    try {
      await fetch(
        `https://api.airtable.com/v0/${airtableBase}/${encodeURIComponent(airtableTable)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  "Venue Name": formData.venueName,
                  "Contact Name": formData.contactName,
                  Role: formData.role,
                  WhatsApp: formData.whatsapp,
                  "Reservation Flow": formData.reservationFlow,
                  "Reservation Volume": formData.reservationVolume,
                  "No-Show Rate": formData.noShowRate,
                  "Current Tools": formData.currentTools,
                  "Primary User": formData.primaryUser,
                  "Regular Percentage": formData.regularPercentage,
                  "Preference Tracking": formData.preferenceTracking,
                  "Desired Insights": formData.desiredInsights,
                  "Discovery Channels": formData.discoveryChannels,
                  "Proactive Outreach": formData.proactiveOutreach,
                  "Event Promotion": formData.eventPromotion,
                  "Review Management": formData.reviewManagement,
                  "Dream Message": formData.dreamMessage,
                  "Most Exciting Module": formData.mostExciting,
                  Dealbreakers: formData.dealbreakers,
                  "Must Have": formData.mustHave,
                  "Missing Features": formData.missingFeatures,
                  "Budget Comfort": formData.budgetComfort,
                  "Submitted At": new Date().toISOString(),
                },
              },
            ],
          }),
        }
      );
    } catch (e) {
      console.error("Airtable submission failed:", e);
    }
  }

  // Email notification via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (resendKey && notifyEmail) {
    try {
      const fields = Object.entries(formData)
        .filter(([, v]) => v)
        .map(([k, v]) => `<strong>${k}:</strong> ${v}`)
        .join("<br><br>");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Mesa Workshop <onboarding@resend.dev>",
          to: notifyEmail,
          subject: `New Workshop Response: ${formData.venueName}`,
          html: `<h2>Workshop Response from ${formData.venueName}</h2><p>${fields}</p>`,
        }),
      });
    } catch (e) {
      console.error("Email notification failed:", e);
    }
  }

  return { success: true };
}
