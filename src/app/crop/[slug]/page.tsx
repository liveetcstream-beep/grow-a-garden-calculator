import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";
import { formatSourceDate, getDataUpdatedAt } from "@/lib/contentDates";
import CropMiniCalculator from "./CropMiniCalculator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const cropDataUpdatedAt = getDataUpdatedAt("crops");
const goldenMultiplier = MUTATIONS.find((mutation) => mutation.id === "golden")?.multiplier ?? 1;
const rainbowMultiplier = MUTATIONS.find((mutation) => mutation.id === "rainbow")?.multiplier ?? 1;
const numberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

export async function generateStaticParams() {
  return CROPS.map((crop) => ({ slug: `${crop.id}-value` }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cropId = slug.replace(/-value$/, "");
  const crop = CROPS.find((item) => item.id === cropId);
  if (!crop) return { title: "Crop Not Found", robots: { index: false, follow: true } };

  const title = `${crop.name} Value in Grow A Garden | GAG Calculator`;
  const compactTitle = `${crop.name} Value | GAG Calculator`;
  const pageTitle = title.length <= 60 ? title : compactTitle;
  const description = `Estimate ${crop.name} value in Grow A Garden from its stored ${crop.basePrice}-coin base price, weight and mutations. See examples and calculate a custom result.`;
  const pageUrl = `https://growagardencalcs.com/crop/${crop.id}-value`;

  return {
    title: pageTitle,
    description,
    keywords: [`${crop.name} grow a garden value`, `${crop.name} gag calculator`, `${crop.name} price grow a garden`],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description,
      url: pageUrl,
      siteName: "Grow A Garden Calculator",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${crop.name} value calculator` }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function CropValuePage({ params }: PageProps) {
  const { slug } = await params;
  const cropId = slug.replace(/-value$/, "");
  const crop = CROPS.find((item) => item.id === cropId);
  if (!crop) notFound();

  const examples = [1, 2, 5, 10].map((weight) => {
    const baseValue = crop.basePrice * weight ** 2;
    return {
      weight,
      baseValue,
      goldenValue: baseValue * goldenMultiplier,
      rainbowValue: baseValue * rainbowMultiplier,
    };
  });
  const relatedCrops = CROPS.filter((item) => item.category === crop.category && item.id !== crop.id).slice(0, 6);
  const topMutations = [...MUTATIONS].sort((a, b) => b.multiplier - a.multiplier).slice(0, 8);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://growagardencalcs.com" },
      { "@type": "ListItem", position: 2, name: "Crop Calculator", item: "https://growagardencalcs.com/crop-calculator" },
      { "@type": "ListItem", position: 3, name: `${crop.name} Value`, item: `https://growagardencalcs.com/crop/${crop.id}-value` },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-6" style={{ color: "var(--muted)" }}>
        <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/crop-calculator" className="hover:text-[var(--primary)] transition-colors">Crop Calculator</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: "var(--foreground)" }}>{crop.name}</span>
      </nav>

      <header className="glass-card-static p-8 mb-8">
        <div className="flex items-center gap-4 mb-5">
          <span className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl" style={{ background: "var(--surface-2)" }}>{crop.emoji}</span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
              {crop.name} Value Calculator
            </h1>
            <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
              {crop.category} · Stored base price: <strong style={{ color: "var(--accent)" }}>{numberFormat.format(crop.basePrice)} coins</strong>
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Enter this crop&apos;s weight, mutations, friend boost and quantity to calculate an estimate using the values stored on this site. Results are math outputs, not live game readings or player trade prices.
        </p>
        <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
          Crop data file last changed: {cropDataUpdatedAt ? formatSourceDate(cropDataUpdatedAt) : "Date unavailable"}
        </p>
      </header>

      <section aria-labelledby="crop-calculator-title" className="mb-10">
        <h2 id="crop-calculator-title" className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Calculate {crop.name} value
        </h2>
        <CropMiniCalculator crop={crop} />
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          How this estimate is calculated
        </h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
          The crop calculator uses <strong>{numberFormat.format(crop.basePrice)} × weight² × mutation multipliers × friend-boost factor × quantity</strong>. The displayed base price comes from the site&apos;s crop data file, whose last-change date appears above.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          This formula describes the site&apos;s model only. Game rules and player trade values may differ; compare an offer with current in-game information before deciding.
        </p>
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          {crop.name} value examples by weight
        </h2>
        <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>
          Formula examples use one crop and no friend boost. Golden and Rainbow use the multipliers stored in the site&apos;s mutation data.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                <th scope="col" className="text-left py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Weight</th>
                <th scope="col" className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>No mutation</th>
                <th scope="col" className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Golden (×{goldenMultiplier})</th>
                <th scope="col" className="text-right py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Rainbow (×{rainbowMultiplier})</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((example) => (
                <tr key={example.weight} className="border-b" style={{ borderColor: "var(--glass-border)" }}>
                  <th scope="row" className="text-left py-3 px-3 font-medium" style={{ color: "var(--foreground)" }}>{example.weight} kg</th>
                  <td className="text-right py-3 px-3" style={{ color: "var(--foreground)" }}>{numberFormat.format(example.baseValue)}</td>
                  <td className="text-right py-3 px-3" style={{ color: "var(--foreground)" }}>{numberFormat.format(example.goldenValue)}</td>
                  <td className="text-right py-3 px-3" style={{ color: "var(--foreground)" }}>{numberFormat.format(example.rainbowValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Continue with related calculators
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          Apply a mutation stack in the <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">mutation calculator</Link>, compare stored crop and pet values in the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden values list</Link>, or compare two offers in the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link>.
        </p>
        {relatedCrops.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relatedCrops.map((relatedCrop) => (
              <Link key={relatedCrop.id} href={`/crop/${relatedCrop.id}-value`} className="p-3 rounded-xl flex items-center gap-3 hover:border-[var(--primary)] transition-colors"
                style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}>
                <span className="text-2xl">{relatedCrop.emoji}</span>
                <span>
                  <span className="block text-xs font-bold" style={{ color: "var(--foreground)" }}>{relatedCrop.name}</span>
                  <span className="block text-[10px]" style={{ color: "var(--muted)" }}>Stored base: {numberFormat.format(relatedCrop.basePrice)}</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="glass-card-static p-6 mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Mutation multipliers in the site data
        </h2>
        <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>These are the highest multipliers currently listed in the site&apos;s mutation data.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {topMutations.map((mutation) => (
            <Link key={mutation.id} href={`/mutation/${mutation.id}`} className="p-3 rounded-xl text-center hover:border-[var(--primary)] transition-colors"
              style={{ background: `${mutation.color}10`, border: `1px solid ${mutation.color}25` }}>
              <span className="block text-xs font-bold" style={{ color: mutation.color }}>{mutation.name}</span>
              <span className="block text-lg font-extrabold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>×{mutation.multiplier}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
