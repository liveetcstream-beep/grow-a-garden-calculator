import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "Grow A Garden XP Calculator Status",
  description: "The Grow A Garden XP calculator is not available because verified level thresholds are not in this site's data yet.",
  alternates: { canonical: getCanonical("/xp-calculator") },
  robots: { index: false, follow: true },
};

export default function XpCalculatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
      <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 border"
        style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)", color: "var(--muted)" }}>
        Not available yet
      </p>
      <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
        Grow A Garden XP Calculator
      </h1>
      <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--muted)" }}>
        This page does not currently calculate XP. We do not have verified level thresholds and XP rules in the site's data, so it would be misleading to estimate how many harvests you need.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
        style={{ background: "var(--gradient-1)" }}>
        Browse available calculators →
      </Link>
    </main>
  );
}
