import type { Metadata } from "next";
import PetCalculator from "@/components/PetCalculator";

export const metadata: Metadata = {
  title: "Pet Calculator Grow A Garden [2026] | GAG Pet Value Calculator",
  description: "The #1 pet calculator grow a garden players use to find values. Calculate exact pet values based on weight, age, rarity. The definitive gag calculator for pets.",
  keywords: ["pet calculator grow a garden", "GAG pet calculator", "Grow A Garden pets", "pet value calculator", "grow a garden value"],
};

export default function PetCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🐾 Pet Calculator Grow A Garden
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the official <strong>pet calculator grow a garden</strong> hub. Whether you need a <strong>gag pet calculator</strong> for instant checks, a <strong>pet weight calculator grow a garden</strong> formula, or a <strong>pet age calculator grow a garden</strong> tracker, we have it all. Estimate exact <strong>gag calculator pets</strong> values by entering weight, age, and ability modifiers. Track your <strong>grow a garden value</strong> and filter by rarity to find your exact pet and see detailed stat scaling.
        </p>
      </div>
      <PetCalculator />
    </div>
  );
}
