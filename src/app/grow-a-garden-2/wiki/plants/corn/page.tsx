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
    a: "Buy the seed from the Seed Shop for 2,500 sheckles. Corn is Rare rarity with about a 25% chance to appear per 5-minute restock — one of the easiest Rare crops to find, so you'll see it within a few shop rotations.",
  },
  {
    q: "How much is Corn worth in GAG2?",
    a: "Corn fruit averages around 34 sheckles per piece, but that number moves with fruit weight and mutations like Golden and Rainbow. Corn is not a jackpot crop — its strength is multi-harvest reliability, not per-fruit value.",
  },
  {
    q: "Is Corn multi-harvest in Grow a Garden 2?",
    a: "Yes. The Corn plant survives harvesting and keeps producing new fruit, which is exactly why it works as a steady background income crop while you wait for rarer seeds to appear in the shop.",
  },
  {
    q: "How do you calculate Corn profit over time?",
    a: "Multiply average fruit value by fruits per harvest and harvests per hour, then extend that over your play session. Because Corn is multi-harvest, its lifetime profit beats many single-harvest crops with higher sticker prices — run the numbers on our crop calculator.",
  },
  {
    q: "Is Corn a good crop in Grow a Garden 2?",
    a: "It is a solid mid-tier crop (C tier on tested-value lists): cheap, easy to find, and multi-harvest. Buy it early for compounding income, but graduate to Epic and Super crops like Mushroom once you can afford them.",
  },
  {
    q: "Should you use Robux seed rolls to get Corn?",
    a: "No — that is one of the most common new-player mistakes. A seed roll costs 69 Robux, while Corn appears naturally in the Seed Shop roughly 25% of the time for just 2,500 sheckles. Save your Robux for crops that are genuinely hard to find.",
  },
  {
    q: "Can you trade Corn with other players?",
    a: "Technically yes, but Corn is a poor trade asset: it's cheap, permanently in the shop rotation, and worth only ~34 sheckles per fruit, so demand is near zero. Before any crop trade, check live prices on our value list so you don't overpay.",
  },
  {
    q: "Does Corn ever leave the Seed Shop?",
    a: "No. Corn is a permanent part of the Rare rotation, so never pay a premium for seeds or fruit — patience and the 5-minute restock timer will always get you Corn at the normal 2,500-sheckle price.",
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
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          Corn is a <strong>Rare, multi-harvest crop</strong> in Grow a Garden 2. Its seed costs <strong>2,500 sheckles</strong> at the
          Seed Shop, and each fruit is worth around <strong>34 sheckles</strong>. Because the plant keeps producing after every
          harvest, Corn is a reliable early-game income crop — cheap, easy to restock, and solid long-term value for new players.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌽 How Do You Get Corn in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Corn seeds cost <strong>2,500 sheckles</strong> from the <strong>Seed Shop</strong>. At <strong>Rare</strong> rarity
            with roughly a <strong>25% chance per 5-minute restock</strong>, Corn is one of the most accessible Rare crops in the
            game — most players see it within a few shop rotations without camping the restock timer. There is no quest, no event,
            and no unlock requirement: if it is in stock, you can buy it.
          </p>
          <p className="mb-4">
            A Robux seed-roll option also exists at <strong>69 Robux per roll</strong>, but it is almost never worth using for Corn.
            Rolling for a 2,500-sheckle seed that shows up naturally a quarter of the time is one of the fastest ways new players
            burn Robux for nothing — check the shop first, wait one or two restocks, and only then consider alternatives.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is Corn Worth?
          </h2>
          <p className="mb-4">
            Corn fruit averages around <strong>34 sheckles</strong> per piece — but treat that as an average, not a fixed price.
            Like every crop in GAG2, fruit value scales with <strong>weight</strong>, and <strong>mutations</strong> such as Golden
            and Rainbow can push individual fruit well above the baseline. Weather events that roll mutations onto growing crops
            are the main way Corn fruit beats its average, so a lucky harvest can surprise you.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> the ~34-sheckle figure comes from tested in-game harvests against live servers, not
            from datamined files or estimates. Your results will vary with fruit weight and mutation luck, so always price Corn
            trades and profit plans around the average rather than a single lucky or unlucky harvest.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 Is Corn Multi-Harvest?
          </h2>
          <p className="mb-4">
            Yes — and that single trait is what makes Corn valuable. The Corn plant <strong>survives every harvest</strong> and keeps
            producing new fruit on the same plant, unlike single-harvest crops that vanish after one collection and force you to
            rebuy seeds. A field of Corn planted once keeps generating income for as long as you leave it running, which makes it
            the classic "plant and forget" background earner of the early game.
          </p>
          <p className="mb-4">
            This is the detail new players most often miss: they compare Corn's 34-sheckle fruit to a pricier single-harvest crop,
            buy the expensive seed, harvest once, and wonder where their money went. Multi-harvest crops win on <strong>lifetime
            profit</strong>, not sticker price — the plant you don't have to rebuy is the plant that compounds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 How Do You Calculate Corn Profit Over Time?
          </h2>
          <p className="mb-4">
            The honest formula is: <strong>average fruit value × fruits per harvest × harvests per hour × hours planted</strong>.
            Corn's per-fruit number looks unimpressive until you run that multiplication — because the plant never needs replanting,
            its lifetime profit beats many single-harvest crops with far higher sticker prices. Plug your own harvest rate into our
            <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold"> crop calculator</Link> to
            see exactly when a Corn field pays for itself and how it scales across a full play session.
          </p>
          <p className="mb-4">
            This is why Corn grades as a <strong>C-tier money crop</strong> on tested-value lists with the note "better as
            multi-harvest": planted early and left running, it compounds into serious capital while you chase rarer seeds. It will
            never beat an <Link href="/grow-a-garden-2/wiki/plants/mushroom" className="text-[var(--primary)] hover:underline font-semibold">Epic Mushroom's</Link> per-fruit
            value — but it costs 6× less and never stops producing. For trading context, compare live crop prices on our
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold"> value list</Link> before
            offering Corn in any deal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📈 When Should You Buy Corn — And When Should You Move On?
          </h2>
          <p className="mb-4">
            <strong>Buy Corn early.</strong> In your first hours, it is the best compounding crop you can afford: cheap seed,
            easy restocks, and a plant that keeps paying you while you do other things. A Corn patch is also naturally <strong>theft-resistant</strong> income — in a game with nighttime stealing, thieves target high-value crops,
            not 34-sheckle corn, so your field is safe while expensive neighbors get raided.
          </p>
          <p className="mb-4">
            <strong>Move on</strong> once you can afford <strong>Epic</strong> seeds. A single
            <Link href="/grow-a-garden-2/wiki/plants/mushroom" className="text-[var(--primary)] hover:underline font-semibold"> Mushroom </Link>
            harvest out-earns a Corn field, and your limited garden space is better spent on higher rarity tiers as your capital
            grows. The common mistake is clinging to Corn too long out of comfort — keep a small patch running in the background
            for passive income, but graduate your main plots upward.
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
