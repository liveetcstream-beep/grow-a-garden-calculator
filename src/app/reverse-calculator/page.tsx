import type { Metadata } from "next";
import Link from "next/link";
import ReverseCalculator from "@/components/ReverseCalculator";
import { getCanonical } from "@/lib/canonical";

const revTitle = "Reverse Goal Calculator - Target Coins | Grow A Garden";
const revDesc = "Set a coin goal and calculate exactly what weight and mutations you need to reach it in Grow A Garden. The ultimate reverse target calculator.";
const revUrl = "https://growagardencalcs.com/reverse-calculator";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: revTitle,
    description: revDesc,
    keywords: ["GAG reverse calculator", "Grow A Garden target goal", "calculate plant weight needed", "GAG goal calculator"],
    alternates: {
      canonical: getCanonical("/reverse-calculator"),
    },
    openGraph: {
      title: revTitle,
      description: revDesc,
      url: revUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: revTitle,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: revTitle,
      description: revDesc,
      images: ['/og-image.png'],
    },
  };
};

const revFaqs = [
  {
    q: "How does the reverse goal calculator work?",
    a: "Instead of pricing a harvest you already have, it works backwards: enter the coin amount you want, pick a crop, and it computes the harvest weight and mutation combination needed to hit that target.",
  },
  {
    q: "What is a realistic coin goal to set?",
    a: "Base it on your best crop's base value. Aiming for 100× a crop's base value is achievable with one or two solid mutations; 10,000× needs an elite stacked setup. The tool's auto-suggestions show the easiest path to your number.",
  },
  {
    q: "Can I reach my goal with weight alone, no mutations?",
    a: "Sometimes, but weight scaling has diminishing returns — beyond a point, the required weight becomes impractical to grow. Adding even one strong mutation usually cuts the needed weight dramatically.",
  },
  {
    q: "Which crop is best for hitting a high coin target?",
    a: "Start from the highest base value: Diamond Fruit (10,000), Obsidian Onion (9,000) or Ruby Rose (8,000). Since every multiplier applies to the base, high-base crops reach any target with less weight and fewer mutations.",
  },
];

const revFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: revFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ReverseCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(revFaqSchema) }}
      />
      <ReverseCalculator />

      {/* How reverse planning works */}
      <div className="glass-card-static p-6 sm:p-8 mx-4 sm:mx-6 mb-8" style={{ border: '1px solid var(--glass-border)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🎯 How Reverse Goal Planning Works
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Most calculators answer <em>“what is this worth?”</em> — this one answers the opposite: <strong style={{ color: 'var(--foreground)' }}>“what do I need to grow to make X coins?”</strong> Set your target, choose a crop, and the tool solves the value formula backwards, telling you the harvest weight required and which mutation stacks get you there with the least effort.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          The key insight is the trade-off between <strong style={{ color: 'var(--foreground)' }}>weight and mutations</strong>. Because weight scaling diminishes while mutations multiply, one strong mutation often replaces an impossible weight target with an easy one. The auto-suggestions above find that sweet spot for you — for example, showing which single mutation makes your goal reachable at a realistic 50kg harvest.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Once you know the required setup, plan the grow: check <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-bold">how to trigger each mutation</Link>, verify the crop's economics on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-bold">value list</Link>, and test forward pricing in the <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-bold">crop calculator</Link>.
        </p>
      </div>

      {/* FAQ */}
      <div className="glass-card-static p-6 sm:p-8 mx-4 sm:mx-6 mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ Reverse Goals — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {revFaqs.map((f) => (
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
