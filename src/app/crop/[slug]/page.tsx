import { Metadata } from "next";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";
import Link from "next/link";
import CropMiniCalculator from "./CropMiniCalculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CROPS.map(crop => ({
    slug: crop.id + "-value",
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cropId = slug.replace("-value", "");
  const crop = CROPS.find(c => c.id === cropId);

  if (!crop) {
    return { title: "Crop Not Found" };
  }

  return {
    title: `${crop.name} Value & Calculator | Grow A Garden GAG Calculator`,
    description: `How much is ${crop.name} worth in Grow A Garden? Base price is ${crop.basePrice} coins. Use our gag calculator to find exact ${crop.name} value with weight & mutations.`,
    keywords: [`${crop.name} grow a garden value`, `${crop.name} gag calculator`, `grow a garden calculator ${crop.name}`, `${crop.name} price grow a garden`, `calculator grow a garden`],
    alternates: { canonical: `/crop/${crop.id}-value` },
  };
}

export default async function CropValuePage({ params }: PageProps) {
  const { slug } = await params;
  const cropId = slug.replace("-value", "");
  const crop = CROPS.find(c => c.id === cropId);

  if (!crop) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>Crop Not Found</h1>
        <p style={{ color: 'var(--muted)' }}>This crop doesn&apos;t exist in our database.</p>
        <Link href="/crop-calculator" className="btn-primary mt-6 inline-block">Go to Crop Calculator</Link>
      </div>
    );
  }

  // Get related mutations (top 8 by multiplier)
  const topMutations = [...MUTATIONS].sort((a, b) => b.multiplier - a.multiplier).slice(0, 8);

  // Calculate example values at different weights
  const exampleWeights = [1, 2, 5, 10, 25, 50];
  const exampleValues = exampleWeights.map(w => ({
    weight: w,
    baseValue: crop.basePrice * Math.pow(w, 2),
  }));

  // Related crops from same category
  const relatedCrops = CROPS.filter(c => c.category === crop.category && c.id !== crop.id).slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/crop-calculator" className="hover:text-[var(--primary)] transition-colors">Crops</Link>
        <span>/</span>
        <span style={{ color: 'var(--foreground)' }}>{crop.name}</span>
      </nav>

      {/* Hero */}
      <div className="glass-card-static p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl" style={{ background: 'var(--surface-2)' }}>
            {crop.emoji}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
              {crop.name} Value Calculator
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--primary)' }}>
                {crop.category}
              </span>
              <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                Base Price: {crop.basePrice}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          The {crop.name} is a {crop.category} crop in Grow A Garden with a base price of {crop.basePrice} coins.
          Use the calculator below to find the exact sell value based on weight, mutations, and friend boost.
          The formula is: <strong style={{ color: 'var(--primary)' }}>Value = {crop.basePrice} × Weight² × Mutation Multipliers × Friend Boost</strong>.
        </p>
      </div>

      {/* Mini Calculator */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Quick {crop.name} Calculator
        </h2>
        <CropMiniCalculator crop={crop} />
      </div>

      {/* Value Table */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          📊 {crop.name} Values by Weight
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Weight (kg)</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>Base Value</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>w/ Golden (×20)</th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: 'var(--muted)' }}>w/ Rainbow (×50)</th>
              </tr>
            </thead>
            <tbody>
              {exampleValues.map(ev => (
                <tr key={ev.weight} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td className="py-3 px-4 font-medium" style={{ color: 'var(--foreground)' }}>{ev.weight} kg</td>
                  <td className="py-3 px-4 text-right" style={{ color: 'var(--accent)' }}>{ev.baseValue.toLocaleString()}</td>
                  <td className="py-3 px-4 text-right" style={{ color: '#FFD700' }}>{(ev.baseValue * 20).toLocaleString()}</td>
                  <td className="py-3 px-4 text-right" style={{ color: '#FF6B9D' }}>{(ev.baseValue * 50).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Mutations */}
      <div className="glass-card-static p-6 mb-8">
        <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          🧬 Best Mutations for {crop.name}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topMutations.map(mut => (
            <Link
              key={mut.id}
              href={`/mutation/${mut.id}`}
              className="p-3 rounded-xl text-center transition-all hover:scale-105"
              style={{ background: `${mut.color}10`, border: `1px solid ${mut.color}25` }}
            >
              <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: mut.color }} />
              <p className="text-xs font-bold" style={{ color: mut.color }}>{mut.name}</p>
              <p className="text-lg font-extrabold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>×{mut.multiplier}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Related Crops */}
      {relatedCrops.length > 0 && (
        <div className="glass-card-static p-6">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
            🌿 More {crop.category} Crops
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedCrops.map(c => (
              <Link
                key={c.id}
                href={`/crop/${c.id}-value`}
                className="p-4 rounded-xl transition-all hover:scale-105 flex items-center gap-3"
                style={{ background: 'var(--surface-1)', border: '1px solid var(--glass-border)' }}
              >
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{c.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>Base: {c.basePrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
