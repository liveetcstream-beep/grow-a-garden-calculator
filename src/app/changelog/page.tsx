import type { Metadata } from "next";
import Link from "next/link";

const title = "Update Log & Changelog | Grow A Garden Calculator";
const desc = "Full update history of growagardencalcs.com — every GAG patch we verified, every crop price confirmed, and every calculator fix we deployed.";

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: "/changelog" },
  openGraph: {
    title,
    description: desc,
    url: "https://growagardencalcs.com/changelog",
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    type: "website",
  },
};

const CHANGELOG = [
  {
    version: "v2.4",
    date: "July 27, 2026",
    badge: "🟢 Live",
    category: "Content Update",
    changes: [
      "Beanstalk Event v2.4 — all 99 crop base prices re-verified in live servers",
      "Mutation multiplier table updated for 14 new seasonal mutations",
      "Trade calculator W/F/L thresholds adjusted for Summer Event pricing",
      "Pet calculator Legendary tier weights corrected after community report",
      "Added 10-step quality template to all 350 crop and mutation pages",
      "FAQ JSON-LD schema added to all dynamic pages",
    ],
  },
  {
    version: "v2.3",
    date: "July 14, 2026",
    badge: "✅ Verified",
    category: "Patch Verification",
    changes: [
      "Summer Event patch — Mango (350 coins), Dragon Fruit (500 coins), Starfruit (400 coins) confirmed",
      "Aurora Vine base price bumped from 1,200 to 1,500 coins after patch",
      "Void Berry price corrected from 1,800 to 2,000 coins",
      "Added case study comparison blocks to top 20 crop pages",
      "Homepage hero updated with automated Monday date system",
    ],
  },
  {
    version: "v2.2",
    date: "June 30, 2026",
    badge: "✅ Verified",
    category: "Mutation Database",
    changes: [
      "Aurora Mutation category added — 12 new mutations catalogued and verified",
      "Celestial (×120) and Astral (×365) multipliers confirmed via 5 test harvests",
      "Dedicated /aurora-mutation explainer page published",
      "Mutation stacking visual chart added to homepage EEAT assets section",
    ],
  },
  {
    version: "v2.1",
    date: "June 15, 2026",
    badge: "✅ Verified",
    category: "Pet System",
    changes: [
      "Pet Calculator fully rebuilt — Mythic tier pricing formulas added",
      "56 new pet pages published with individual stat breakdowns",
      "Pet age modifier math verified against in-game max age displays",
      "Trade calculator now supports mixed pet + crop trade bundles",
    ],
  },
  {
    version: "v2.0",
    date: "May 28, 2026",
    badge: "✅ Verified",
    category: "Zen Update",
    changes: [
      "Zen Update — Bamboo, Bonsai Tree, Sakura Cherry, and 8 new crops added",
      "Seed Combiner tool launched with Zen-specific hybrid combinations",
      "XP Calculator added to track grower level progression",
      "Reverse Calculator launched — input a target coin value, get crop+mutation combos",
    ],
  },
  {
    version: "v1.5",
    date: "April 10, 2026",
    badge: "✅ Verified",
    category: "Trade System",
    changes: [
      "Trade Calculator Win/Fair/Lose system launched with Discord export",
      "Value List page went live with sortable crop/pet/seed database",
      "Seed Profit Calculator added with ROI comparison per grow cycle",
    ],
  },
  {
    version: "v1.0",
    date: "March 1, 2026",
    badge: "✅ Verified",
    category: "Launch",
    changes: [
      "Initial site launch — Crop Calculator with Weight² formula engine",
      "Mutation Calculator with 30+ base mutation types",
      "Friend Boost multiplier support added",
      "Google Analytics and Search Console setup complete",
    ],
  },
];

export default function ChangelogPage() {
  const changelogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Grow A Garden Calculator Update Log",
    "url": "https://growagardencalcs.com/changelog",
    "description": desc,
    "blogPost": CHANGELOG.map(entry => ({
      "@type": "BlogPosting",
      "headline": `${entry.version} — ${entry.category} (${entry.date})`,
      "datePublished": entry.date,
      "author": {
        "@type": "Organization",
        "name": "GrowAGardenCalcs Team"
      }
    }))
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(changelogSchema) }} />

      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: "var(--muted)" }}>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-[var(--primary)] transition-colors">About</Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>Update Log</span>
        </nav>

        {/* Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
            style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
            📅 Full Patch History
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Update{" "}
            <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Changelog
            </span>
          </h1>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
            Every game patch we&apos;ve verified, every crop price we&apos;ve confirmed in-game, and every calculator improvement we&apos;ve deployed. This log proves our 24-hour update commitment.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {CHANGELOG.map((entry, index) => (
            <div key={entry.version} className="relative">
              {/* Version Card */}
              <div className="p-6 rounded-2xl border text-left" style={{
                background: index === 0 ? "rgba(34,197,94,0.05)" : "var(--surface-1)",
                borderColor: index === 0 ? "rgba(34,197,94,0.3)" : "var(--glass-border)"
              }}>
                {/* Header row */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
                      {entry.version}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{
                      background: index === 0 ? "rgba(34,197,94,0.2)" : "var(--surface-2)",
                      color: index === 0 ? "var(--primary)" : "var(--muted)"
                    }}>
                      {entry.badge}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{
                      background: "rgba(59,130,246,0.1)", color: "#60a5fa"
                    }}>
                      {entry.category}
                    </span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--muted)" }}>{entry.date}</span>
                </div>

                {/* Changes list */}
                <ul className="space-y-2">
                  {entry.changes.map((change, ci) => (
                    <li key={ci} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="text-[var(--primary)] font-bold shrink-0">→</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 p-6 rounded-2xl border text-center" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <p className="text-sm font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            Want to be notified when values update?
          </p>
          <a
            href="https://discord.gg/growagarden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
            style={{ background: "#5865F2" }}
          >
            💬 Join the Discord Community →
          </a>
          <p className="text-xs mt-4">
            <Link href="/about" className="text-[var(--primary)] hover:underline">← Back to About Page</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
