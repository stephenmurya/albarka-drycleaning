import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Navbar } from "@/components/Navbar";
import { StructuredData } from "@/components/StructuredData";
import { business } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Trusted Laundry & Dry Cleaning in Katsina`,
    template: `%s | ${business.name}`
  },
  description: business.description,
  keywords: [
    "Albarka Dry Cleaning",
    "dry cleaning Katsina",
    "laundry service Katsina",
    "traditional wear cleaning Katsina",
    "Kabren Dorowa Road laundry"
  ],
  openGraph: {
    title: `${business.name} | Trusted Laundry & Dry Cleaning in Katsina`,
    description: business.description,
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Trusted Laundry & Dry Cleaning in Katsina`,
    description: business.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
