import type { Metadata } from "next";
import CropCalculator from "@/components/CropCalculator";

export const metadata: Metadata = {
  title: "Calculator Grow A Garden | Exact Crop Values & Multipliers",
  description: "The best calculator grow a garden tool. Calculate your exact grow a garden value for crops, including weight, mutations, friend boost, and quantity.",
  keywords: ["calculator grow a garden", "grow a garden value", "GAG crop calculator", "Grow A Garden crop value", "crop value calculator"],
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
