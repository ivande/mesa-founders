import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

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
  title: "Mesa — The Complete Hospitality Guest Management Platform",
  description:
    "Reservations, Guest Intelligence, Campaigns & Reputation. Powered by WhatsApp & Instagram. Built for premium venues in the Dominican Republic.",
  openGraph: {
    title: "Mesa — The Complete Hospitality Guest Management Platform",
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
      <body>{children}</body>
    </html>
  );
}
