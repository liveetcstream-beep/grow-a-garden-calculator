import type { Metadata } from "next";
import SeedProfitCalculator from "@/components/SeedProfitCalculator";

export const metadata: Metadata = {
  title: "Seed Profit Calculator - Best Crops ROI | Grow A Garden",
  description: "Find the most profitable seeds in Grow A Garden. Calculate ROI, profit per minute, and compare all crops to maximize your earnings.",
  keywords: ["GAG seed profit", "Grow A Garden best seeds", "seed ROI calculator", "best crops GAG"],
};

export default function SeedProfitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌱 Seed Profit Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate the profitability of each seed type. See revenue, cost, profit per seed, per minute earnings, and ROI percentage for every crop.
        </p>
      </div>
      <SeedProfitCalculator />
    </div>
  );
}
