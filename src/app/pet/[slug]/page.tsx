import { Metadata } from "next";
import { PETS } from "@/data/pets";
import Link from "next/link";
import PetMiniCalculator from "./PetMiniCalculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const RARITY_COLORS: Record<string, string> = {
  Common: "#9CA3AF",
  Uncommon: "#34D399",
  Rare: "#60A5FA",
  Epic: "#A78BFA",
  Legendary: "#F59E0B",
};

export async function generateStaticParams() {
  return PETS.map(pet => ({
    slug: pet.id + "-stats",
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const petId = slug.replace("-stats", "");
  const pet = PETS.find(p => p.id === petId);

  if (!pet) {
    return { title: "Pet Not Found" };
  }

  return {
    title: `${pet.name} Stats & Value - ${pet.rarity} Pet | Grow A Garden`,
    description: `${pet.name} is a ${pet.rarity} pet in Grow A Garden. Base value: ${pet.baseValue}. Ability: ${pet.ability} (×${pet.abilityMultiplier}). Calculate exact pet value with weight and age.`,
    keywords: [`${pet.name} GAG`, `Grow A Garden ${pet.name}`, `${pet.name} pet value`, `${pet.name} ability`],
  };
}

export default async function PetStatsPage({ params }: PageProps) {
  const { slug } = await params;
  const petId = slug.replace("-stats", "");
  const pet = PETS.find(p => p.id === petId);

  if (!pet) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>Pet Not Found</h1>
        <p style={{ color: 'var(--muted)' }}>This pet doesn&apos;t exist in our database.</p>
        <Link href="/pet-calculator" className="btn-primary mt-6 inline-block">Go to Pet Calculator</Link>
      </div>
    );
  }

  const rarityColor = RARITY_COLORS[pet.rarity] || "#9CA3AF";

  // Related pets: same rarity or category
  const relatedPets = PETS.filter(p =>
    (p.rarity === pet.rarity || p.category === pet.category) && p.id !== pet.id
  ).slice(0, 8);

  // Value at different ages
  const ageExamples = [1, 7, 14, 30, 60, 90];
  const weightExamples = [1, 5, 10, 25, 50, 100];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/pet-calculator" className="hover:text-[var(--primary)] transition-colors">Pets</Link>
        <span>/</span>
        <span style={{ color: rarityColor }}>{pet.name}</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8" style={{ borderColor: `${rarityColor}30` }}>
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl" style={{ background: `${rarityColor}15`, border: `2px solid ${rarityColor}30` }}>
            {pet.emoji}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              {pet.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: `${rarityColor}20`, color: rarityColor, border: `1px solid ${rarityColor}40` }}>
                {pet.rarity}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}>
                {pet.category}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Base Value</p>
            <p className="text-lg font-bold" style={{ color: rarityColor, fontFamily: 'var(--font-display)' }}>
              Base: {pet.baseValue.toLocaleString()}
            </p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Ability</p>
            <p className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>
              {pet.ability}
            </p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Ability Multiplier</p>
            <p className="text-lg font-bold" style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
              ×{pet.abilityMultiplier}
            </p>
          </div>
          <div className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-1)' }}>
            <p className="result-label mb-1">Category</p>
            <p className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
              {pet.category}
            </p>
          </div>
        </div>
      </div>

      {/* Mini Calculator */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🔢 {pet.name} Value Calculator
        </h2>
        <PetMiniCalculator pet={pet} rarityColor={rarityColor} />
      </div>

      {/* Value by Age Table */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📊 {pet.name} Value by Age (Weight=10kg)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Age (days)</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Age Bonus</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: rarityColor }}>Est. Value</th>
              </tr>
            </thead>
            <tbody>
              {ageExamples.map(age => {
                const ageBonus = 1 + (age * 0.02);
                const weightBonus = 1 + Math.log10(10) * 0.5;
                const value = pet.baseValue * weightBonus * ageBonus * pet.abilityMultiplier;
                return (
                  <tr key={age} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--foreground)' }}>{age} days</td>
                    <td className="py-3 px-4 text-right" style={{ color: 'var(--muted)' }}>×{ageBonus.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right font-bold" style={{ color: rarityColor }}>Value: {Math.round(value).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📖 About {pet.name}
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <p>
            The <strong style={{ color: 'var(--foreground)' }}>{pet.name}</strong> is a <strong style={{ color: rarityColor }}>{pet.rarity}</strong> pet in Grow A Garden belonging to the {pet.category} category.
          </p>
          <p>
            Its special ability is <strong style={{ color: 'var(--primary)' }}>{pet.ability}</strong> with a base ability multiplier of ×{pet.abilityMultiplier}.
            This ability enhances your garden by providing mutation effects or boosts to your crops.
          </p>
          <p>
            Pet values scale with weight (logarithmic) and age (linear), meaning older and heavier pets are worth significantly more.
            The value formula is: <strong style={{ color: 'var(--accent)' }}>Value = Base × Weight Bonus × Age Bonus × Ability Modifier</strong>.
          </p>
        </div>
      </div>

      {/* Related Pets */}
      {relatedPets.length > 0 && (
        <div className="glass-card-static p-6 mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🐾 Similar Pets
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedPets.map(p => {
              const rc = RARITY_COLORS[p.rarity] || "#9CA3AF";
              return (
                <Link
                  key={p.id}
                  href={`/pet/${p.id}-stats`}
                  className="p-3 rounded-xl text-center transition-all hover:scale-[1.03]"
                  style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
                >
                  <div className="text-2xl mb-1">{p.emoji}</div>
                  <p className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>{p.name}</p>
                  <p className="text-[10px]" style={{ color: rc }}>{p.rarity}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="text-center py-8">
        <Link href="/pet-calculator" className="btn-primary text-base px-8 py-4">
          🐾 Open Full Pet Calculator
        </Link>
      </div>
    </div>
  );
}
