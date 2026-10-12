import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Weather Tracker & Event Guide";
const pageDesc = "Track every Grow a Garden 2 weather event: Rain, Stormy, Blood Moon, Eclipse and more — each event's mutation, multiplier, and how to profit from it.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden weather tracker", "grow a garden 2 weather", "gag2 weather events", "gag2 weather tracker", "grow a garden 2 mutations weather", "eclipse bloom grow a garden 2"],
  alternates: { canonical: getCanonical("/grow-a-garden-2/weather-tracker") },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: "https://growagardencalcs.com/grow-a-garden-2/weather-tracker",
    siteName: "Grow A Garden Calculator",
    type: "website",
  },
};

const weatherEvents = [
  { event: "🌧️ Rain", mutation: "—", mult: "—", detail: "5 minutes. 2× growth speed, no mutation. Best used to rush crops to ripe before a bigger event fires." },
  { event: "⛈️ Stormy / Lightning", mutation: "Electric", mult: "×25", detail: "~2.5 minutes. Each ripe fruit has a ~0.33% chance per strike window to turn Electric." },
  { event: "❄️ Snowfall", mutation: "Frozen", mult: "×14", detail: "~2 minutes. A reliable mid-tier mutation — easy value on high base-price crops." },
  { event: "🌠 Starfall", mutation: "Starstruck", mult: "×50", detail: "~2 minutes. One of the strongest standard events; keep premium crops ripe when it is due." },
  { event: "🌑 Blood Moon", mutation: "Bloodlit", mult: "×60", detail: "~2 minutes. Rare special event — the jackpot most players wait for." },
  { event: "☀️ Sunburst", mutation: "Ignited", mult: "×60", detail: "High-multiplier daytime event. Pairs brutally with already-valuable Super crops." },
  { event: "🌌 Aurora Borealis", mutation: "Aurora", mult: "×40", detail: "Beautiful and profitable. Mid-upper tier mutation for ripe fields." },
  { event: "🌒 Eclipse", mutation: "Eclipsed", mult: "×80", detail: "Triggered by harvesting an Eclipse Bloom (see below). The strongest weather mutation in the game." },
  { event: "🌈 Rainbow", mutation: "Rainbow", mult: "×30", detail: "Also drops a rainbow carpet. Solid multiplier plus a collectible." },
  { event: "🌕 Midas Moon", mutation: "Gold", mult: "×10", detail: "Special case: requires being hit by a meteor, then stealing another player's crop. Thief's jackpot." },
];

const faqs = [
  {
    q: "How does weather work in Grow a Garden 2?",
    a: "Weather events hit every active server at the same time and last a few minutes. Weather-based mutations apply only to crops that are already ripe on your plot during the event — and each fruit can only carry one weather mutation.",
  },
  {
    q: "What is the best weather event in GAG2?",
    a: "Eclipse is the strongest at ×80 (Eclipsed mutation), triggered by harvesting an Eclipse Bloom. Among the regular cycling events, Blood Moon (×60 Bloodlit) and Sunburst (×60 Ignited) are the jackpots to wait for.",
  },
  {
    q: "How do I get the Eclipse Bloom?",
    a: "Grow a fully-grown Sun Bloom and a fully-grown Moon Bloom next to each other to trigger a merge prompt. Merging creates the Eclipse Bloom (Secret rarity) — but both parent plants are permanently consumed. Harvesting the Eclipse Bloom triggers the Eclipse weather event.",
  },
  {
    q: "Do weather mutations stack?",
    a: "No — one weather mutation per fruit. But weather mutations combine with the normal multiplicative stacking of other mutation types, so a weather-mutated crop with additional mutations multiplies out fast.",
  },
  {
    q: "How do players track weather in GAG2?",
    a: "Because events are server-wide and time-limited, experienced players watch community Discord alerts and predictor tools, stay online with ripe premium crops, and plant around forecasted events. Night events add risk — a Bloodlit field at dusk is a thief magnet, so harvest fast.",
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

export default function GAG2WeatherTracker() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
          GAG2 <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Weather Tracker</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
          Every <strong>Grow a Garden 2 weather event</strong>, its mutation and multiplier — and how to be online with ripe
          crops when the big ones fire. Part of the <Link href="/grow-a-garden-2/wiki" className="text-[var(--primary)] hover:underline font-semibold">GAG2 wiki</Link>.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌦️ Why Track Weather?
          </h2>
          <p className="mb-4">
            Weather in GAG2 is <strong>server-wide and time-limited</strong>: when an event fires, it hits every garden in the
            server for a few minutes, then it is gone. Weather-based mutations apply <strong>only to crops already ripe</strong> on
            your plot during the event — and each fruit can carry just one weather mutation. That makes timing everything: the
            players who profit most from a Blood Moon are the ones who were already online with a field of ripe premium crops.
          </p>
          <p className="mb-4">
            This is the player behavior behind weather tracking: community Discord alerts, predictor tools, and planting around
            forecasted events. Note this is the sequel's own weather set — it is separate from the original game's Wet, Shocked
            and Celestial lineup.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            📋 Every Weather Event & Mutation
          </h2>
          <div className="space-y-4">
            {weatherEvents.map((w) => (
              <div key={w.event} className="glass-card-static p-5">
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>{w.event}</h3>
                  <span className="text-sm font-bold" style={{ color: "var(--primary)" }}>
                    {w.mutation}{w.mult !== "—" ? ` ${w.mult}` : ""}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{w.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌒 The Eclipse Bloom Play
          </h2>
          <p className="mb-4">
            The strongest weather event in the game is one you trigger yourself. Grow a <strong>Sun Bloom</strong> (Super rarity,
            ~110M sheckles from the Seed Shop) and a <strong>Moon Bloom</strong> (Super rarity) to full maturity side by side,
            and a merge prompt appears. Merging creates the <strong>Eclipse Bloom</strong> — Secret rarity, averaging ~12,000
            sheckles per fruit — and <strong>harvesting it triggers the Eclipse event</strong>, raining ×80 Eclipsed mutations
            on your garden.
          </p>
          <p className="mb-4">
            The catch: <strong>both parent plants are permanently consumed</strong> by the merge. It is an expensive setup —
            price what the gamble is worth with our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> before
            committing two Super crops to it. And harvest the moment the event ends: an Eclipsed field visible at nightfall is
            the most stealable thing in the game.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎯 Weather Strategy
          </h2>
          <p className="mb-4">
            <strong>Plant around forecasts:</strong> time your planting so premium crops ripen just before high-value events are
            due. <strong>Use Rain deliberately:</strong> its 2× growth speed (no mutation) is perfect for rushing a field to ripe
            right before a Blood Moon or Starfall window. <strong>Stack smart:</strong> weather mutations don't stack with each
            other, but they multiply with your crop's other mutations — a Starstruck (×50) crop with existing mutations is where
            the real money is. Check the math on our <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">mutation guide</Link>.
          </p>
          <p className="mb-4">
            <strong>Respect the night risk:</strong> the sequel's PVP stealing means a freshly-mutated field is also a target.
            The standard pro move is mutate-in-waves and harvest immediately — never leave jackpot crops sitting through a night
            cycle. Our <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold">stock predictor</Link> pairs
            with this page: rare seeds in, weather-boosted harvests out.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ❓ Weather FAQ
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
