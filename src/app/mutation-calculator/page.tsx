import type { Metadata } from "next";
import MutationCalculator from "@/components/MutationCalculator";
import Link from "next/link";
import { MUTATIONS } from "@/data/mutations";

const mutationCalcTitle = "Mutation Calculator Grow A Garden: Stack Multipliers";
const mutationCalcDesc = "Stack Grow A Garden Mutations And Calculate The Total Multiplier On Crop Value. Use This Free Mutation Calculator For Exact Results.";
const mutationCalcUrl = "https://growagardencalcs.com/mutation-calculator";

const mutationCalcFaqs = [
  {
    q: "How do mutation multipliers stack in Grow A Garden?",
    a: "Mutation multipliers multiply together, not add. A crop with Golden (×20) and Shocked (×100) sells for 2,000× its base value — which is why stacking even two strong mutations beats a dozen weak ones. Use the calculator above to test any combination.",
  },
  {
    q: "What is the highest mutation multiplier combo?",
    a: "The theoretical ceiling keeps rising as new mutations release, but the strongest single multipliers in our database include Fractured (×92) and other event-exclusive mutations. Stack two or three top-tier mutations and the combined multiplier reaches the hundreds of thousands.",
  },
  {
    q: "How many mutations can a crop have at once?",
    a: "Crops can carry many mutations simultaneously — there is no small hard cap, which is what makes stacking so powerful. Every mutation applied multiplies the total further, so late-game profit comes from piling mutations onto high base-value crops.",
  },
  {
    q: "Where can I learn how to get each mutation?",
    a: "Every mutation page on this site explains how to trigger it, from weather events to sprays and admin events. Start with the complete mutation guide, then open any mutation in the directory below for its unlock method and exact multiplier.",
  },
];

const mutationCalcFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mutationCalcFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: mutationCalcTitle,
  description: mutationCalcDesc,
  keywords: ["GAG mutation calculator", "Grow A Garden mutations", "mutation multiplier", "mutation stack"],
  alternates: { canonical: '/mutation-calculator' },
  openGraph: {
    title: mutationCalcTitle,
    description: mutationCalcDesc,
    url: mutationCalcUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: mutationCalcTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: mutationCalcTitle,
    description: mutationCalcDesc,
    images: ['/og-image.png'],
  },
};

export default function MutationCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mutationCalcFaqSchema) }}
      />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 Mutation Value Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the ultimate <strong>grow a garden mutation calculator</strong>. Browse all mutations by category, stack them together, and see the total multiplier effect on your crop value. Using this <strong>mutation calculator grow a garden</strong> tool, you can easily find the absolute best and rarest mutation combos for massive profit. Want to learn how every mutation works and how to get them? Read our complete{' '}
          <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-bold">Mutation Guide →</Link>
        </p>
      </div>
      
      <MutationCalculator />

      {/* How mutation stacking works */}
      <div className="glass-card-static p-6 sm:p-8 mt-12 mb-8" style={{ border: '1px solid var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📐 How Mutation Stacking Works
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          In Grow A Garden, every mutation on a crop multiplies its sell value — and multiple mutations <strong style={{ color: 'var(--foreground)' }}>multiply together, not add up</strong>. A crop carrying Golden (×20) and Shocked (×100) sells for 2,000× its base value. Add a third strong mutation and you are in the hundreds of thousands. This multiplicative math is why stacking two elite mutations beats collecting a dozen weak ones, and why end-game profit comes from piling mutations onto crops that already have a high base value.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          The calculator above lets you tick any of the 172 mutations in our database and see the combined multiplier instantly. Experiment with weather-event mutations, spray mutations and rare admin-event ones to find the highest-value combos — then read each mutation's page in the directory below to learn exactly how to trigger it in game. For the full mechanics, see our <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-bold">complete mutation guide</Link>. Ready to trade your stacked crop? Run both sides through our <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-bold">gag trade calculator</Link> to get a clear WIN, FAIR, or LOSE verdict before you accept any offer. One of the strongest stacking examples is the <Link href="/mutation/fractured" className="text-[var(--primary)] hover:underline font-bold">Fractured mutation (×92)</Link> — see its full guide for how to trigger it.
        </p>
      </div>

      {/* Mutation Directory for SEO Internal Linking */}
      <div className="mt-16 glass-card-static p-6">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📖 Complete Mutation Directory
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {MUTATIONS.map(mut => (
            <Link 
              key={mut.id} 
              href={`/mutation/${mut.id}`}
              className="p-3 rounded-xl text-center transition-all hover:scale-[1.03] flex flex-col items-center justify-center"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
            >
              <div className="w-3 h-3 rounded-full mb-2" style={{ background: mut.color }} />
              <p className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>{mut.name}</p>
              <p className="text-[10px] mt-1 font-mono font-bold" style={{ color: mut.color }}>×{mut.multiplier}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ Mutation Stacking — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {mutationCalcFaqs.map((f) => (
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
