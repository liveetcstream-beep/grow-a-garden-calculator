import type { Metadata } from "next";
import PetCalculator from "@/components/PetCalculator";
import Link from "next/link";
import { PETS } from "@/data/pets";

export const metadata: Metadata = {
  title: "Pet Calculator Grow A Garden [2026] | GAG Pet Value Calculator",
  description: "The #1 pet calculator grow a garden players use to find values. Calculate exact pet values based on weight, age, rarity. The definitive gag calculator for pets.",
  keywords: ["pet calculator grow a garden", "GAG pet calculator", "Grow A Garden pets", "pet value calculator", "grow a garden value"],
  alternates: { canonical: '/pet-calculator' },
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

      {/* Pet Directory for SEO Internal Linking */}
      <div className="mt-16 glass-card-static p-6">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📖 Complete Pet Directory
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {PETS.map(pet => (
            <Link 
              key={pet.id} 
              href={`/pet/${pet.id}-stats`}
              className="p-3 rounded-xl text-center transition-all hover:scale-[1.03]"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
            >
              <div className="text-2xl mb-1">{pet.emoji}</div>
              <p className="text-xs font-bold mt-1" style={{ color: 'var(--foreground)' }}>{pet.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
