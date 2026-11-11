import type { Metadata } from "next";
import Link from "next/link";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";
import { PETS } from "@/data/pets";
import { formatDataUpdatedAt } from "@/lib/contentDates";

const title = "Grow A Garden Calculator Data Update Dates";
const description = "See when the crop, mutation and pet data files used by the Grow A Garden calculators were last changed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/changelog" },
  openGraph: {
    title,
    description,
    url: "https://growagardencalcs.com/changelog",
    siteName: "Grow A Garden Calculator",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
    type: "website",
  },
};

export default function ChangelogPage() {
  const updateData = [
    { label: "Crop values", count: CROPS.length, date: formatDataUpdatedAt("crops"), href: "/value-list" },
    { label: "Mutation values", count: MUTATIONS.length, date: formatDataUpdatedAt("mutations"), href: "/mutation-guide" },
    { label: "Pet values", count: PETS.length, date: formatDataUpdatedAt("pets"), href: "/value-list" },
  ];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: "https://growagardencalcs.com/changelog",
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "var(--background)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-8" style={{ color: "var(--muted)" }}>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: "var(--foreground)" }}>Data updates</span>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--primary)" }}>Dataset change dates</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            Data update dates
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            The dates below show when the corresponding data files were last changed in the site's repository. They do not claim that a Roblox patch was tested, that every value was independently verified, or that player trading prices are current.
          </p>
        </header>

        <section aria-label="Dataset dates" className="space-y-4 mb-10">
          {updateData.map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left"
              style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
              <div>
                <h2 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>{item.label}</h2>
                <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{item.count} records currently stored on the site</p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{item.date}</p>
                <Link href={item.href} className="text-xs hover:underline" style={{ color: "var(--muted)" }}>Browse {item.label.toLowerCase()} →</Link>
              </div>
            </div>
          ))}
        </section>

        <section className="p-6 rounded-2xl border mb-8" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}>
          <h2 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>How to report a correction</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            If you spot a value that looks wrong, send us the page URL, the value shown, and any supporting source or screenshot using the <Link href="/contact" className="text-[var(--primary)] hover:underline font-semibold">contact page</Link>.
          </p>
        </section>

        <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
          See the calculation approach on the <Link href="/about#methodology" className="text-[var(--primary)] hover:underline font-semibold">About and methodology page</Link>.
        </p>
      </div>
    </main>
  );
}
