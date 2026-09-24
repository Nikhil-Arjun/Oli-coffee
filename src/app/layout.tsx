import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oli Coffee | A Slower Way to Connect",
  description:
    "Contemporary Konkan café in Rajarampuri, Kolhapur. Coconut, jaggery, cashew, kokum — brewed fresh daily with calm monsoon hospitality.",
  keywords: [
    "Oli Coffee",
    "Kolhapur Cafe",
    "Konkan Coffee",
    "Specialty Cafe Kolhapur",
    "Rajarampuri",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr-IN"
      className={`${fraunces.variable} ${inter.variable} ${notoSerifDevanagari.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#F5EFE3] text-[#1E1E1E] antialiased selection:bg-[#A6452F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
