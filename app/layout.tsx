import type { Metadata } from "next";
import { Urbanist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urbannest — Architectural Luxury Real Estate & Private Estates",
  description: "Bespoke real estate advisory representing exceptional private residences, architectural estates, and high-yield properties across premier global destinations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F6F2] text-[#181715] font-sans selection:bg-[#181715] selection:text-[#C29D59]">
        {children}
      </body>
    </html>
  );
}
