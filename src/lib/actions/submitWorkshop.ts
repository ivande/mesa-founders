"use server";

import { WorkshopData, workshopSchema } from "@/types/workshop";

export async function submitWorkshop(
  data: WorkshopData
): Promise<{ success: boolean; error?: string }> {
  const parsed = workshopSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data. Please fill in all required fields." };
  }

  const formData = parsed.data;
  let airtableOk = false;
  let emailOk = false;

  // Airtable submission
  const airtableKey = process.env.AIRTABLE_API_KEY;
  const airtableBase = process.env.AIRTABLE_BASE_ID;
  const airtableTable = process.env.AIRTABLE_TABLE_NAME;

  if (airtableKey && airtableBase && airtableTable) {
    try {
      // Build fields object, filtering out empty strings and undefined
      const fieldMap: Record<string, string> = {
        "Venue Name": formData.venueName,
        "Contact Name": formData.contactName,
        "Role": formData.role,
        "WhatsApp": formData.whatsapp,
        "Submitted At": new Date().toISOString(),
      };

      // Optional fields — only include if non-empty
      const optionalFields: [string, string | undefined][] = [
        ["Reservation Flow", formData.reservationFlow],
        ["Reservation Volume", formData.reservationVolume],
        ["No-Show Rate", formData.noShowRate],
        ["Current Tools", formData.currentTools],
        ["Primary User", formData.primaryUser],
        ["Regular Percentage", formData.regularPercentage],
        ["Preference Tracking", formData.preferenceTracking],
        ["Desired Insights", formData.desiredInsights],
        ["Discovery Channels", formData.discoveryChannels],
        ["Proactive Outreach", formData.proactiveOutreach],
        ["Event Promotion", formData.eventPromotion],
        ["Review Management", formData.reviewManagement],
        ["Dream Message", formData.dreamMessage],
        ["Most Exciting Module", formData.mostExciting],
        ["Dealbreakers", formData.dealbreakers],
        ["Must Have", formData.mustHave],
        ["Missing Features", formData.missingFeatures],
        ["Budget Comfort", formData.budgetComfort],
      ];

      for (const [key, value] of optionalFields) {
        if (value && value.trim() !== "") {
          fieldMap[key] = value;
        }
      }

      const response = await fetch(
        `https://api.airtable.com/v0/${airtableBase}/${encodeURIComponent(airtableTable)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [{ fields: fieldMap }],
          }),
        }
      );

      if (response.ok) {
        airtableOk = true;
      } else {
        const errorBody = await response.text();
        console.error("Airtable error:", response.status, errorBody);
      }
    } catch (e) {
      console.error("Airtable submission failed:", e);
    }
  } else {
    console.warn("Airtable env vars not configured — skipping Airtable submission");
  }

  // Email notification via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (resendKey && notifyEmail) {
    try {
      const fieldLabels: [string, string | undefined][] = [
        ["Venue Name", formData.venueName],
        ["Contact Name", formData.contactName],
        ["Role", formData.role],
        ["WhatsApp", formData.whatsapp],
        ["Reservation Flow", formData.reservationFlow],
        ["Reservation Volume", formData.reservationVolume],
        ["No-Show Rate", formData.noShowRate],
        ["Current Tools", formData.currentTools],
        ["Primary User", formData.primaryUser],
        ["Regular Percentage", formData.regularPercentage],
        ["Preference Tracking", formData.preferenceTracking],
        ["Desired Insights", formData.desiredInsights],
        ["Discovery Channels", formData.discoveryChannels],
        ["Proactive Outreach", formData.proactiveOutreach],
        ["Event Promotion", formData.eventPromotion],
        ["Review Management", formData.reviewManagement],
        ["Dream Message", formData.dreamMessage],
        ["Most Exciting Module", formData.mostExciting],
        ["Dealbreakers", formData.dealbreakers],
        ["Must Have", formData.mustHave],
        ["Missing Features", formData.missingFeatures],
        ["Budget Comfort", formData.budgetComfort],
      ];

      const htmlFields = fieldLabels
        .filter(([, v]) => v && v.trim() !== "")
        .map(([k, v]) => `<strong>${k}:</strong><br>${v}`)
        .join("<br><br>");

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Mesa Workshop <onboarding@resend.dev>",
          to: notifyEmail,
          subject: `New Workshop Response: ${formData.venueName}`,
          html: `<h2>Workshop Response from ${formData.venueName}</h2><p>${htmlFields}</p>`,
        }),
      });

      if (response.ok) {
        emailOk = true;
      } else {
        const errorBody = await response.text();
        console.error("Resend error:", response.status, errorBody);
      }
    } catch (e) {
      console.error("Email notification failed:", e);
    }
  } else {
    console.warn("Resend env vars not configured — skipping email notification");
  }

  // Require at least one submission channel to succeed
  if (!airtableOk && !emailOk) {
    // Check if it's a config issue vs a runtime error
    const hasConfig = (airtableKey && airtableBase) || (resendKey && notifyEmail);
    if (!hasConfig) {
      console.error("No submission channels configured. Set AIRTABLE or RESEND env vars.");
      return { success: false, error: "Submission is not configured yet. Please contact us directly." };
    }
    return { success: false, error: "Failed to save your response. Please try again." };
  }

  return { success: true };
}
