import type { Metadata } from "next";
import PetCalculator from "@/components/PetCalculator";

export const metadata: Metadata = {
  title: "Pet Calculator Grow A Garden | GAG Pet Value Calculator",
  description: "The #1 pet calculator grow a garden players use. Calculate exact pet values based on weight, age, rarity, and ability modifiers. Browse 40+ pets.",
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
          Welcome to the official <strong>pet calculator grow a garden</strong> hub. Estimate exact pet values by entering weight, age, and ability modifiers. Track your <strong>grow a garden value</strong> and filter by rarity to find your exact pet and see detailed stat scaling.
        </p>
      </div>
      <PetCalculator />
    </div>
  );
}
