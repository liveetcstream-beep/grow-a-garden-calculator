import type { Metadata } from "next";
import Link from "next/link";
import CropCalculator from "@/components/CropCalculator";

const cropCalcTitle = "Grow A Garden Crop Calculator – Calculate Crop Values";
const cropCalcDesc = "Calculate exact Grow A Garden crop values with weight scaling, mutations, and friend boost. Free GAG crop value calculator tool.";
const cropCalcUrl = "https://growagardencalcs.com/crop-calculator";

export const metadata: Metadata = {
  title: cropCalcTitle,
  description: cropCalcDesc,
  keywords: ["grow a garden crop calculator", "crop value calculator", "GAG crop calculator", "grow a garden crop value", "crop calculator gag"],
  alternates: { canonical: '/crop-calculator' },
  openGraph: {
    title: cropCalcTitle,
    description: cropCalcDesc,
    url: cropCalcUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: cropCalcTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cropCalcTitle,
    description: cropCalcDesc,
    images: ['/og-image.png'],
  },
};

export default function CropCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌾 Grow A Garden Crop Value Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate your exact crop earnings in Grow A Garden using verified game mechanics. Select any crop, set weight in kg, add mutation multipliers, and calculate your coin value instantly. Need pet stats or trade comparisons? Use our master <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden Calculator</Link>.
        </p>
      </div>
      <CropCalculator />
    </div>
  );
}
