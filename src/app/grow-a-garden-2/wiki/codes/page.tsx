import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "GAG2 Codes – All Active Grow a Garden 2 Codes";
const pageDesc = "All working Grow a Garden 2 codes for October 2026: FREESEED, TEAMGREENBEAN and more. Redeem free seeds and watering cans before they expire.";

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
    a: "Not yet. As of October 2026, no GAG2 code has expired — every code the developers have released still works. That will change eventually, so redeem new codes the day they drop.",
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
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Every active <strong>Grow a Garden 2 code</strong> for October 2026, verified across multiple sources. Redeem them
          for free seeds, seed packs and watering cans — then check the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link> for
          what to do with your head start.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ Active GAG2 Codes (October 2026)
          </h2>
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
            <strong>No expired codes yet.</strong> Every GAG2 code released so far still redeems — but codes are
            time-limited by design, so claim these today rather than next week.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⌨️ How to Redeem Codes
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Launch Grow a Garden 2 on Roblox.</li>
            <li>Click the <strong>Settings gear icon</strong> in the top-left corner.</li>
            <li>Type the code into the code text box — codes are <strong>case-sensitive</strong>.</li>
            <li>Press <strong>Claim</strong>. Rewards appear in your inventory immediately.</li>
          </ol>
          <p className="mb-4">
            New to the sequel? Free seeds from codes compound fast early on: plant them, sell the harvest, and roll the
            profits into better seeds from the shop. Our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">seed stock predictor</Link> shows
            how to catch rare seeds the moment they restock.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🔔 Never Miss a New Code
          </h2>
          <p className="mb-4">
            Developers drop fresh codes through the <strong>official Discord server</strong> and <strong>X account</strong>,
            usually tied to updates, milestones and events — roughly monthly. Weekly admin events also hand out free premium
            items in-game. Bookmark this page: we re-verify every code against multiple sources and update the list when new
            ones drop.
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
