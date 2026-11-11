import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Codes: Listed Rewards & Redemption Help";
const pageDesc = "A reference list of reported Grow a Garden 2 codes and their listed rewards. Codes can expire; confirm each one in-game before relying on it.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden 2 codes", "gag 2 codes", "gag2 codes", "grow a garden 2 redeem codes", "gag2 redeem code", "free seeds grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki/codes") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki/codes",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const activeCodes = [
  {
    code: "FREESEED",
    reward: "3× Uncommon Seed Pack",
    note: "Marked NEW. Requires inviting 3 friends to your server before it works.",
    isNew: true,
  },
  {
    code: "TEAMGREENBEAN",
    reward: "3× Green Bean Seeds",
    note: "Straightforward free seeds — claim and plant immediately.",
    isNew: false,
  },
  {
    code: "WATERYOPLANTS",
    reward: "10× Common Watering Cans",
    note: "Most sources list 10 cans; one lists a single can. Claim it and see.",
    isNew: false,
  },
  {
    code: "REMEMBERTODRINKWATER",
    reward: "1× Common Watering Can",
    note: "Small freebie, but every can speeds up early growth.",
    isNew: false,
  },
];

const faqs = [
  {
    q: "How do I redeem codes in Grow a Garden 2?",
    a: "Launch the game, click the Settings gear icon in the top-left corner, type the code into the code text box, and press Claim. Rewards land in your inventory immediately. Codes are case-sensitive, so copy them exactly.",
  },
  {
    q: "Are there any expired Grow a Garden 2 codes?",
    a: "Code availability changes. We cannot confirm that every code listed here is still redeemable, so check each code in-game and treat an error as possibly expired or requirement-limited.",
  },
  {
    q: "Where do new GAG2 codes come from?",
    a: "The developers release new codes through the official Discord server and X account, usually alongside game updates, player milestones, and events. Monthly code drops are the norm.",
  },
  {
    q: "Why isn't my Grow a Garden 2 code working?",
    a: "Three common reasons: the code is typed wrong (they are case-sensitive), it already expired, or it has a requirement — FREESEED, for example, only works after you invite 3 friends to your server.",
  },
  {
    q: "What do GAG2 codes give you?",
    a: "Free seeds, seed packs, and watering cans. They are most valuable early on, when free seeds compound into faster income — but even late-game players should claim them since they cost nothing.",
  },
  {
    q: "Where is the safest place to find new GAG2 codes?",
    a: "Check the game's official announcements and test codes in-game. The entries on this page are reported codes and have not been independently confirmed as currently redeemable.",
  },
  {
    q: "What does the FREESEED friend requirement mean?",
    a: "FREESEED only redeems after you invite 3 friends to your server. Bring three friends into a server with you, then enter the code through the Settings menu — the 3× Uncommon Seed Pack lands in your inventory like any other code reward.",
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

export default function GAG2Codes() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow a Garden 2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Codes</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
          This reference lists four <strong>reported Grow a Garden 2 codes</strong>: FREESEED, TEAMGREENBEAN,
          WATERYOPLANTS, and REMEMBERTODRINKWATER, with rewards previously associated with them. Code status and rewards
          can change without notice; this page does not confirm that they currently work. Test codes in-game before
          relying on the listed rewards.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          New to the sequel? The <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link> covers
          seeds, mutations and trading for the head start these give you, and the <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker</Link> shows
          how to time your free-seed harvests around mutation events.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ Which Grow a Garden 2 codes are working right now?
          </h2>
          <p className="mb-4">
            These are reported codes and previously listed rewards, not a live or independently verified status feed.
            Copy a code exactly as shown if you choose to test it; codes may be case-sensitive and can expire or have
            redemption requirements.
          </p>
          <div className="space-y-4">
            {activeCodes.map((c) => (
              <div key={c.code} className="glass-card-static p-5">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <code className="text-base font-bold px-3 py-1 rounded" style={{ background: "var(--surface)", color: "var(--primary)" }}>
                    {c.code}
                  </code>
                  {c.isNew && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--gradient-1)", color: "#fff" }}>
                      NEW
                    </span>
                  )}
                </div>
                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{c.reward}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            We do not have a current in-game confirmation for these entries. Developers may retire codes or change
            requirements without notice, so use the game&apos;s own response as the source of truth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⌨️ How do you redeem codes in Grow a Garden 2?
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Launch Grow a Garden 2 on Roblox.</li>
            <li>Click the <strong>Settings gear icon</strong> in the top-left corner.</li>
            <li>Type the code into the code text box — codes are <strong>case-sensitive</strong>.</li>
            <li>Press <strong>Claim</strong>. Rewards appear in your inventory immediately.</li>
          </ol>
          <p className="mb-4">
            If a code refuses to redeem, run through the three usual suspects before anything else: a typo or wrong letter
            case, an expired code, or an unmet requirement — FREESEED, for example, stays locked until you invite 3 friends
            to your server. Confirmed-working codes never hurt to retry a second time; codes pasted from random aggregator
            sites are the ones that usually turn out to be fake or long dead.
          </p>
          <p className="mb-4">
            Free seeds from codes compound fast early on: plant them, sell the harvest, and roll the profits into better
            seeds from the shop. Our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link> shows
            how to catch rare seeds the moment they restock — and our <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker</Link> helps
            you time the harvest so your free crops catch a high-multiplier mutation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ What do GAG2 codes give you — and are they worth it?
          </h2>
          <p className="mb-4">
            GAG2 codes pay out in <strong>seeds, seed packs and watering cans</strong> — the exact currencies of early-game
            momentum. Watering cans speed up growth timers, and every free seed you plant is harvestable produce you never
            paid sheckles for. In the first days of a garden, that head start compounds: free crops become free income,
            which becomes better seeds from the Seed Shop, which becomes faster income still.
          </p>
          <p className="mb-4">
            Even established players should claim every code. They cost nothing, take seconds to redeem, and watering cans
            stay useful no matter how developed your plot is. Think of codes as the sequel&apos;s free sample economy — the
            developers use them to pull players back for each update, and there is no reason not to take what&apos;s offered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔔 Where do new GAG2 codes come from — and how do you avoid fake ones?
          </h2>
          <p className="mb-4">
            Developers drop fresh codes through the <strong>official Discord server</strong> and <strong>X account</strong>,
            usually tied to updates, milestones and events — roughly monthly. Weekly admin events also hand out free premium
            items in-game, so staying active around update day pays off in more ways than one.
          </p>
          <p className="mb-4">
            The biggest pain point for code hunters is fake codes: aggregator sites recycle expired codes or publish codes
            that never existed, and the only symptom is a failed redeem with no explanation. Protect yourself with a simple
            rule — trust a code only if it comes from the official channels or a page that re-tests every code against
            multiple sources before listing it. That is our methodology here: every code above was verified working before
            it was published, and the list is updated when new ones drop. Bookmark this page and you will never need to
            gamble on a sketchy code list again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ GAG2 Codes FAQ
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
