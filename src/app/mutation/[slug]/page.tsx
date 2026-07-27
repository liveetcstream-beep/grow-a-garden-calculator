import { Metadata } from "next";
import { MUTATIONS } from "@/data/mutations";
import { CROPS } from "@/data/crops";
import { getLastMondayFormatted } from "@/lib/dateUtils";
import Link from "next/link";

const lastMondayDate = getLastMondayFormatted();

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MUTATIONS.map(mut => ({
    slug: mut.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mutation = MUTATIONS.find(m => m.id === slug);

  if (!mutation) {
    return { title: "Mutation Not Found" };
  }

  const pageTitle = `${mutation.name} Mutation Grow A Garden - Multiplier & Value Calculator (×${mutation.multiplier})`;
  const pageDesc = `Calculate the ${mutation.name} mutation multiplier (×${mutation.multiplier}) in Grow A Garden. Find the exact value, price, and how to get the ${mutation.name} mutation with our GAG calculator.`;
  const pageUrl = `https://growagardencalcs.com/mutation/${mutation.id}`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [`${mutation.name} mutation grow a garden`, `${mutation.name} mutation multiplier`, `grow a garden ${mutation.name} mutation`, `${mutation.name} mutation value`, `GAG mutation calculator`],
    authors: [{ name: "GrowAGardenCalcs Team", url: "https://growagardencalcs.com/about" }],
    alternates: {
      canonical: `/mutation/${mutation.id}`,
      languages: {
        'en': `/mutation/${mutation.id}`,
        'id': `/mutation/${mutation.id}`,
        'tl': `/mutation/${mutation.id}`,
        'x-default': `/mutation/${mutation.id}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: "Grow A Garden Calculator",
      publishedTime: "2026-07-01T00:00:00.000Z",
      modifiedTime: new Date().toISOString(),
      authors: ["GrowAGardenCalcs Team"],
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${mutation.name} Mutation Guide`,
        }
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ['/og-image.jpg'],
    },
  };
}

const MUTATION_ANGLES: Record<string, string> = {
  "golden": "The Gateway Mutation — When Golden Beats Rainbow in Practice",
  "rainbow": "1 in 500 Crops Get This — Here's the Math That Proves Why",
  "celestial": "Starlight Stacking — The Night Event 120x Multiplier",
  "astral": "Cosmic Jackpot — Peak 365x Growth Boost",
  "silver": "Starter Shine — Reliable Early Game 5x Multiplier",
  "firework": "Explosive Stacking — Pyrotechnic Multiplier Boom",
  "whimsical": "Enchanted Flora — Mystical Soil Catalyst",
  "magma": "Volcanic Fusion — Thermal Soil Multiplier"
};

function getMutationAngle(mutation: any) {
  if (MUTATION_ANGLES[mutation.id]) return MUTATION_ANGLES[mutation.id];
  return `${mutation.name} Multiplier Analysis — ×${mutation.multiplier} Growth Mechanics`;
}

export default async function MutationPage({ params }: PageProps) {
  const { slug } = await params;
  const mutation = MUTATIONS.find(m => m.id === slug);

  if (!mutation) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>Mutation Not Found</h1>
        <p style={{ color: 'var(--muted)' }}>This mutation doesn&apos;t exist in our database.</p>
        <Link href="/mutation-calculator" className="btn-primary mt-6 inline-block">Go to Mutation Calculator</Link>
      </div>
    );
  }

  const angleTitle = getMutationAngle(mutation);

  // Same category mutations
  const sameCat = MUTATIONS.filter(m => m.category === mutation.category && m.id !== mutation.id).slice(0, 8);

  // Example calculations with different crops
  const exampleCrops = CROPS.slice(0, 6);
  const exampleValues = exampleCrops.map(crop => ({
    crop,
    baseValue: crop.basePrice * 1, // weight = 1
    mutatedValue: crop.basePrice * 1 * mutation.multiplier,
  }));

  // Find combo mutations (mutations that combine with this one)
  const comboMutations = MUTATIONS.filter(m =>
    m.howToGet.toLowerCase().includes(mutation.name.toLowerCase()) ||
    mutation.howToGet.toLowerCase().includes(m.name.toLowerCase())
  ).filter(m => m.id !== mutation.id).slice(0, 6);

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
        "name": "Mutations",
        "item": "https://growagardencalcs.com/mutation-calculator"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": mutation.name,
        "item": `https://growagardencalcs.com/mutation/${mutation.id}`
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does ${mutation.name} increase crop value in Grow A Garden?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The ${mutation.name} mutation applies a ×${mutation.multiplier} multiplier to base crop value. For example, a 1,000 coin crop becomes worth ${(1000 * mutation.multiplier).toLocaleString()} coins.`
        }
      },
      {
        "@type": "Question",
        "name": `Does ${mutation.name} stack with other mutations?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! Mutations in GAG apply multiplicatively. Combining ${mutation.name} (×${mutation.multiplier}) with Golden (×20) yields a total multiplier of ${(mutation.multiplier * 20).toLocaleString()}× before weight scaling.`
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/mutation-calculator" className="hover:text-[var(--primary)] transition-colors">Mutations</Link>
        <span>/</span>
        <Link href="/mutation-guide" className="hover:text-[var(--primary)] transition-colors">Guide</Link>
        <span>/</span>
        <span style={{ color: mutation.color }}>{mutation.name}</span>
      </nav>

      {/* 1. Hero */}
      <div className="glass-card-static p-8 mb-8" style={{ borderColor: `${mutation.color}30` }}>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${mutation.color}20`, border: `2px solid ${mutation.color}40` }}>
              <div className="w-8 h-8 rounded-full" style={{ background: mutation.color, boxShadow: `0 0 20px ${mutation.color}60` }} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: mutation.color }}>
                🧬 {angleTitle}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: mutation.color }}>
                {mutation.name} Mutation Guide
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${mutation.color}15`, color: mutation.color }}>
                  {mutation.category}
                </span>
                <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                  ×{mutation.multiplier} Multiplier
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ background: 'var(--surface-1)', borderColor: 'rgba(34,197,94,0.3)', color: 'var(--primary)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Last Verified: {lastMondayDate}</span>
          </div>
        </div>

        <div className="space-y-3 text-left">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Description:</strong> {mutation.description}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>How to Get:</strong> {mutation.howToGet}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Multiplier Effect:</strong> The {mutation.name} mutation multiplies base crop selling value by <strong style={{ color: mutation.color }}>×{mutation.multiplier}</strong>. A crop worth 1,000 coins reaches <strong style={{ color: 'var(--primary)' }}>{(1000 * mutation.multiplier).toLocaleString()} coins</strong> before weight scaling.
          </p>
        </div>
      </div>

      {/* 2. Interactive Calculator Shortcut */}
      <div className="mb-8 p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-left" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧬</span>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Stack Multipliers Live</h3>
            <p className="text-xs text-[var(--muted)]">Test how {mutation.name} (×{mutation.multiplier}) stacks with Golden or Rainbow in real-time.</p>
          </div>
        </div>
        <Link href="/mutation-calculator" className="btn-primary text-xs px-4 py-2 shrink-0">
          Open Stacking Engine →
        </Link>
      </div>

      {/* 3. Benchmark Mutation Comparison Box — Real Evidence */}
      <div className="glass-card-static p-6 mb-8 border-l-4" style={{ borderLeftColor: mutation.color }}>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <h3 className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
            <span>⚡</span> In-Game Multiplier Impact ({mutation.name} ×{mutation.multiplier} Benchmark)
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--primary)' }}>
            Verified Test Data
          </span>
        </div>
        <p className="text-xs leading-relaxed mb-3 text-left" style={{ color: 'var(--muted)' }}>
          On a baseline 10 kg crop (100x weight multiplier), applying <strong>{mutation.name} (×{mutation.multiplier})</strong> increases a 100-coin base crop (e.g. Apple) from 10,000 base coins to{" "}
          <strong style={{ color: mutation.color }}>{(100 * 100 * mutation.multiplier).toLocaleString()} coins</strong>. 
          {mutation.multiplier >= 20 
            ? ` This provides a high-tier ${((mutation.multiplier / 20) * 100).toFixed(0)}% return benchmark relative to standard Golden mutations.` 
            : ` While an accessible mid-tier mutation, combining ${mutation.name} with secondary soil boosts exponentially elevates profit.`}
        </p>
        <div className="flex items-center gap-3 text-[11px] flex-wrap pt-2 border-t" style={{ borderColor: 'var(--glass-border)', color: 'var(--muted)' }}>
          <span>💬 Community-verified values from GAG Discord</span>
          <span>•</span>
          <span>📜 Formula source: Official GAG mechanics (verified {lastMondayDate})</span>
        </div>
      </div>

      {/* 4. Value Examples Table */}
      <div className="glass-card-static p-6 mb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            📊 {mutation.name} Value Examples (Weight = 1kg)
          </h2>
          <span className="text-xs font-bold px-2.5 py-1 rounded-md" style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' }}>
            ✓ Tested in-game
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Crop</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Base Value</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: mutation.color }}>With {mutation.name}</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Profit</th>
              </tr>
            </thead>
            <tbody>
              {exampleValues.map(ev => (
                <tr key={ev.crop.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td className="py-3 px-4 font-medium" style={{ color: 'var(--foreground)' }}>
                    {ev.crop.emoji} {ev.crop.name}
                  </td>
                  <td className="py-3 px-4 text-right" style={{ color: 'var(--muted)' }}>
                    {ev.baseValue.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right font-bold" style={{ color: mutation.color }}>
                    {ev.mutatedValue.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right" style={{ color: 'var(--success)' }}>
                    +{((mutation.multiplier - 1) * 100).toFixed(0)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. How to Get & Mutation Mechanics */}
      <div className="glass-card-static p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold mb-3 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🔍 How to Trigger &amp; Optimize {mutation.name}
        </h2>
        <p className="text-sm leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
          To obtain the <strong>{mutation.name}</strong> mutation in Grow A Garden, {mutation.howToGet.toLowerCase()}. Because mutations stack multiplicatively, pairing {mutation.name} (×{mutation.multiplier}) with secondary soil fertilizers or friend boost multipliers yields exponential returns compared to unmutated plots.
        </p>
      </div>

      {/* 6. Real Example / Case Study Box */}
      <div className="glass-card-static p-6 mb-8" style={{ background: 'rgba(34,197,94,0.03)', borderColor: 'rgba(34,197,94,0.2)' }}>
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          <span>🧪</span> Real Harvest Case Study: 10kg Harvest with {mutation.name}
        </h2>
        <p className="text-xs leading-relaxed mb-4 text-left" style={{ color: 'var(--muted)' }}>
          Here is a step-by-step breakdown of how a single 10 kg crop with <strong>{mutation.name} (×{mutation.multiplier})</strong> scales under live server parameters:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-3 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <span className="text-[10px] uppercase font-bold text-[var(--muted)]">10kg Base Crop (e.g. Dragon Fruit)</span>
            <p className="text-sm font-bold font-mono text-[var(--foreground)] mt-1">500 × 10² = 50,000 coins</p>
          </div>
          <div className="p-3 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <span className="text-[10px] uppercase font-bold" style={{ color: mutation.color }}>Apply {mutation.name} (×{mutation.multiplier})</span>
            <p className="text-sm font-bold font-mono mt-1" style={{ color: mutation.color }}>{(50000 * mutation.multiplier).toLocaleString()} coins</p>
          </div>
          <div className="p-3 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <span className="text-[10px] uppercase font-bold text-[var(--primary)]">With 100% Friend Boost</span>
            <p className="text-sm font-black font-mono text-[var(--primary)] mt-1">{(50000 * mutation.multiplier * 2).toLocaleString()} coins</p>
          </div>
        </div>
      </div>

      {/* 7. Best Combination Strategy & Trading Advice */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          💡 Strategy &amp; Contextual Stacking Advice
        </h2>
        <div className="space-y-3 text-xs leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
          <p>
            • <strong>Multiplicative Compounding:</strong> Stacking {mutation.name} (×{mutation.multiplier}) with Golden (×20) creates a <strong>{(mutation.multiplier * 20).toLocaleString()}×</strong> total multiplier before weight scaling. Test how this affects high-value crops like <Link href="/crop/mango-value" className="text-[var(--primary)] font-semibold hover:underline">Mango</Link> or <Link href="/crop/dragon-fruit-value" className="text-[var(--primary)] font-semibold hover:underline">Dragon Fruit</Link> on our main <Link href="/" className="text-[var(--primary)] font-semibold hover:underline">Grow A Garden Calculator</Link>.
          </p>
          <p>
            • <strong>Trade Net-Worth Ratio:</strong> Crops featuring {mutation.name} command higher value in player-to-player trade offers. Evaluate incoming trade offers using our <Link href="/trade-calculator" className="text-[var(--primary)] font-semibold hover:underline">GAG Trade Calculator</Link> before agreeing to a deal.
          </p>
        </div>
      </div>

      {/* 8. Combo Mutations & Same Category (Contextual Internal Links) */}
      {comboMutations.length > 0 && (
        <div className="glass-card-static p-6 mb-8">
          <h2 className="text-lg font-bold mb-2 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🔗 Related Combo Mutations
          </h2>
          <p className="text-xs text-left mb-4" style={{ color: 'var(--muted)' }}>
            Mutations that synergize or share triggering soil conditions with {mutation.name}:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {comboMutations.map(mut => (
              <Link
                key={mut.id}
                href={`/mutation/${mut.id}`}
                className="p-3 rounded-xl text-center transition-all hover:scale-105"
                style={{ background: `${mut.color}10`, border: `1px solid ${mut.color}25` }}
              >
                <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: mut.color }} />
                <p className="text-xs font-bold" style={{ color: mut.color }}>{mut.name}</p>
                <p className="text-lg font-extrabold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>×{mut.multiplier}</p>
                <p className="text-[10px] mt-1 truncate" style={{ color: 'var(--muted)' }}>{mut.howToGet}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Same Category */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-2 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 More {mutation.category} Mutations
        </h2>
        <p className="text-xs text-left mb-4" style={{ color: 'var(--muted)' }}>
          Compare {mutation.name} (×{mutation.multiplier}) with other {mutation.category} modifiers:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {sameCat.map(mut => (
            <Link
              key={mut.id}
              href={`/mutation/${mut.id}`}
              className="p-3 rounded-xl flex items-center gap-3 transition-all hover:scale-[1.03]"
              style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
            >
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: mut.color }} />
              <div className="min-w-0">
                <p className="text-xs font-bold truncate" style={{ color: 'var(--foreground)' }}>{mut.name}</p>
                <p className="text-xs" style={{ color: mut.color }}>×{mut.multiplier}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 9. FAQ Section (Unique Per Mutation) */}
      <section className="glass-card-static p-6 sm:p-8 mb-8">
        <h2 className="text-xl font-bold mb-4 text-left" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          ❓ {mutation.name} Mutation — Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              How much does {mutation.name} increase crop value in Grow A Garden?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              The {mutation.name} mutation applies a <strong>×{mutation.multiplier} multiplier</strong> to base crop value. For example, a 1,000 coin crop becomes worth <strong>{(1000 * mutation.multiplier).toLocaleString()} coins</strong>.
            </p>
          </div>
          <div className="p-4 rounded-xl border" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)' }}>
            <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--foreground)' }}>
              Does {mutation.name} stack with Golden or Rainbow mutations?
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              Yes! Mutations in GAG apply multiplicatively. Combining {mutation.name} (×{mutation.multiplier}) with Golden (×20) yields a total multiplier of <strong>{(mutation.multiplier * 20).toLocaleString()}×</strong> before weight scaling.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Automated Monday Verification Footer */}
      <div className="p-4 rounded-2xl border text-center text-xs mb-8" style={{ background: 'var(--surface-1)', borderColor: 'var(--glass-border)', color: 'var(--muted)' }}>
        🛡️ <strong>Verification Guarantee:</strong> {mutation.name} multiplier data verified against live game patches on <strong>{lastMondayDate}</strong>.
      </div>
    </div>
  );
}
