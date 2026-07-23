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
  title: {
    default: "Grow A Garden Calculator [2026] | GAG Value & Trade W/F/L",
    template: "%s | Grow A Garden Calculator"
  },
  description: "The ultimate GAG calculator for Roblox players. Calculate exact crop values by weight, estimate pet max age stats, and test trade values (Win/Fair/Lose) instantly!",
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
  openGraph: {
    title: "Grow A Garden Calculator [2026] | GAG Value & Trade W/F/L",
    description: "The ultimate GAG calculator for Roblox players. Calculate exact crop values by weight, estimate pet max age stats, and test trade values (Win/Fair/Lose) instantly!",
    url: 'https://growagardencalcs.com',
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Grow A Garden Calculator & Pet Value Hub",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden Calculator [2026] | GAG Value & Trade W/F/L",
    description: "The ultimate GAG calculator for Roblox players. Calculate exact crop values by weight, estimate pet max age stats, and test trade values (Win/Fair/Lose) instantly!",
    images: ['/og-image.png'],
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
    "@type": "SoftwareApplication",
    "name": "Grow A Garden Calculator",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web",
    "url": "https://growagardencalcs.com",
    "description": "The ultimate GAG calculator for Roblox players. Calculate exact crop values, test trade values (Win/Fair/Lose), and check pet stats.",
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
