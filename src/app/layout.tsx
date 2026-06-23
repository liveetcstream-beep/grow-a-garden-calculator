import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Grow A Garden Calculator | GAG Calculator & Pet Values",
    template: "%s | Grow A Garden Calculator"
  },
  description: "The ultimate Grow A Garden calculator. Accurately figure out your crop values, use the pet calculator grow a garden tools, and dominate trading with our gag calculator.",
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
    title: "Grow A Garden Calculator - GAG Calculator & Pet Tools",
    description: "The #1 kalkulator grow a garden. Accurately figure out your grow a garden value with the best pet calculator and crop tools.",
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
    title: "Grow A Garden Calculator - GAG Calculator",
    description: "The ultimate calculator for Grow A Garden crop values & pets.",
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
    "description": "The ultimate gag calculator. Accurately figure out your grow a garden value, and use the pet calculator grow a garden tools.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <meta name="google-site-verification" content="Mv6Tki1iVOyt84Zrh7tSgz2hrGj4Wr6uKs9YyDOoGWo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-grid">
        {/* Google Analytics Tag */}
        <Script
          strategy="lazyOnload"
          src={'https://www.googletagmanager.com/gtag/js?id=G-SCYE342DM5'}
        />
        <Script id="google-analytics" strategy="lazyOnload">
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
