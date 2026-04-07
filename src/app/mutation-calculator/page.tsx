import type { Metadata } from "next";
import MutationCalculator from "@/components/MutationCalculator";

export const metadata: Metadata = {
  title: "Mutation Value Calculator - Stack Grow A Garden Mutations",
  description: "Calculate mutation multiplier stacks in Grow A Garden. Browse 150+ mutations, see combined values, and find the highest multiplier combos.",
  keywords: ["GAG mutation calculator", "Grow A Garden mutations", "mutation multiplier", "mutation stack"],
};

export default function MutationCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 Mutation Value Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the ultimate <strong>grow a garden mutation calculator</strong>. Browse all mutations by category, stack them together, and see the total multiplier effect on your crop value. Using this <strong>mutation calculator grow a garden</strong> tool, you can easily find the absolute best and rarest mutation combos for massive profit.
        </p>
      </div>
      <MutationCalculator />
    </div>
  );
}
