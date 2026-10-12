import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Corn Grow a Garden 2 – Value, Price & Profit Guide";
const pageDesc = "Corn in Grow a Garden 2: 2,500 seed price, Rare rarity, multi-harvest profits, and how to calculate long-term corn earnings.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["corn calculator grow a garden", "corn grow a garden 2", "corn gag2", "corn value grow a garden 2", "grow a garden 2 rare crops", "multi-harvest crops gag2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/corn") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/corn",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get Corn in Grow a Garden 2?",
    a: "Buy the seed from the Seed Shop for 2,500 sheckles. Corn is Rare rarity with about a 25% chance to appear per 5-minute restock — one of the easier Rare crops to find.",
  },
  {
    q: "How much is Corn worth in GAG2?",
    a: "Corn fruit averages around 34 sheckles, scaling with weight and mutations like every crop. It is not a jackpot crop — its strength is multi-harvest reliability, not per-fruit value.",
  },
  {
    q: "Is Corn multi-harvest in Grow a Garden 2?",
    a: "Yes. The Corn plant survives harvesting and keeps producing, which is why it works as a steady background income crop while you wait on rarer seeds.",
  },
  {
    q: "How do you calculate Corn profit over time?",
    a: "Multiply average fruit value by fruits per harvest and harvests per hour, then extend over your play session. Because Corn is multi-harvest, its lifetime profit beats many single-harvest crops with higher sticker prices — run the numbers on our crop calculator.",
  },
  {
    q: "Is Corn a good crop in Grow a Garden 2?",
    a: "It is a solid mid-tier (C tier on tested-value lists): cheap, easy to find, multi-harvest. Buy it early for compounding income, but graduate to Epic and Super crops like Mushroom once you can afford them.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CornGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Corn <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Profit Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Corn</strong> is Grow a Garden 2's workhorse Rare crop — cheap, multi-harvest, and always in the shop rotation.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌽 How to Get Corn
          </h2>
          <p className="mb-4">
            Corn seeds cost <strong>2,500 sheckles</strong> from the <strong>Seed Shop</strong>. At <strong>Rare</strong> rarity
            with roughly a <strong>25% chance per 5-minute restock</strong>, it is one of the most accessible Rare crops — you
            will see it within a few shop rotations without camping. (A Robux seed-roll option also exists: 69 Robux per roll.)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 The Corn Calculator Approach: Profit Over Time
          </h2>
          <p className="mb-4">
            Corn fruit averages only <strong>~34 sheckles</strong> — unimpressive until you factor in <strong>multi-harvest</strong>.
            The plant survives each harvest and keeps producing, so the real calculation is lifetime profit: average fruit value ×
            fruits per harvest × harvests per hour × hours planted. Run your exact numbers on our <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link>.
          </p>
          <p className="mb-4">
            This is why Corn grades as a <strong>C-tier money crop</strong> on tested-value lists with the note "better as
            multi-harvest": planted early and left running, it compounds into serious capital while you chase rarer seeds. It will
            never beat an <Link href="/grow-a-garden-2/wiki/plants/mushroom" className="text-[var(--primary)] hover:underline font-semibold">Epic Mushroom's</Link> per-fruit
            value — but it costs 6× less and never stops producing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📈 When to Buy (and When to Move On)
          </h2>
          <p className="mb-4">
            <strong>Buy Corn early:</strong> it is the best compounding crop you can afford in your first hours. <strong>Move on
            </strong> once you can afford Epic seeds — a single Mushroom harvest out-earns a Corn field. Keep a Corn patch running
            in the background regardless: it is theft-resistant income since thieves target high-value crops, not 34-sheckle corn.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Corn FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card-static p-5">
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
