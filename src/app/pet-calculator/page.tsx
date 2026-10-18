import type { Metadata } from "next";
import PetCalculator from "@/components/PetCalculator";
import Link from "next/link";
import { PETS } from "@/data/pets";

const petCalcTitle = "Gag Pet Calculator: Exact Pet Values By Weight";
const petCalcDesc = "Get Exact Grow A Garden Pet Values By Weight, Age, And Rarity, From Divine To Common. Use This Free Pet Calculator With No Signup.";
const petCalcUrl = "https://growagardencalcs.com/pet-calculator";

const petCalcFaqs = [
  {
    q: "How is a pet's value calculated in Grow A Garden?",
    a: "Pet value = base value × weight bonus × age bonus × ability multiplier. Weight scales logarithmically, age adds about +2% per day, and the pet's ability applies its multiplier on top. Enter your pet's stats above for the exact figure.",
  },
  {
    q: "Does a pet's age really affect its trade value?",
    a: "Yes. Age grants a linear bonus of roughly +2% per day, so a 50-day-old pet is worth about twice its newborn value before weight is even counted. Older pets consistently fetch higher offers in trading hubs.",
  },
  {
    q: "Which pets are worth the most?",
    a: "Divine and Mythic rarity pets with high base values and strong ability multipliers top the market. Open any pet in the directory below to see its exact stats, ability and value-by-age table.",
  },
  {
    q: "Should I trade my pet now or keep aging it?",
    a: "If you do not need coins urgently, aging usually wins — the daily bonus compounds with zero effort while the pet stays equipped. Compare your pet's current vs projected value in the calculator before deciding.",
  },
];

const petCalcFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: petCalcFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: petCalcTitle,
  description: petCalcDesc,
  keywords: ["pet calculator grow a garden", "GAG pet calculator", "Grow A Garden pets", "pet value calculator", "grow a garden value"],
  alternates: { canonical: '/pet-calculator' },
  openGraph: {
    title: petCalcTitle,
    description: petCalcDesc,
    url: petCalcUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: petCalcTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: petCalcTitle,
    description: petCalcDesc,
    images: ['/og-image.png'],
  },
};

export default function PetCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petCalcFaqSchema) }}
      />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🐾 Pet Calculator Grow A Garden
        </h1>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the official <strong>pet calculator grow a garden</strong> hub. Whether you need a lightning-fast <strong>gag pet calculator</strong> for instant trade checks, a precise <strong>grow a garden pet weight calculator</strong> formula, or a <strong>pet age calculator gag</strong> tracker, this engine handles it all. We use real-time market data to estimate exact <strong>gag calculator pets</strong> values by analyzing base stats, ability modifiers, and rarity tiers. 
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          By factoring in complex game mechanics like <strong>logarithmic weight scaling</strong> and linear age bonuses, our tool ensures your <strong>grow a garden value</strong> is 100% accurate. Compare trading margins, filter by mythic or divine rarity, calculate specialized stats with our <Link href="/elephant-calculator" className="text-[var(--primary)] hover:underline font-bold">Elephant Value Calculator</Link>, and maximize your inventory net worth before executing any trades. For general crop calculations, return to our main <Link href="/" className="text-[var(--primary)] hover:underline font-bold">Grow A Garden Calculator</Link> or check full market rates on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">GAG Values List</Link>.
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

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ Pet Values — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {petCalcFaqs.map((f) => (
            <div key={f.q} className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
              <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
                {f.q}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
