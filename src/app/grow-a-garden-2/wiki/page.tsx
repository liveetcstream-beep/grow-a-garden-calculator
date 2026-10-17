import type { Metadata } from "next";
import Link from "next/link";
import { getCanonical } from "@/lib/canonical";

const pageTitle = "Grow a Garden 2 Wiki – Codes, Plants, Pets & Guides";
const pageDesc = "The Grow a Garden 2 wiki: redeem codes, plant and pet guides, weather tracker, mutations, night stealing and guilds. Updated for 2026.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ["grow a garden 2 wiki", "gag2 wiki", "grow a garden 2 codes", "grow a garden 2 plants", "grow a garden 2 pets", "grow a garden 2 weather", "grow a garden 2 mechanics", "grow a garden 2 stealing", "grow a garden 2 defenses", "gag2 guide"],
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
    q: "Where is the Grow a Garden 2 wiki?",
    a: "You are on it. This wiki covers every Grow a Garden 2 system: redeem codes, plants, pets, weather, mutations, night stealing, defenses and guilds. Use the index below to jump to any guide.",
  },
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

const indexCards = [
  {
    href: "/grow-a-garden-2/wiki/codes",
    icon: "🎟️",
    title: "Redeem Codes",
    desc: "Every active Grow a Garden 2 code, what each one gives, and how to redeem before they expire.",
  },
  {
    href: "/grow-a-garden-2/weather-tracker",
    icon: "🌦️",
    title: "Weather Tracker",
    desc: "How the GAG2 weather cycle works, which weather boosts mutations, and when to plant for max value.",
  },
  {
    href: "/grow-a-garden-2/stock-predictor",
    icon: "🌱",
    title: "Seed Stock Predictor",
    desc: "Predict seed shop restocks and never miss rare seeds again.",
  },
  {
    href: "/mutation-guide",
    icon: "✨",
    title: "Mutation Guide",
    desc: "All 172 mutations, their multipliers, and how stacking works in both games.",
  },
  {
    href: "/value-list",
    icon: "💎",
    title: "Value List",
    desc: "Live trading values for pets and crops so you never overpay.",
  },
  {
    href: "/grow-a-garden-2",
    icon: "🗺️",
    title: "GAG2 Beginner Guide",
    desc: "New to the sequel? Start with the full Grow a Garden 2 guide hub.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/moonbloom",
    icon: "🌙",
    title: "Moon Bloom Guide",
    desc: "Super crop: price, stock odds, value, and the Eclipse Bloom merge.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/sunbloom",
    icon: "☀️",
    title: "Sun Bloom Guide",
    desc: "The 110M Super crop — how to get it and merge it into Eclipse Bloom.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/mushroom",
    icon: "🍄",
    title: "Mushroom Guide",
    desc: "Epic S-tier money crop: 15K seed, ~13K per fruit. Price and strategy.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/corn",
    icon: "🌽",
    title: "Corn Profit Guide",
    desc: "Rare multi-harvest workhorse: price, value, and profit-over-time math.",
  },
  {
    href: "/grow-a-garden-2/wiki/pets/raccoon",
    icon: "🦝",
    title: "Raccoon Pet Guide",
    desc: "The night-thief pet: how to get it, its steal ability, and counters.",
  },
  {
    href: "/grow-a-garden-2/wiki/pets/bunny",
    icon: "🐰",
    title: "Bunny Pet Guide",
    desc: "How much is the Bunny worth? Price, +5 walk speed, and trade value.",
  },
  {
    href: "/grow-a-garden-2/wiki/pets/rainbowturtle",
    icon: "🌈",
    title: "Rainbow Turtle Guide",
    desc: "+30 backpack slots: Rainbow Turtle spawn, stacking, and trade value.",
  },
  {
    href: "/grow-a-garden-2/wiki/pets/dragonfly",
    icon: "✨",
    title: "Golden Dragonfly Guide",
    desc: "The 9M Mythic pet: 2x Gold mutation chance, value, and how to get it.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/bamboo",
    icon: "🎋",
    title: "Bamboo Guide",
    desc: "Rare 700-sheckle single-harvest crop: value, mutation farming, profit math.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/sunflower",
    icon: "🌻",
    title: "Sunflower Guide",
    desc: "Legendary 5M crop: price, harvest-type dispute, and profit vs Cherry.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/ghostpepper",
    icon: "🌶️",
    title: "Ghost Pepper Guide",
    desc: "Mythic pack-only crop: 1% odds, Robux costs, plant size, and defense use.",
  },
  {
    href: "/grow-a-garden-2/wiki/plants/dragonsbreath",
    icon: "🐉",
    title: "Dragon's Breath Guide",
    desc: "How much does Dragon's Breath cost? 90M Super crop stats and strategy.",
  },
  {
    href: "/grow-a-garden-2/trades",
    icon: "🤝",
    title: "Trading Guide",
    desc: "How trading works in GAG2: tickets, the trade window, anti-scam rules.",
  },
];

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
          Welcome to the <strong>Grow a Garden 2 wiki</strong> — every mechanic in the sequel, explained: redeem codes,
          plants, pets, weather and mutations, night stealing, defenses, the day-night economy, guilds and the central hub.
          Part of our <Link href="/grow-a-garden-2" className="text-[var(--primary)] hover:underline font-semibold">Grow a Garden 2 guide hub</Link>.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mt-4 font-medium" style={{ color: "var(--foreground)" }}>
          The Grow a Garden 2 wiki is the complete GAG2 guide index: redeem codes, plant and pet guides, weather and
          mutation trackers, seed stock prediction, trading values, night-stealing PVP tactics, garden defenses, and guild
          play. Every guide is tested in-game and updated for the 2026 season.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {indexCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="glass-card-static p-5 hover:-translate-y-0.5 transition-transform"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <h2 className="text-base font-bold mb-1" style={{ color: "var(--foreground)" }}>{card.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{card.desc}</p>
          </Link>
        ))}
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌙 What Is Night Stealing (PVP) in Grow a Garden 2?
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
          <p className="mb-4">
            <strong>Is stealing griefing, or part of the game?</strong> It is part of the game by design — the entire
            defense layer (walls, traps, defensive plants, gear) exists because raiding is expected. Treat night like a
            second economy: either you raid, or you prepare for raiders. Either way, never leave a jackpot crop
            unharvested at dusk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🛡️ How Do I Defend My Garden Against Night Thieves?
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
            🌦️ Which Weather and Mutations Boost Crop Value the Most?
          </h2>
          <p className="mb-4">
            Weather effects and <strong>plant mutations</strong> return from the original and work the same way: mutations
            multiply a crop's base value and <strong>stack multiplicatively</strong>. A ×20 and a ×50 mutation on one crop
            means ×1,000 value. High-tier mutations like Golden and Rainbow are the biggest value levers in the game — and
            the biggest theft magnets. The full multiplier list lives in our <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">mutation guide</Link>.
          </p>
          <p className="mb-4">
            The sequel twist is that mutations now paint a target on your garden. A rainbow-mutated field visible at dusk
            is an invitation. Experienced players mutate in waves and harvest immediately, minimizing the window their
            jackpot crops sit exposed overnight. Our <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker guide</Link> explains
            which weather to plant around for the best mutation odds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🌱 How Do I Get Rare Seeds and Build a Profitable Farm?
          </h2>
          <p className="mb-4">
            Every GAG2 fortune starts in the <strong>Seed Shop</strong>. Rare and higher-rarity seeds appear in its rotating
            stock, and the best drops sell out fast — watch the restock timers and buy the moment premium seeds appear. Our
            <Link href="/grow-a-garden-2/stock-predictor" className="text-[var(--primary)] hover:underline font-semibold"> seed stock predictor</Link> page
            breaks down the rotation strategy so you stop missing restocks.
          </p>
          <p className="mb-4">
            What you plant matters as much as when. <strong>Moon Bloom</strong> and <strong>Sun Bloom</strong> are the
            sequel's headline Super crops — Sun Bloom sits at the 110M tier — and the two can merge into Eclipse Bloom.
            <strong> Mushroom</strong> is an Epic S-tier money crop (15K seed, ~13K per fruit), while <strong>Corn</strong> is
            the reliable Rare multi-harvest workhorse that pays you back again and again. Read the individual guides — <Link href="/grow-a-garden-2/wiki/plants/moonbloom" className="text-[var(--primary)] hover:underline font-semibold">Moon Bloom</Link>, <Link href="/grow-a-garden-2/wiki/plants/sunbloom" className="text-[var(--primary)] hover:underline font-semibold">Sun Bloom</Link>, <Link href="/grow-a-garden-2/wiki/plants/mushroom" className="text-[var(--primary)] hover:underline font-semibold">Mushroom</Link>, <Link href="/grow-a-garden-2/wiki/plants/corn" className="text-[var(--primary)] hover:underline font-semibold">Corn</Link> —
            before committing your sheckles.
          </p>
          <p className="mb-4">
            Multi-harvest crops are a beginner's best friend: one planting, many payouts. Price every harvest against its
            seed cost with our <Link href="/" className="text-[var(--primary)] hover:underline font-semibold">crop calculator</Link> before
            expanding your farm.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🐾 Which Pets Are Worth Getting in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Pets in GAG2 are more than companions — they carry abilities that change how you farm and raid. The <strong>Raccoon</strong> is
            the most talked-about pet in the sequel: a night-thief specialist with a steal ability that turns the tables on
            raiders. Our <Link href="/grow-a-garden-2/wiki/pets/raccoon" className="text-[var(--primary)] hover:underline font-semibold">Raccoon pet guide</Link> covers
            how to get it, how its ability works, and the counters that stop it.
          </p>
          <p className="mb-4">
            The <strong>Bunny</strong> is the everyday workhorse — +5 walk speed makes farming faster, and it holds real
            trade value. Before you buy, hatch, or trade for any pet, check its current price on the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> and
            run the deal through the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> —
            pet values swing with demand, and overpaying is the most common way players waste sheckles. See the <Link href="/grow-a-garden-2/wiki/pets/bunny" className="text-[var(--primary)] hover:underline font-semibold">Bunny pet guide</Link> for
            full pricing detail.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🏰 What Is the Central Hub, and How Do Guilds Work?
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
            🤝 How Does Trading Work in Grow a Garden 2?
          </h2>
          <p className="mb-4">
            Trading in GAG2 runs through <strong>trade tickets</strong> and the official <strong>trade window</strong>, with
            anti-scam rules built into the exchange. Our <Link href="/grow-a-garden-2/trades" className="text-[var(--primary)] hover:underline font-semibold">trading guide</Link> walks
            through tickets, the trade window flow, and the red flags to watch for before you confirm any deal.
          </p>
          <p className="mb-4">
            <strong>Are online GAG2 value lists accurate?</strong> Many are not. Copied and outdated value lists are one of
            the biggest causes of wasted sheckles in the community — inflated numbers push players into bad trades. Always
            cross-check pet and crop prices on our <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">live value list</Link> and
            price the deal in the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> before
            accepting. Never trade outside the official trade window, no matter what anyone offers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            🎟️ How Do Redeem Codes and Admin Abuse Events Work?
          </h2>
          <p className="mb-4">
            Developers drop <strong>monthly redeem codes</strong> for free seeds, watering cans and crates — redeem them
            immediately, as they expire. Weekly <strong>admin abuse events</strong> (staff-run item drops) carry over from
            the original game's community tradition and are the best source of free premium items. Our <Link href="/grow-a-garden-2/wiki/codes" className="text-[var(--primary)] hover:underline font-semibold">GAG2 codes page</Link> tracks
            every active code so you never miss one.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ✅ How We Test and Verify This Wiki
          </h2>
          <p className="mb-4">
            Every value, timer and mechanic on this wiki is <strong>tested in the live game</strong> — not copied from other
            lists. When a patch changes a seed price, a mutation multiplier or a pet ability, we re-test and update the
            affected guides. That is why our pages carry update notes: you should always be able to see what changed and when.
          </p>
          <p className="mb-4">
            A note on trading values: pet and crop prices move with player demand, so the value list is a tested range, not
            a fixed promise. If a deal looks too good compared to the list, price it twice — once against the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link>,
            once in the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> — before accepting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
            ⚠️ GAG1 vs GAG2 Confusion, Outdated Guides, and Fake Value Lists
          </h2>
          <p className="mb-4">
            The most common reason players lose progress in the sequel is <strong>playing GAG2 like it is GAG1</strong>. The
            original had no stealing, no defenses and no day-night risk. Guides written for the original — including old
            2025 articles — will tell you to leave crops growing overnight. In GAG2, that is an invitation to thieves. If a
            guide does not mention night stealing, it is not a GAG2 guide.
          </p>
          <p className="mb-4">
            The second trap is <strong>expired codes and stale value lists</strong>. Redeem codes die fast, and many "value
            list" sites copy each other without testing — which is how players overpay for pets and crops. Use this wiki's
            <Link href="/grow-a-garden-2/wiki/codes" className="text-[var(--primary)] hover:underline font-semibold"> codes page</Link> for codes that are
            actually live, and the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> plus <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> for
            trades — and never spend sheckles based on a screenshot someone posted in a trading server.
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
