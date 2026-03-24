import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Gate } from "@/components/Gate";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sobremesa - The Complete Hospitality Guest Management Platform",
  description:
    "Reservations, Guest Intelligence, Campaigns & Reputation. Powered by WhatsApp & Instagram. Made with love in the Dominican Republic.",
  openGraph: {
    title: "Sobremesa - The Complete Hospitality Guest Management Platform",
    description:
      "Reservations, Guest Intelligence, Campaigns & Reputation. Powered by WhatsApp & Instagram.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
          <Gate>{children}</Gate>
        </body>
    </html>
  );
}
