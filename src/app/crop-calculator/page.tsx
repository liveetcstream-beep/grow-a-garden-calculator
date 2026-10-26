import type { Metadata } from "next";
import Link from "next/link";
import CropCalculator from "@/components/CropCalculator";

const cropCalcTitle = "Grow A Garden Value Calculator: Exact Crop Values";
const cropCalcDesc = "Calculate exact Grow A Garden crop values with weight scaling, mutations, and friend boost. Free GAG crop value calculator tool.";
const cropCalcUrl = "https://growagardencalcs.com/crop-calculator";

const cropCalcFaqs = [
  {
    q: "How is crop value calculated in Grow A Garden?",
    a: "Crop value = base value × weight scaling × mutation multipliers × friend boost. Enter your crop, its harvest weight and active mutations above and the calculator applies the verified formula instantly.",
  },
  {
    q: "How does weight affect crop value?",
    a: "Heavier harvests sell for more through logarithmic weight scaling — each tenfold increase in weight adds a flat bonus rather than multiplying. A 10kg harvest is worth notably more than a 1kg one, but a 100kg harvest is not ten times the 10kg price.",
  },
  {
    q: "What is the friend boost?",
    a: "Playing alongside friends grants a small bonus to harvest values. Toggle it in the calculator above to see the exact difference it makes on your total.",
  },
  {
    q: "Which crop should I calculate first?",
    a: "Start with your highest base-value crop — Diamond Fruit (10,000 base), Obsidian Onion (9,000) or Ruby Rose (8,000) — since mutations multiply the base, the absolute gains are largest there. Browse all 99 crops on the value list.",
  },
];

const cropCalcFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cropCalcFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata: Metadata = {
  title: cropCalcTitle,
  description: cropCalcDesc,
  keywords: ["grow a garden value calculator", "gag value calculator", "grow a garden values", "grow a garden crop calculator", "crop value calculator", "GAG crop calculator", "grow a garden crop value", "crop calculator gag"],
  alternates: { canonical: '/crop-calculator' },
  openGraph: {
    title: cropCalcTitle,
    description: cropCalcDesc,
    url: cropCalcUrl,
    siteName: "Grow A Garden Calculator",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: cropCalcTitle,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cropCalcTitle,
    description: cropCalcDesc,
    images: ['/og-image.png'],
  },
};

export default function CropCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cropCalcFaqSchema) }}
      />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🌾 Grow A Garden Crop Value Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Calculate your exact crop earnings in Grow A Garden using verified game mechanics. Select any crop, set weight in kg, add mutation multipliers, and calculate your coin value instantly. Need pet stats or trade comparisons? Use our master <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden Calculator</Link>.
        </p>
      </div>
      <CropCalculator />

      {/* How the calculation works */}
      <div className="glass-card-static p-6 sm:p-8 mt-12 mb-8" style={{ border: '1px solid var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧮 How Crop Value Is Calculated
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Every harvest in Grow A Garden is priced by one formula: <strong style={{ color: 'var(--foreground)' }}>base value × weight scaling × mutation multipliers × friend boost</strong>. The base value is fixed per crop — from 10 coins for a Carrot to 10,000 for Diamond Fruit — and everything else multiplies on top. That is why the same crop can sell for pocket change or a fortune depending on how you grew it.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          <strong style={{ color: 'var(--foreground)' }}>Weight scaling</strong> is logarithmic: heavier harvests earn more, but with diminishing returns per kilogram. <strong style={{ color: 'var(--foreground)' }}>Mutations</strong> are the real multiplier — they stack multiplicatively, so a ×20 and a ×100 mutation combine to ×2,000. Test any stack in the <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-bold">mutation calculator</Link>, then bring the total back here.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Use the tool above before every big harvest: enter the real weight, tick your active mutations, and you will know the exact coin value before you sell — no more guessing at the market stall. For per-crop deep dives with weight tables, open any crop on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">value list</Link>.
        </p>
      </div>

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ Crop Value — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {cropCalcFaqs.map((f) => (
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
