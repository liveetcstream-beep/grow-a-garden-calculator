import Link from "next/link";
import type { Crop } from "@/data/crops";

const faqItems = [
  {
    question: "What does this Grow A Garden calculator do?",
    answer: <>It provides fan-made <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline">crop value calculations</Link>, <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline">pet estimates</Link>, mutation multiplier lookups, a <Link href="/value-list" className="text-[var(--primary)] hover:underline">stored value list</Link> and a <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline">trade comparison tool</Link>. It is independent of Roblox and is not an official tool.</>,
  },
  {
    question: "How does the crop value calculator estimate a harvest?",
    answer: <>This site&apos;s model multiplies stored base price by weight squared, selected mutation multipliers, the entered friend boost and quantity. For example, 10 kg produces a 100× weight factor in this model. This describes the calculator&apos;s output; it is not an official Roblox price quote or a guarantee that every current game mechanic is represented.</>,
  },
  {
    question: "Are pet estimates live trading values?",
    answer: <>No. The <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline">pet calculator</Link> uses base values, weight, age and ability factors stored by this site. Actual offers and demand can differ, so treat its output as a reference estimate.</>,
  },
  {
    question: "Does the trade calculator know current market demand?",
    answer: <>No. It compares totals calculated from this site&apos;s stored records and rules. It does not retrieve live player offers, demand or community trading prices. Use the <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline">trade calculator</Link> as an arithmetic aid, then compare current offers before deciding.</>,
  },
  {
    question: "When was the calculator data last changed?",
    answer: <>The dates shown identify when the crop, mutation and pet data files last changed in the repository. They do not prove that a Roblox patch was tested or every entry independently verified. See the <Link href="/changelog" className="text-[var(--primary)] hover:underline">data change dates</Link>.</>,
  },
  {
    question: "Does this page cover Grow A Garden weather and codes?",
    answer: <>This homepage focuses on the original Grow A Garden calculator. The site&apos;s <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline">weather tracker</Link> and <Link href="/grow-a-garden-2/wiki/codes" className="text-[var(--primary)] hover:underline">codes page</Link> belong to the separate Grow A Garden 2 section; those mechanics and codes should not be confused with the original game.</>,
  },
];

