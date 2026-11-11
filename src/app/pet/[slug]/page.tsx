import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PETS } from "@/data/pets";
import { formatSourceDate, getDataUpdatedAt } from "@/lib/contentDates";
import { calculatePetValue } from "@/lib/calculator";
import PetMiniCalculator from "./PetMiniCalculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const petDataUpdatedAt = getDataUpdatedAt("pets");
const numberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const RARITY_COLORS: Record<string, string> = {
  Common: "#9CA3AF",
  Uncommon: "#34D399",
  Rare: "#60A5FA",
  Epic: "#A78BFA",
  Legendary: "#F59E0B",
  Mythic: "#EC4899",
  Divine: "#F472B6",
  Event: "#34D399",
};

export async function generateStaticParams() {
  return PETS.map((pet) => ({ slug: `${pet.id}-stats` }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const petId = slug.replace(/-stats$/, "");
  const pet = PETS.find((item) => item.id === petId);
  if (!pet) return { title: "Pet Not Found", robots: { index: false, follow: true } };

  const proposedTitle = `${pet.name} Pet Value in Grow A Garden | GAG Calculator`;
  const pageTitle = proposedTitle.length <= 60 ? proposedTitle : `${pet.name} Value | GAG Calculator`;
  const description = `Estimate ${pet.name} value using the weight, age and ability inputs in this fan-made calculator. The stored data and model are not live trade prices.`;
  const pageUrl = `https://growagardencalcs.com/pet/${pet.id}-stats`;

  return {
    title: pageTitle,
    description,
    keywords: [`${pet.name} grow a garden value`, `${pet.name} pet calculator`, `gag pet calculator ${pet.name}`],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description,
      url: pageUrl,
      siteName: "Grow A Garden Calculator",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${pet.name} value estimate` }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function PetStatsPage({ params }: PageProps) {
  const { slug } = await params;
  const petId = slug.replace(/-stats$/, "");
  const pet = PETS.find((item) => item.id === petId);
  if (!pet) notFound();

  const rarityColor = RARITY_COLORS[pet.rarity] ?? "#9CA3AF";
  const relatedPets = PETS.filter((item) => item.id !== pet.id && (item.rarity === pet.rarity || item.category === pet.category)).slice(0, 8);
  const exampleAges = [1, 7, 14, 30, 60];
  const exampleWeights = [1, 5, 10, 25, 50];

  const valueAtAge = (age: number) => calculatePetValue({
    baseValue: pet.baseValue,
    weight: 10,
    age,
    abilityMultiplier: pet.abilityMultiplier,
  });
  const valueAtWeight = (weight: number) => calculatePetValue({
    baseValue: pet.baseValue,
    weight,
    age: 1,
    abilityMultiplier: pet.abilityMultiplier,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://growagardencalcs.com" },
      { "@type": "ListItem", position: 2, name: "Pet Calculator", item: "https://growagardencalcs.com/pet-calculator" },
      { "@type": "ListItem", position: 3, name: `${pet.name} Value`, item: `https://growagardencalcs.com/pet/${pet.id}-stats` },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/pet-calculator" className="hover:text-[var(--primary)] transition-colors">Pet Calculator</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: rarityColor }}>{pet.name}</span>
      </nav>

      <header className="glass-card-static p-8 mb-8" style={{ borderColor: `${rarityColor}30` }}>
        <div className="flex items-center gap-5 mb-6">
          <span className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl" style={{ background: `${rarityColor}15`, border: `2px solid ${rarityColor}30` }}>{pet.emoji}</span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>{pet.name} Value</h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: `${rarityColor}20`, color: rarityColor }}>{pet.rarity}</span>
              <span className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>{pet.category}</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>Stored base value: {numberFormat.format(pet.baseValue)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Use the calculator below to see how the site&apos;s stored base value and ability multiplier respond to the weight and age inputs. This is a model-based estimate, not a live market quote or an official game value.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
          Pet data file last changed: {petDataUpdatedAt ? formatSourceDate(petDataUpdatedAt) : "Date unavailable"}
        </p>
      </header>

      <section aria-labelledby="pet-calculator-title" className="mb-8">
        <h2 id="pet-calculator-title" className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Estimate {pet.name} value
        </h2>
        <PetMiniCalculator pet={pet} rarityColor={rarityColor} />
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>How the site&apos;s pet estimate works</h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
          The calculator multiplies the stored base value by a weight factor, an age factor and the stored ability multiplier. Its current model uses a logarithmic weight factor and an age factor of 1 + (age × 0.02). These describe the site&apos;s calculation rules; they should not be treated as confirmed game mechanics or current player prices.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Ability description stored for {pet.name}: <strong style={{ color: "var(--foreground)" }}>{pet.ability}</strong>. The multiplier entered into this model is ×{pet.abilityMultiplier}.
        </p>
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>{pet.name} estimate by age (10 kg weight)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                <th scope="col" className="text-left py-3 px-3" style={{ color: "var(--muted)" }}>Age input</th>
                <th scope="col" className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>Site model age factor</th>
                <th scope="col" className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>Estimated value</th>
              </tr>
            </thead>
            <tbody>
              {exampleAges.map((age) => {
                const result = valueAtAge(age);
                return (
                  <tr key={age} className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                    <th scope="row" className="text-left py-3 px-3 font-medium" style={{ color: "var(--foreground)" }}>{age} days</th>
                    <td className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>×{result.ageBonus.toFixed(2)}</td>
                    <td className="text-right py-3 px-3 font-bold" style={{ color: rarityColor }}>{numberFormat.format(result.estimatedValue)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>{pet.name} estimate by weight (age input: 1 day)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                <th scope="col" className="text-left py-3 px-3" style={{ color: "var(--muted)" }}>Weight input</th>
                <th scope="col" className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>Site model weight factor</th>
                <th scope="col" className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>Estimated value</th>
              </tr>
            </thead>
            <tbody>
              {exampleWeights.map((weight) => {
                const result = valueAtWeight(weight);
                return (
                  <tr key={weight} className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                    <th scope="row" className="text-left py-3 px-3 font-medium" style={{ color: "var(--foreground)" }}>{weight} kg</th>
                    <td className="text-right py-3 px-3" style={{ color: "var(--muted)" }}>×{result.weightBonus.toFixed(2)}</td>
                    <td className="text-right py-3 px-3 font-bold" style={{ color: rarityColor }}>{numberFormat.format(result.estimatedValue)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>Related pet records</h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          Compare stored records using the same calculator inputs. Real player trade offers can vary from these estimates.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {relatedPets.map((relatedPet) => (
            <Link key={relatedPet.id} href={`/pet/${relatedPet.id}-stats`} className="p-3 rounded-xl text-center hover:border-[var(--primary)] transition-colors"
              style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
              <span className="block text-2xl mb-1">{relatedPet.emoji}</span>
              <span className="block text-xs font-bold" style={{ color: "var(--foreground)" }}>{relatedPet.name}</span>
              <span className="block text-[10px] mt-1" style={{ color: "var(--muted)" }}>Base: {numberFormat.format(relatedPet.baseValue)}</span>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-sm text-center leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
        For crop examples, visit the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden values list</Link>. To compare two offers using the site&apos;s stored values, open the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link>.
      </p>
    </main>
  );
}
