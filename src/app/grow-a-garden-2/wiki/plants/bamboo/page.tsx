import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Bamboo Grow a Garden 2 – Value, Price & Profit Guide";
const pageDesc = "Bamboo in Grow a Garden 2: 700 seed price, Rare single-harvest crop, mutation farming use, and honest profit math vs multi-harvest crops.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["bamboo grow a garden 2", "bamboo gag", "bamboo gag2", "bamboo value grow a garden 2", "single harvest crops gag2", "mutation farming grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/bamboo") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/bamboo",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you get Bamboo in Grow a Garden 2?",
    a: "Buy the seed from Sam's Seed Shop for 700 sheckles. Bamboo is Rare rarity and appears frequently in the Rare rotation — sources report anywhere from 25% to 80% per 5-minute restock, so it rarely takes more than a few rotations to show up.",
  },
  {
    q: "How much is Bamboo worth in GAG2?",
    a: "Base crop value runs roughly 722–800 sheckles at around 3.77 kg base weight. That is a slim margin over the 700-sheckle seed — the real money comes from mutations, where a heavy or mutated Bamboo sells for far more than its base value.",
  },
  {
    q: "Is Bamboo multi-harvest in Grow a Garden 2?",
    a: "No — this is the key trap. Bamboo is single-harvest: the plant disappears after one collection and you must rebuy the seed. Compare it to multi-harvest crops like Corn before you commit garden space, because the sticker price hides the replant cost.",
  },
  {
    q: "Is Bamboo a good mutation-farming crop?",
    a: "Yes — that is its best use case. Because seeds are cheap and replants are quick, Bamboo is a solid target for rolling weather and event mutations. A Golden, Rainbow, or heavy-weight mutated Bamboo sells for far more than base, so farmers plant it specifically to chase mutation rolls.",
  },
  {
    q: "Is Bamboo profitable in GAG2?",
    a: "Marginally on base stats — roughly 700 in, ~722–800 out — but that's the wrong question. Its value is as cheap mutation-farming fodder. Over the same timeframe, a multi-harvest crop like Corn (2,500 seed, keeps producing) compounds to far more lifetime profit. Run the math on our crop calculator before choosing.",
  },
  {
    q: "Should you use Robux seed rolls to get Bamboo?",
    a: "No. Bamboo appears constantly in the Rare rotation for 700 sheckles — burning 69 Robux per seed roll on a seed this common and this cheap is one of the worst Robux spends in the game. Wait one or two restocks instead.",
  },
  {
    q: "Can you trade Bamboo in GAG2?",
    a: "You can, but base Bamboo has near-zero trade demand — it's permanently in the shop rotation and barely worth more than its seed. Mutated Bamboo is the only version traders want. Check live mutation prices on our value list before any deal.",
  },
  {
    q: "What is Bamboo's stock chance at the Seed Shop?",
    a: "Sources disagree: published figures range from about 25% to 80% per 5-minute restock. What is consistent across sources is that it appears frequently in the Rare rotation — you will not be camping the timer for Bamboo.",
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

export default function BambooGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Bamboo <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Profit Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Bamboo</strong> is Grow a Garden 2's classic beginner trap — a cheap Rare crop whose single-harvest design
          hides its real cost. Its true value is as cheap mutation-farming fodder.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          Bamboo is a <strong>Rare, single-harvest crop</strong> in Grow a Garden 2. Its seed costs
          <strong> 700 sheckles</strong> at <strong>Sam's Seed Shop</strong>, and the crop sells for roughly
          <strong> 722–800 sheckles</strong> at ~3.77 kg base weight. The plant vanishes after one harvest, so base-profit is
          razor thin — but cheap seeds make it one of the best <strong>mutation-farming</strong> targets in the game.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎋 How Do You Get Bamboo in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Bamboo seeds cost <strong>700 sheckles</strong> from <strong>Sam's Seed Shop</strong>. At <strong>Rare</strong> rarity,
            Bamboo appears frequently in the Rare rotation — published stock figures disagree, with sources reporting anywhere from
            <strong> ~25% to ~80% per 5-minute restock</strong>, but every source agrees it shows up often. You will not be camping
            the timer for this one. No quest, no event, no unlock — if it is in stock, you can buy it.
          </p>
          <p className="mb-4">
            <strong>Disclaimer on figures:</strong> where sources disagree on stock chance (and they do, sharply), this guide reports
            the full range rather than a single number. Restock data drifts with update patches, so use the range as a guide and the
            live shop as the truth. Our
            <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold"> stock predictor</Link> can
            help you plan around the 5-minute restock cycle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Is Bamboo Worth — And Why Is the Margin So Thin?
          </h2>
          <p className="mb-4">
            Base Bamboo sells for roughly <strong>722–800 sheckles</strong> at ~3.77 kg base weight — barely above the 700-sheckle
            seed. That is the pain point new players hit first: they see "700 seed, ~800 crop" and think profit, then discover the
            plant is <strong>single-harvest and gone</strong>, forcing a rebuy every cycle. After replanting costs, base Bamboo is
            essentially a break-even crop with wasted garden space.
          </p>
          <p className="mb-4">
            The real money is in <strong>mutations</strong>. Like every crop in GAG2, Bamboo's value scales with weight, and
            weather-system mutations such as Golden and Rainbow push individual crops far above baseline. Because seeds are cheap
            and cycles are short, Bamboo is graded <strong>Tier B on tested lists with the note "mutation farming"</strong> —
            farmers plant it specifically to roll mutations cheaply, not to sell base fruit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 Why Does Single-Harvest Matter So Much?
          </h2>
          <p className="mb-4">
            This is the detail that separates GAG2 farmers from beginners: <strong>harvest type beats sticker price</strong>.
            Bamboo's 700→~800 looks profitable until you realize the plant disappears after one collection. Compare that to
            <Link href="/grow-a-garden-2/wiki/plants/corn" className="text-[var(--primary)] hover:underline font-semibold"> Corn</Link> —
            a 2,500-sheckle seed whose plant <strong>keeps producing after every harvest</strong>. Over the same play session, Corn's
            lifetime profit crushes Bamboo's, even though Corn's per-fruit number is smaller. Multi-harvest crops win on
            <strong> lifetime profit</strong>; single-harvest crops win only when their per-harvest value is high enough to cover
            constant replanting.
          </p>
          <p className="mb-4">
            The classic mistake: filling a whole field with Bamboo because the seed is cheap, harvesting once, and ending the session
            with less capital than a Corn patch started the same hour. Cheap seeds are not cheap profit — always price the replant
            cycle, not the sticker.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🧮 What Is Bamboo's Actual Best Use?
          </h2>
          <p className="mb-4">
            <strong>Mutation farming.</strong> Treat Bamboo as lottery tickets, not income: plant cheap, grow fast, harvest, and
            replant — chasing weather-event mutation rolls on a seed that costs almost nothing. A single Golden or heavy-weight
            Bamboo pays for dozens of failed base harvests. This is why tested-value lists keep Bamboo at Tier B despite its
            break-even base stats: the <strong>expected value of mutation rolls</strong> is the real product.
          </p>
          <p className="mb-4">
            Run your own numbers on our
            <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold"> crop calculator</Link>:
            model Bamboo's per-cycle profit against a multi-harvest alternative over your actual session length, then factor in your
            mutation luck. The calculator settles the Bamboo-vs-Corn argument in about thirty seconds — spoiler: Corn wins on
            reliable income, Bamboo wins only on mutation lottery odds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🚫 Mistakes to Avoid With Bamboo
          </h2>
          <p className="mb-4">
            Three common traps: <strong>one</strong>, never spend <strong>69-Robux seed rolls</strong> on a 700-sheckle seed that
            appears constantly in the shop — that is among the worst Robux spends in the game. <strong>Two</strong>, don't trade
            base Bamboo — it has near-zero demand since it's permanently in rotation and barely clears its seed price; only mutated
            Bamboo is trade-worthy, and even then check live mutation prices on our
            <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold"> value list</Link> first.
            <strong> Three</strong>, don't judge Bamboo by its sticker price — judge it by lifetime profit after replant costs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Bamboo FAQ
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
