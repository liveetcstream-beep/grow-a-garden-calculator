import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Wiki | Crops, Pets & Mechanics";
const pageDesc = "GAG2 wiki: every mechanic explained — night stealing, defenses, weather, mutations, guilds, shops and codes. Updated for 2026.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden 2 wiki", "gag2 wiki", "grow a garden 2 mechanics", "grow a garden 2 stealing", "grow a garden 2 defenses", "gag2 guide"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/wiki") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/wiki",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const faqs = [
  {
    q: "How does stealing work in Grow a Garden 2?",
    a: "At night, you can leave your garden and enter other players' plots to take their crops. Defenses — walls, traps, defensive plants and gear — can block or punish thieves. Successful raiders keep the stolen harvest; victims lose it. Harvest valuables before nightfall to stay safe.",
  },
  {
    q: "What is the best defense against night thieves?",
    a: "Layer your defenses: walls to slow intruders, traps near high-value plots, and defensive plants that actively fight back. Some crops double as defensive tools, so your farm layout itself is part of your security.",
  },
  {
    q: "Do mutations exist in Grow a Garden 2?",
    a: "Yes. Weather effects and plant mutations return in the sequel and work like the original — they multiply crop values and stack multiplicatively. The difference is risk: a heavily mutated crop is also the most attractive target for night thieves.",
  },
  {
    q: "What do guilds do in GAG2?",
    a: "Guilds are player groups that earn weekly rewards based on collective activity. They are also the unit for organized night raids — a coordinated guild can strip a poorly defended garden fast, and defend its own members' plots.",
  },
  {
    q: "How do I get rare seeds in Grow a Garden 2?",
    a: "Rare seeds appear in the seed shop's rotating stock. Watch restock timers closely and buy the moment premium seeds appear — they sell out fast. Our stock predictor page explains the rotation strategy.",
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

export default function GAG2Wiki() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          Grow a Garden 2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Wiki</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Every mechanic in the sequel, explained: night stealing, defenses, the day-night economy, weather and mutations,
          guilds, the central hub and codes. Part of our <Link href="/grow-a-garden-2" className="text-[var(--primary)] hover:underline font-semibold">Grow a Garden 2 guide hub</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌙 Night Stealing (PVP)
          </h2>
          <p className="mb-4">
            The defining mechanic of the sequel. When night falls, the game becomes competitive: you can travel to other
            players' gardens and <strong>steal their crops</strong>. Theft is not free — gardens can be fortified, and
            defensive plants fight back. The meta revolves around a simple question: <em>is this harvest worth more in my
            inventory tonight, or in the ground until morning?</em>
          </p>
          <p className="mb-4">
            <strong>Raiding tips:</strong> scout during the day for gardens with visible high-value crops and weak walls;
            raid with guildmates so one player can distract defenses; prioritize mutated crops, which carry the biggest
            multipliers. <strong>Defense tips:</strong> harvest everything valuable before dusk; ring your best plots with
            traps; plant defensive crops along likely entry paths; invest in gear that boosts your garden's security rating.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ Defenses & Traps
          </h2>
          <p className="mb-4">
            Defense in GAG2 is layered. <strong>Walls</strong> slow intruders and funnel them into kill zones.
            <strong> Traps</strong> punish anyone crossing your best plots. <strong>Defensive plants</strong> are the
            sequel's signature addition — living crops that actively attack thieves. And some regular crops double as
            defensive tools, so farm layout is a strategic choice, not decoration.
          </p>
          <p className="mb-4">
            Spend defense budget proportionally: a garden full of cheap crops needs little protection, but a single
            heavily-mutated harvest can be worth millions — protect it like it. Check what that harvest is actually worth
            with our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> before
            deciding how much defense to buy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌦️ Weather & Mutations
          </h2>
          <p className="mb-4">
            Weather effects and <strong>plant mutations</strong> return from the original and work the same way: mutations
            multiply a crop's base value and <strong>stack multiplicatively</strong>. A ×20 and a ×50 mutation on one crop
            means ×1,000 value. The full multiplier list lives in our <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">mutation guide</Link>.
          </p>
          <p className="mb-4">
            The sequel twist is that mutations now paint a target on your garden. A rainbow-mutated field visible at dusk
            is an invitation. Experienced players mutate in waves and harvest immediately, minimizing the window their
            jackpot crops sit exposed overnight.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🏰 Central Hub, Shops & Guilds
          </h2>
          <p className="mb-4">
            Gardens now <strong>surround a central hub</strong> holding the important shops and services — a big change from
            the original's row layout. Learn the hub layout early: fast access to the seed shop during restocks and the gear
            shop before nightfall wins games.
          </p>
          <p className="mb-4">
            <strong>Guilds</strong> pay weekly rewards for collective activity and are the backbone of organized play. A
            solo player can farm fine, but guilds dominate night raids and can coordinate garden defense across members.
            Join an active guild as soon as you can.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ Codes & Events
          </h2>
          <p className="mb-4">
            Developers drop <strong>monthly redeem codes</strong> for free seeds, watering cans and crates — redeem them
            immediately, as they expire. Weekly <strong>admin abuse events</strong> (staff-run item drops) carry over from
            the original game's community tradition and are the best source of free premium items. Watch the game's social
            channels and redeem codes the hour they release.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ GAG2 Wiki FAQ
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
