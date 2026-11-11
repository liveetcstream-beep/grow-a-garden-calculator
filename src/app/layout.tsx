import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  // No global template: every page sets its own full title (kept under 60
  // chars). A template suffix here caused 341/344 pages to truncate in SERPs.
  // Plain string (not { default }) — this Next.js version requires `template`
  // on object titles, and we want no template at all.
  title: "Grow A Garden Calculator | Crop, Pet & Trade Tools",
  description: "Free fan-made Grow A Garden calculators for crop, pet, mutation, and trade estimates using the values stored on this site.",
  metadataBase: new URL('https://growagardencalcs.com'),
  keywords: [
    "grow a garden calculator", 
    "gag calculator", 
    "kalkulator grow a garden",
    "calculator grow a garden", 
    "pet calculator grow a garden", 
    "grow a garden values",
    "gag pet calculator",
    "mutation calculator"
  ],
  alternates: {
    canonical: 'https://growagardencalcs.com',
  },
  openGraph: {
    title: "Grow A Garden Calculator | Crop, Pet & Trade Tools",
    description: "Free fan-made Grow A Garden calculators for crop, pet, mutation, and trade estimates using the values stored on this site.",
    url: 'https://growagardencalcs.com',
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Grow A Garden Calculator & Pet Value Hub",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden Calculator | Crop, Pet & Trade Tools",
    description: "Free fan-made Grow A Garden calculators for crop, pet, mutation, and trade estimates using the values stored on this site.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Mv6Tki1iVOyt84Zrh7tSgz2hrGj4Wr6uKs9YyDOoGWo",
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for rich Google Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Grow A Garden Calculator",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "url": "https://growagardencalcs.com",
    "description": "A free, fan-made set of Grow A Garden calculators for crop, pet, mutation, and trade estimates based on stored values and user inputs.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-grid">
        {/* Google Analytics Tag - Delayed for Pagespeed */}
        <Analytics />
        <div className="bg-aurora" />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
