import type { Metadata } from "next";
import PetCalculator from "@/components/PetCalculator";
import Link from "next/link";
import { PETS } from "@/data/pets";

const petCalcTitle = "GAG Pet Calculator | Estimate Values by Weight & Age";
const petCalcDesc = "Estimate Grow A Garden pet values by weight, age and ability using the stats stored in this free fan-made calculator. Trade offers can vary.";
const petCalcUrl = "https://growagardencalcs.com/pet-calculator";

const petCalcFaqs = [
  {
    q: "How is a pet's value calculated in Grow A Garden?",
    a: "This site's estimate multiplies the stored base value by a weight factor, an age factor and the ability multiplier. These are the calculator's stored rules, not an official game price or a live market quote.",
  },
  {
    q: "How does this calculator use pet age?",
    a: "Its current model uses an age factor of 1 + (age × 0.02). This describes the site's calculation rule; check current in-game mechanics and player offers separately.",
  },
  {
    q: "How can I compare two pets?",
    a: "Open each pet in the directory to review the stats stored on this site, then enter the same weight and age settings in the calculator. Actual trade offers can differ from calculated estimates.",
  },
  {
    q: "Does the result show current player trade prices?",
    a: "No. It is calculated from the site's stored pet data and the settings you enter. Player demand and trade offers can change independently.",
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
          Use this free fan-made <strong>Grow A Garden pet calculator</strong> to estimate a pet value from the base value and stats stored on this site. Enter weight, age, and an ability multiplier to see how the current calculator model combines those inputs.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          The result is an estimate based on those stored rules, not a live market price or a guarantee of a fair trade. Browse the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">pet and crop values list</Link>, compare an offer with the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-bold">GAG trade calculator</Link>, or return to the <Link href="/" className="text-[var(--primary)] hover:underline font-bold">Grow A Garden calculator</Link>.
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
