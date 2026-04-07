import { Metadata } from "next";
import { MUTATIONS } from "@/data/mutations";
import { CROPS } from "@/data/crops";
import Link from "next/link";

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

  return {
    title: `${mutation.name} Mutation - ×${mutation.multiplier} Multiplier | Grow A Garden`,
    description: `${mutation.name} mutation in Grow A Garden has a ×${mutation.multiplier} multiplier. ${mutation.howToGet}. Category: ${mutation.category}. Calculate exact values with our mutation calculator.`,
    keywords: [`${mutation.name} mutation GAG`, `Grow A Garden ${mutation.name}`, `${mutation.name} multiplier`, `how to get ${mutation.name}`],
  };
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/mutation-calculator" className="hover:text-[var(--primary)] transition-colors">Mutations</Link>
        <span>/</span>
        <span style={{ color: mutation.color }}>{mutation.name}</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8" style={{ borderColor: `${mutation.color}30` }}>
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${mutation.color}20`, border: `2px solid ${mutation.color}40` }}>
            <div className="w-8 h-8 rounded-full" style={{ background: mutation.color, boxShadow: `0 0 20px ${mutation.color}60` }} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: mutation.color }}>
              {mutation.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${mutation.color}15`, color: mutation.color }}>
                {mutation.category}
              </span>
              <span className="text-2xl font-black" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
                ×{mutation.multiplier}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Description:</strong> {mutation.description}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>How to Get:</strong> {mutation.howToGet}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Multiplier:</strong> The {mutation.name} mutation multiplies your crop&apos;s value by <strong style={{ color: mutation.color }}>×{mutation.multiplier}</strong>.
            This means a crop worth 1,000 coins becomes worth <strong style={{ color: 'var(--primary)' }}>{(1000 * mutation.multiplier).toLocaleString()} coins</strong> with this mutation.
          </p>
        </div>
      </div>

      {/* Value Examples */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📊 {mutation.name} Value Examples (Weight = 1kg)
        </h2>
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

      {/* Combo Mutations */}
      {comboMutations.length > 0 && (
        <div className="glass-card-static p-6 mb-8">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🔗 Related Combo Mutations
          </h2>
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
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 More {mutation.category} Mutations
        </h2>
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

      {/* CTA */}
      <div className="text-center py-8">
        <Link href="/mutation-calculator" className="btn-primary text-base px-8 py-4">
          🧬 Open Full Mutation Calculator
        </Link>
      </div>
    </div>
  );
}
