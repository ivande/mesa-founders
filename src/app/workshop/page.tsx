import { FormShell } from "@/components/form/FormShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop — Mesa",
  description:
    "Help us build the best hospitality platform for the Dominican Republic. Share your perspective.",
};

export default function WorkshopPage() {
  return <FormShell />;
}
