import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";
import { PETS } from "@/data/pets";
import { formatDataUpdatedAt } from "@/lib/contentDates";

const aboutTitle = "About Grow A Garden Calculator | Data & Method";
const aboutDesc = "See how this independent Grow A Garden calculator uses stored crop, mutation and pet data, how its calculations work, and how to report a correction.";
const aboutUrl = "https://growagardencalcs.com/about";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDesc,
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: aboutTitle,
    description: aboutDesc,
    url: aboutUrl,
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: aboutTitle }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDesc,
    images: ["/og-image.jpg"],
  },
};

const calculators = [
  { title: "Crop value calculator", description: "Calculate crop values by base price, weight and selected mutations.", href: "/crop-calculator" },
  { title: "Mutation calculator", description: "Multiply selected mutation values and compare crop combinations.", href: "/mutation-calculator" },
  { title: "Pet calculator", description: "Explore pet values using the stats stored in the site's pet dataset.", href: "/pet-calculator" },
  { title: "Trade calculator", description: "Compare two offers using the values available in the calculators.", href: "/trade-calculator" },
  { title: "Grow A Garden values list", description: "Browse the crop and pet records currently stored on the site.", href: "/value-list" },
  { title: "Mutation guide", description: "Browse listed mutations, multipliers and the site's descriptions.", href: "/mutation-guide" },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: aboutTitle,
    url: aboutUrl,
    description: aboutDesc,
    mainEntity: {
      "@type": "WebSite",
      name: "Grow A Garden Calculator",
      url: "https://growagardencalcs.com",
    },
  };

  const datasets = [
    { label: "Crop records", count: CROPS.length, updated: formatDataUpdatedAt("crops") },
    { label: "Mutation records", count: MUTATIONS.length, updated: formatDataUpdatedAt("mutations") },
    { label: "Pet records", count: PETS.length, updated: formatDataUpdatedAt("pets") },
  ];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <div className="max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-8" style={{ color: "var(--muted)" }}>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: "var(--foreground)" }}>About</span>
        </nav>

        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
            style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
            Independent fan-made calculator
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            About Grow A Garden Calculator
          </h1>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            This site provides calculators and reference tables for Roblox Grow A Garden. It is an independent fan-made resource and is not affiliated with Roblox or the game developers.
          </p>
        </header>

        <section id="methodology" className="p-8 rounded-3xl border mb-8 text-left" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            How the calculators work
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            Crop results use the base price stored for a crop, the weight entered by the visitor, the selected mutation multipliers, any friend boost entered, and quantity. The site's crop calculation is:
          </p>
          <p className="text-sm font-bold leading-relaxed mb-4" style={{ color: "var(--primary)" }}>
            Base price × weight² × product of mutation multipliers × (1 + friend boost ÷ 100) × quantity
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            The result reflects the inputs and records stored on this site. It is a calculator estimate, not a live game reading, an official price, or a guarantee of what another player will offer in a trade.
          </p>
        </section>

        <section className="p-8 rounded-3xl border mb-8 text-left" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Data coverage and update dates
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            These counts come from the site's current datasets. Each date shows when its corresponding data file was last changed in the repository; it does not mean every value was independently verified in-game on that date or that a new patch was reviewed.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {datasets.map((dataset) => (
              <div key={dataset.label} className="p-5 rounded-2xl border" style={{ background: "var(--surface-2)", borderColor: "var(--glass-border)" }}>
                <p className="text-2xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}>{dataset.count}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>{dataset.label}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Data file last changed: {dataset.updated}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-3xl border mb-8 text-left" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <h2 className="text-2xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Browse the tools and reference pages
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {calculators.map((calculator) => (
              <Link key={calculator.href} href={calculator.href} className="p-5 rounded-2xl border hover:border-[var(--primary)] transition-colors"
                style={{ background: "var(--surface-2)", borderColor: "var(--glass-border)" }}>
                <h3 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>{calculator.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{calculator.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl border mb-8 text-left" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Found an incorrect value?</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Send the page URL, the value shown, and a source or screenshot that helps us review it through the <Link href="/contact" className="text-[var(--primary)] hover:underline font-semibold">contact page</Link>.
          </p>
        </section>

        <p className="text-xs leading-relaxed text-center" style={{ color: "var(--muted)" }}>
          Grow A Garden Calculator is a fan-made educational utility. Roblox and Grow A Garden are trademarks of their respective owners.
        </p>
      </div>
    </main>
  );
}