export default function HomepageGuide({ crops }: { crops: Crop[] }) {
  return (
    <section className="py-16 border-t" style={{ borderColor: "var(--glass-border)", background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <header className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-left" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>Grow A Garden Calculator: Crop, Pet, Mutation & Trade Tools</h2>
          <p className="text-left">This independent, fan-made <strong>Grow A Garden calculator</strong> (often shortened to GAG calculator) helps Roblox players work with crop values, mutation multipliers, pet estimates and crop trade comparisons. Select a plant or pet in the calculator above, then enter its details. Results use records and rules stored on this site; the tool does not read your Roblox account, inspect a live server or fetch live community market offers.</p>
        </header>

        <section aria-labelledby="home-crop-method" className="mb-10">
          <h3 id="home-crop-method" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>How does the crop value calculator estimate a harvest?</h3>
          <p className="mb-4 text-left">The crop tool uses this site&apos;s stated model: <strong>base price × weight² × selected mutation multipliers × (1 + friend boost ÷ 100) × quantity</strong>. For example, its model applies a 100× weight factor to a 10 kg entry before the other selected factors. This explains the calculator output; it does not guarantee every current in-game sale or patch follows these stored values. Search crops such as Carrot, Bamboo, Mango or Dragon Fruit, then enter the actual weight instead of relying on generic example prices.</p>
          <p className="text-left">Open the <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">crop value calculator</Link>, select a plant, enter its weight in kilograms, choose the mutations shown on it, and set boost and quantity. The <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden value list</Link> shows crop and pet records currently stored here. Calculated sell value and player trading demand are different things.</p>
        </section>

        <section aria-labelledby="home-mutation-weather" className="mb-10">
          <h3 id="home-mutation-weather" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>What do mutations and weather have to do with crop values?</h3>
          <p className="mb-4 text-left">This calculator multiplies selected mutation factors together. For example, its stored Golden and Rainbow entries are ×20 and ×50, so the model combines them as ×1,000 before other crop inputs. That describes this site&apos;s calculation; it does not verify that every combination is possible or current in the live game. Check in-game behavior and the relevant dataset date before using a multiplier to make a trade decision.</p>
          <p className="text-left">Browse the <Link href="/mutation-guide" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden mutation list</Link> or use the <Link href="/mutation-calculator" className="text-[var(--primary)] hover:underline font-semibold">mutation calculator</Link>. Weather can trigger or affect mutations in games with those mechanics, but this homepage is not a live weather tracker. The site&apos;s <Link href="/grow-a-garden-2/weather-tracker" className="text-[var(--primary)] hover:underline font-semibold">weather tracker</Link> belongs to the separate Grow A Garden 2 section; do not mix its events with original Grow A Garden mechanics.</p>
        </section>

        <section aria-labelledby="home-pet-estimates" className="mb-10">
          <h3 id="home-pet-estimates" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>How should I interpret a Grow A Garden pet estimate?</h3>
          <p className="mb-4 text-left">Pets have different rarities, weights, ages and abilities. This site&apos;s pet tool applies its stored base value and ability factor with its own weight and age adjustments. It is not an official pet valuation formula and does not measure market demand, recent trades or a seller&apos;s asking price. Treat it as a starting point when comparing Chicken, Dog, Raccoon or another listed pet.</p>
          <p className="text-left">Enter the pet and inputs in the <Link href="/pet-calculator" className="text-[var(--primary)] hover:underline font-semibold">GAG pet calculator</Link>, or find its record in the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">values list</Link>. Before accepting a trade, also check current player offers, demand, item availability and the exact details of both sides.</p>
        </section>

        <section aria-labelledby="home-trading" className="mb-10">
          <h3 id="home-trading" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>Can a W/F/L calculator tell me whether a trade is fair?</h3>
          <p className="text-left">The <Link href="/trade-calculator" className="text-[var(--primary)] hover:underline font-semibold">trade calculator</Link> compares crop totals from the site&apos;s stored inputs and assigns Win, Fair or Lose using its built-in rule. It is a consistent arithmetic check, not a live trading-value index or a prediction of what another player will accept. Demand may vary by server, time and community. Use the <Link href="/reverse-calculator" className="text-[var(--primary)] hover:underline font-semibold">reverse calculator</Link> for a target crop estimate or the <Link href="/seed-profit" className="text-[var(--primary)] hover:underline font-semibold">seed profit tool</Link> to compare calculations based on seed cost and growth-time inputs.</p>
        </section>

        <section aria-labelledby="home-data-scope" className="mb-10">
          <h3 id="home-data-scope" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>Where can I find plants, pets, updates and codes?</h3>
          <p className="mb-4 text-left">Use the calculator search and <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">value list</Link> to browse plant, crop and pet records included on this site. The <Link href="/changelog" className="text-[var(--primary)] hover:underline font-semibold">data change log</Link> reports when those data files last changed in the repository. A file change date is not an automatic game-update detector, patch verification or proof that every entry was reviewed against the latest Roblox update. No current code or patch should be inferred from it.</p>
          <p className="text-left">This homepage focuses on the original Grow A Garden calculator. The separate <Link href="/grow-a-garden-2/wiki/codes" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden 2 codes page</Link> and weather guide cover the sequel; their items, weather and redeem codes are not original-game patch notes. Check each page&apos;s date and in-game sources before acting on time-sensitive details.</p>
        </section>

        <section aria-labelledby="home-method" className="mb-10 rounded-2xl border p-5" style={{ borderColor: "var(--glass-border)", background: "var(--surface-1)" }}>
          <h3 id="home-method" className="text-lg font-bold mb-2 text-left" style={{ color: "var(--foreground)" }}>How we handle calculator data and corrections</h3>
          <p className="text-left">The values and formulas come from this site&apos;s published datasets and calculator code. Dates identify source-file changes, not independent testing or live syncing. We do not present estimates as official Roblox prices or guarantee current player-market values. If a crop, pet, mutation or calculation appears incorrect, send the page URL, displayed entry and supporting in-game screenshot or source through the <Link href="/contact" className="text-[var(--primary)] hover:underline font-semibold">contact page</Link>; corrections should be checked before a record is changed. Read <Link href="/about" className="text-[var(--primary)] hover:underline font-semibold">about this resource</Link> for its scope.</p>
        </section>

        <section aria-labelledby="home-popular-crops" className="mb-10">
          <h3 id="home-popular-crops" className="text-xl font-bold mb-3 text-left" style={{ color: "var(--foreground)" }}>Browse crop value pages</h3>
          <p className="mb-4 text-left">Open a crop record to see its stored base value, then calculate with your own weight and mutation selections.</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">{crops.map(crop => <Link key={crop.id} href={`/crop/${crop.id}-value`} className="p-3 rounded-xl text-center" style={{ background: "var(--surface-1)", border: "1px solid var(--glass-border)" }}><div className="text-2xl mb-1">{crop.emoji}</div><p className="text-xs font-bold" style={{ color: "var(--foreground)" }}>{crop.name}</p><p className="text-[10px] mt-1">Stored base: {crop.basePrice}</p></Link>)}</div>
        </section>

        <section aria-labelledby="home-faq" className="border-t pt-10" style={{ borderColor: "var(--glass-border)" }}>
          <h2 id="home-faq" className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>Grow A Garden Calculator FAQ</h2>
          <p className="text-center text-sm mb-8">Answers about crop math, pets, mutations, trades and dataset dates.</p>
          <div className="space-y-3">{faqItems.map((item) => <details key={item.question} className="rounded-2xl border overflow-hidden" style={{ background: "var(--surface-1)", borderColor: "var(--glass-border)" }}><summary className="px-5 py-4 font-semibold cursor-pointer text-sm" style={{ color: "var(--foreground)" }}>{item.question}</summary><div className="px-5 pb-5 text-sm leading-relaxed" style={{ borderTop: "1px solid var(--glass-border)" }}><p className="pt-4">{item.answer}</p></div></details>)}</div>
        </section>
      </div>
    </section>
  );
}
