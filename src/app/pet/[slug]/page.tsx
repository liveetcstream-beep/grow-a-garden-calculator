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

  const pageTitle = `${pet.name} Value | Pet Calculator Grow A Garden`;
  const pageDesc = `${pet.name} is a ${pet.rarity} pet in Grow A Garden. Get exact value with our pet calculator. Base: ${pet.baseValue}. Ability: ${pet.ability} ×${pet.abilityMultiplier}.`;
  const pageUrl = `https://growagardencalcs.com/pet/${pet.id}-stats`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [`${pet.name} pet calculator grow a garden`, `${pet.name} grow a garden value`, `gag calculator ${pet.name}`, `pet calculator grow a garden`],
    alternates: { canonical: `/pet/${pet.id}-stats` },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${pet.name} Value & Stats`,
        }
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ['/og-image.png'],
    },
  };
}

function getPetHowToGetText(pet: any) {
  switch (pet.rarity) {
    case "Common":
      return `hatching standard Starter/Farm eggs or Domestic eggs in the pet shop. It is a great early-game companion to boost base crop yields before you unlock higher tiers.`;
    case "Uncommon":
      return `opening Forest or Pond eggs from the lobby merchants. Because of its uncommon status, it carries a slightly stronger ability modifier to assist in field calculations.`;
    case "Rare":
      return `purchasing Savanna or Jungle eggs. It provides a solid mid-tier boost to your crop weight and overall value scaling formulas.`;
    case "Epic":
      return `opening specialized Arctic, Sky, or event-specific eggs. It carries highly powerful passive abilities that significantly scale up crop coin output.`;
    case "Legendary":
      return `hatching Mythical eggs or participating in special GAG events. Legendary pets are highly valued in trade communities for their massive ability multipliers.`;
    case "Mythic":
      return `hatching Ocean or Prehistoric eggs with a low drop probability. They possess massive game-changing abilities that scale up your backpack net worth.`;
    case "Divine":
      return `hatching extremely rare Divine eggs. These represent the highest value tier in the game, providing massive multipliers for active farmers.`;
    case "Event":
      return `participating in seasonal event challenges (such as Easter, Summer, or Halloween) and exchanging event tokens. They cannot be hatched from standard shop eggs.`;
    default:
      return `hatching shop eggs or trading with other players in the main trading hubs.`;
  }
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://growagardencalcs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pets",
        "item": "https://growagardencalcs.com/pet-calculator"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pet.name,
        "item": `https://growagardencalcs.com/pet/${pet.id}-stats`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much is ${pet.name} worth in Grow A Garden?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${pet.name} has a base value of ${Number(pet.baseValue).toLocaleString()} coins and is a ${pet.rarity}-rarity pet. Final trade value depends on age, weight and ability boosts.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I get ${pet.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can obtain ${pet.name} by ${getPetHowToGetText(pet)}`,
        },
      },
      {
        "@type": "Question",
        name: `What does ${pet.name}'s ability do?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${pet.name}'s ability (${pet.ability}) provides a x${pet.abilityMultiplier} multiplier.`,
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          📖 About {pet.name} & GAG Pet Value Guide
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <p>
            The <strong style={{ color: 'var(--foreground)' }}>{pet.name}</strong> is a <strong style={{ color: rarityColor }}>{pet.rarity}</strong> pet in Grow A Garden belonging to the {pet.category} category.
          </p>
          <p>
            <strong>How to get {pet.name} in Grow A Garden?</strong> You can obtain the {pet.name} by {getPetHowToGetText(pet)}
          </p>
          <p>
            Its special ability is <strong style={{ color: 'var(--primary)' }}>{pet.ability}</strong> with a base ability multiplier of ×{pet.abilityMultiplier}.
            This ability enhances your garden by providing mutation effects or boosts to your crops, making it a critical asset for high-yield farming setups.
          </p>
          <p>
            Under the game mechanics, <strong>{pet.name} grow a garden value</strong> statistics scale with weight (logarithmic scaling) and age (linear bonus). 
            Older and heavier pets are worth significantly more in trading hubs. The value formula applied in our <strong>{pet.name} pet calculator grow a garden</strong> tool is: 
            <strong style={{ color: 'var(--accent)' }}>Value = Base ({pet.baseValue}) × Weight Bonus × Age Bonus × Ability Modifier (×{pet.abilityMultiplier})</strong>.
          </p>
        </div>
      </div>

      {/* How to maximize value */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          💰 How to Maximize {pet.name}&apos;s Value
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <p>
            {pet.name}&apos;s trade value follows <strong style={{ color: 'var(--foreground)' }}>Value = Base ({pet.baseValue.toLocaleString()}) × Weight Bonus × Age Bonus × Ability Modifier (×{pet.abilityMultiplier})</strong>.
            Three levers move that number: <strong style={{ color: 'var(--foreground)' }}>weight</strong> scales logarithmically (each tenfold weight jump adds a flat +0.5× bonus), <strong style={{ color: 'var(--foreground)' }}>age</strong> adds +2% per day linearly, and the <strong style={{ color: 'var(--foreground)' }}>{pet.ability}</strong> ability multiplies everything by ×{pet.abilityMultiplier} from day one.
          </p>
          <p>
            In practice, that means an old, heavy {pet.name} can be worth many times its base value — check the age table above to see the curve. Keep the pet equipped so it keeps aging, prioritize weight-boosting treats or events when available, and never trade a young {pet.rarity}-rarity pet if you can afford to wait: the age bonus compounds every single day.
          </p>
          <p>
            For trading, compare your {pet.name}&apos;s computed value against live listings on our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">pet value list</Link> before accepting offers, and use the <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-bold">full pet calculator</Link> to test age and weight scenarios side by side.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="glass-card-static p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ {pet.name} — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              How much is {pet.name} worth in Grow A Garden?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              {pet.name} has a base value of <strong>{Number(pet.baseValue).toLocaleString()} coins</strong> and is a {pet.rarity}-rarity pet.
              Final trade value depends on age, weight and active ability boosts — use our{" "}
              <Link href="/pet-calculator" className="text-[var(--primary)] font-semibold hover:underline">pet calculator</Link>{" "}
              for the exact number.
            </p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              How do I get {pet.name}?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              You can obtain {pet.name} by {getPetHowToGetText(pet)}
            </p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              What does {pet.name}&apos;s ability do?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              {pet.name}&apos;s ability ({pet.ability}) provides a <strong>×{pet.abilityMultiplier} multiplier</strong>,
              making it {pet.abilityMultiplier >= 5 ? "one of the stronger ability pets in its rarity tier" : "a solid utility pet for its tier"}.
            </p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              Is trading for {pet.name} worth it?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              Compare both sides with live values before accepting — run the deal through our{" "}
              <Link href="/trade-calculator" className="text-[var(--primary)] font-semibold hover:underline">trade calculator</Link>{" "}
              for an instant Win / Fair / Lose verdict, and check current market prices on the{" "}
              <Link href="/value-list" className="text-[var(--primary)] font-semibold hover:underline">value list</Link>.
            </p>
          </div>
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
