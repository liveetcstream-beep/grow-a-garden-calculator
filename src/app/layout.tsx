import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Grow A Garden Calculator - GAG Calculator & Pet Tools",
    template: "%s | Grow A Garden Calculator"
  },
  description: "The ultimate Grow A Garden calculator. Accurately figure out your grow a garden value, use the pet calculator grow a garden tools, and dominate trading with our gag calculator.",
  metadataBase: new URL('https://growagardencalcs.com'),
  keywords: [
    "grow a garden calculator", 
    "gag calculator", 
    "calculator grow a garden", 
    "pet calculator grow a garden", 
    "grow a garden value",
    "roblox grow a garden",
    "crop value calculator",
    "mutation calculator"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Grow A Garden Calculator - GAG Calculator & Pet Tools",
    description: "Accurately figure out your grow a garden value with the best pet calculator and crop tools.",
    url: 'https://growagardencalcs.com',
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow A Garden Calculator - GAG Calculator",
    description: "The ultimate calculator for Grow A Garden crop values & pets.",
  },
  robots: {
    index: true,
    follow: true,
  }
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
    "description": "The ultimate gag calculator. Accurately figure out your grow a garden value, and use the pet calculator grow a garden tools.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-grid">
        {/* Google Analytics Tag */}
        <Script
          strategy="afterInteractive"
          src={'https://www.googletagmanager.com/gtag/js?id=G-SCYE342DM5'}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SCYE342DM5', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <div className="bg-aurora" />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
