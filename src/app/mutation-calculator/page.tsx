import type { Metadata } from "next";
import MutationCalculator from "@/components/MutationCalculator";
import Link from "next/link";
import { MUTATIONS } from "@/data/mutations";

export const metadata: Metadata = {
  title: "Mutation Value Calculator - Stack Grow A Garden Mutations",
  description: "Calculate mutation multiplier stacks in Grow A Garden. Browse 150+ mutations, see combined values, and find the highest multiplier combos.",
  keywords: ["GAG mutation calculator", "Grow A Garden mutations", "mutation multiplier", "mutation stack"],
  alternates: { canonical: '/mutation-calculator' },
};

export default function MutationCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 Mutation Value Calculator
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          Welcome to the ultimate <strong>grow a garden mutation calculator</strong>. Browse all mutations by category, stack them together, and see the total multiplier effect on your crop value. Using this <strong>mutation calculator grow a garden</strong> tool, you can easily find the absolute best and rarest mutation combos for massive profit.
        </p>
      </div>
      
      <MutationCalculator />

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
    </div>
  );
}
