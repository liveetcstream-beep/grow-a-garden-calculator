import type { Metadata } from "next";
import CropCalculator from "@/components/CropCalculator";

const cropCalcTitle = "Calculator Grow A Garden | Exact Crop Values & Multipliers";
const cropCalcDesc = "The best calculator grow a garden tool. Calculate your exact grow a garden value for crops, including weight, mutations, friend boost, and quantity.";
const cropCalcUrl = "https://growagardencalcs.com/crop-calculator";

export const metadata: Metadata = {
  title: cropCalcTitle,
  description: cropCalcDesc,
  keywords: ["calculator grow a garden", "grow a garden value", "GAG crop calculator", "Grow A Garden crop value", "crop value calculator"],
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
          🌾 Calculator Grow A Garden
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate your exact <strong>grow a garden value</strong> using the official game formulas. Select a crop, set weight, add mutations, and use our <strong>calculator grow a garden</strong> tool to see your final coin value instantly.
        </p>
      </div>
      <CropCalculator />
    </div>
  );
}
