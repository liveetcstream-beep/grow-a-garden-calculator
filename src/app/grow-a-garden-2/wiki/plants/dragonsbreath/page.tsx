import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Dragon's Breath Grow a Garden 2 – Cost, Value & Guide";
const pageDesc = "How much does Dragon's Breath cost in GAG2? 90M sheckles, Super crop stats, stock chance, and whether it's worth the grind.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["how much does dragon breath cost", "dragons breath grow a garden 2", "dragons breath gag2", "super crops grow a garden 2", "dragons breath seed price", "90m crop gag2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/plants/dragonsbreath") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/plants/dragonsbreath",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How much does Dragon's Breath cost in Grow a Garden 2?",
    a: "90,000,000 sheckles from Sam's Seed Shop. A ~1,499 Robux seed-roll option is also reported, but sources disagree on whether it's always available — treat the 90M sheckle price as the confirmed cost and the Robux route as unconfirmed.",
  },
  {
    q: "Can you buy Dragon's Breath with Robux?",
    a: "Some sources report a ~1,499 Robux option, but it isn't consistently documented across patches. Don't count on it — plan around the 90M sheckle shop price, and verify in-game before assuming the Robux route exists right now.",
  },
  {
    q: "Where do you find Dragon's Breath in the Seed Shop?",
    a: "Sam's Seed Shop, in the Super tier — but with a stock chance under 0.4% per restock, it can be absent for very long stretches. Watch the shop with our stock predictor and buy instantly when it appears; hesitation means missing it for weeks.",
  },
  {
    q: "Is Dragon's Breath multi-harvest?",
    a: "Yes. The plant survives every harvest and keeps producing, which is a major part of its 90M justification — a single-harvest crop at this price would be nearly impossible to profit from.",
  },
  {
    q: "What is Dragon's Breath worth per fruit?",
    a: "Tested figures put base crop value around 3,068–3,400 sheckles at roughly 7.19 kg base weight. Individual harvests vary with fruit weight and mutations — run your numbers through our crop calculator instead of treating the range as exact.",
  },
  {
    q: "Is Dragon's Breath better than Moon Bloom or Sun Bloom?",
    a: "They're the three headline Super crops, and tested lists put all of them at Tier S. Dragon's Breath is graded 'profit + defense' — it doubles as a defensive plant for your garden. Which is 'best' depends on your build: compare all three on stats and pick for your strategy, not for hype.",
  },
  {
    q: "Why does Dragon's Breath never appear in shop stock?",
    a: "Because its per-restock stock chance is under 0.4% — the single biggest pain point of this crop. It isn't bugged; the game just rarely offers it. Track restocks with the stock predictor rather than camping manually, and have 90M liquid when it finally shows.",
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

export default function DragonsBreathGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Dragon's Breath <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cost & Value Guide</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          <strong>Dragon's Breath</strong> is one of GAG2's three headline <strong>Super crops</strong> — a 90-million-sheckle, multi-harvest profit machine that doubles as a defensive plant.
          Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
          Dragon's Breath costs <strong>90,000,000 sheckles</strong> in Sam's Seed Shop in Grow a Garden 2 (a ~1,499 Robux option is
          also reported). This <strong>Super, multi-harvest crop</strong> produces fruit worth around <strong>3,068–3,400 sheckles</strong> at
          ~7.19 kg base weight, but its stock chance is under <strong>0.4% per restock</strong>, so it can vanish from the shop for
          very long stretches.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            💰 How Much Does Dragon's Breath Cost?
          </h2>
          <p className="mb-4">
            The confirmed price is <strong>90,000,000 sheckles</strong> from <strong>Sam's Seed Shop</strong> — the largest shop price
            of any standard crop in the game. A <strong>~1,499 Robux</strong> purchase option is also reported by some sources, but
            <strong> this is unconfirmed across patches</strong>: treat the Robux route as a rumor, not a plan, and verify in-game
            before counting on it.
          </p>
          <p className="mb-4">
            <strong>What 90M really means:</strong> this is an endgame purchase. Most players should build capital through
            <strong> Epic and Legendary multi-harvest crops</strong> first — jumping straight to Dragon's Breath means sinking your
            entire bankroll into one seed and praying it appears in stock. The players who own Dragon's Breath got rich first and
            bought it second.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📦 Where Do You Buy It — And Why Is It Never in Stock?
          </h2>
          <p className="mb-4">
            Dragon's Breath lives in the <strong>Super tier of Sam's Seed Shop</strong> — but "lives" is generous. Its stock chance is
            <strong> under 0.4% per restock</strong>, which means it can be absent for very long stretches. This is not a bug and it
            isn't bad luck: the game simply almost never offers it. Players who camp the shop manually burn out; the sustainable
            approach is tracking restocks with our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">stock predictor</Link> and
            keeping <strong>90M liquid</strong> so you can buy the instant it appears.
          </p>
          <p className="mb-4">
            <strong>The real cost isn't just 90M — it's 90M sitting ready.</strong> If Dragon's Breath finally stocks while your money
            is tied up in crops and pets, you miss it for another long stretch. Endgame players keep a dedicated 90M reserve. And
            note: there is <strong>no Dragon's Breath equivalent in the original Grow a Garden</strong>, so don't import expectations
            (or prices) from GAG1 guides — this crop only exists in the sequel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📊 Is Dragon's Breath Worth 90 Million Sheckles?
          </h2>
          <p className="mb-4">
            On paper, yes — for the right player. It's <strong>multi-harvest</strong>, so the plant survives every collection and
            keeps producing (a single-harvest crop at this price would be nearly impossible to profit from). Tested in-game harvests
            put base crop value around <strong>3,068–3,400 sheckles</strong> at roughly <strong>7.19 kg base weight</strong>, and
            tested-value lists grade it <strong>Tier S</strong> with the note <strong>"profit + defense"</strong> — it doubles as a
            <strong> defensive plant</strong> for your garden, adding utility beyond raw sheckles.
          </p>
          <p className="mb-4">
            <strong>Methodology note:</strong> the value range comes from tested live-server harvests; individual fruit varies with
            weight, and mutations (Golden at 15x, Rainbow, weather-event rolls) move results significantly — plug your own numbers
            into our <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> rather
            than treating the range as exact. It's one of the <strong>three headline Super crops</strong> alongside
            <Link href="/grow-a-garden-2/wiki/plants/moonbloom" className="text-[var(--primary)] hover:underline font-semibold"> Moon Bloom</Link> and
            <Link href="/grow-a-garden-2/wiki/plants/sunbloom" className="text-[var(--primary)] hover:underline font-semibold"> Sun Bloom</Link> —
            all Tier S, all endgame, each with its own strengths. Compare all three before committing 90M to one.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ Pain Points: The 90M Commitment and Night Theft
          </h2>
          <p className="mb-4">
            <strong>Committing 90M is the pain point</strong> — it's the single biggest sheckle decision most players will ever make.
            Buying too early means an empty garden and a recovery grind measured in weeks. The disciplined route: build via Epic and
            Legendary crops until 90M is a comfortable fraction of your net worth, not your whole bankroll.
          </p>
          <p className="mb-4">
            <strong>Protect your investment.</strong> A mutated Dragon's Breath left unharvested overnight is a <strong>prime night-theft
            target</strong> — thieves scan for the highest-value fruit on the map, and your 90M crop tops that list. Harvest before
            logging off, and don't leave Golden or Rainbow-mutated fruit sitting out as a billboard. The crop that made you rich is
            the crop everyone else wants to steal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Dragon's Breath FAQ
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
