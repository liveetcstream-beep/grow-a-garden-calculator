// Fails the build if any page <title> would exceed 60 characters (SERP truncation)
// or any meta description would exceed 155 characters.
// Covers: hardcoded title/description literals, the layout default title, and
// worst-case dynamic titles/descriptions built from data names (crops / pets / mutations).
// Run: node scripts/check-meta.mjs   (wired into `npm run build`)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const TITLE_LIMIT = 60;
const DESC_LIMIT = 155;
const failures = [];

function checkTitle(label, title) {
  if (title.length > TITLE_LIMIT) {
    failures.push(`${label} TITLE: ${title.length} chars — "${title}"`);
  }
}

function checkDesc(label, desc) {
  if (desc.length > DESC_LIMIT) {
    failures.push(`${label} DESCRIPTION: ${desc.length} chars — "${desc.slice(0, 60)}..."`);
  }
}

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.tsx?$/.test(e)) yield p;
  }
}

// 1) Hardcoded title + description string literals in the app tree
for (const file of walk(join(ROOT, "src", "app"))) {
  const src = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  const titlePatterns = [
    /(?:\btitle\s*[:=]\s*|const\s+\w*[Tt]itle\w*\s*=\s*)"([^"\\]+)"/g, // title: "..." / const xTitle = "..."
    /\bdefault\s*:\s*"([^"\\]+)"/g, // layout metadata title.default
  ];
  for (const re of titlePatterns) {
    for (const m of src.matchAll(re)) checkTitle(rel, m[1]);
  }
  const descPatterns = [
    /(?:\bdescription\s*:\s*|const\s+\w*[Dd]esc\w*\s*=\s*)"([^"\\]+)"/g, // description: "..." / const xDesc = "..."
  ];
  for (const re of descPatterns) {
    for (const m of src.matchAll(re)) checkDesc(rel, m[1]);
  }
}

// 2) Dynamic titles built from data names — worst case over every entry
function namesOf(dataFile) {
  const src = readFileSync(join(ROOT, "src", "data", dataFile), "utf8");
  return [...src.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
}
const pad = (n) => "x".repeat(n);
const maxLen = (arr) => Math.max(...arr.map((s) => s.length));

const crops = namesOf("crops.ts");
checkTitle("crop/[slug] worst case", `${pad(maxLen(crops))} Value`);

const pets = namesOf("pets.ts");
checkTitle(
  "pet/[slug] worst case",
  `${pad(maxLen(pets))} Value | Pet Calculator Grow A Garden`
);

const muts = namesOf("mutations.ts");
const mutFull = `${pad(maxLen(muts))} Mutation – GAG Multiplier (×100)`;
checkTitle(
  "mutation/[slug] worst case",
  // mirrors the in-code fallback that shortens titles hitting the limit
  mutFull.length >= TITLE_LIMIT
    ? `${pad(maxLen(muts))} Mutation – GAG (×100)`
    : mutFull
);

// 3) Dynamic descriptions built from data — worst case over every entry
function abilitiesOf() {
  const src = readFileSync(join(ROOT, "src", "data", "pets.ts"), "utf8");
  return [...src.matchAll(/ability:\s*"([^"]+)"/g)].map((m) => m[1]);
}
function raritiesOf() {
  const src = readFileSync(join(ROOT, "src", "data", "pets.ts"), "utf8");
  return [...new Set([...src.matchAll(/rarity:\s*"([^"]+)"/g)].map((m) => m[1]))];
}
const maxAbility = Math.max(...abilitiesOf().map((s) => s.length));
const maxRarity = Math.max(...raritiesOf().map((s) => s.length));
checkDesc(
  "pet/[slug] worst case",
  `${pad(maxLen(pets))} is a ${pad(maxRarity)} pet in Grow A Garden. Get exact value with our pet calculator. Base: 300000. Ability: ${pad(maxAbility)} ×10.`
);
checkDesc(
  "crop/[slug] worst case",
  `${pad(maxLen(crops))} base value is 10000 coins in Grow A Garden. Calculate exact value by weight and mutations instantly with our free GAG calculator.`
);
checkDesc(
  "mutation/[slug] worst case",
  `Get the ${pad(maxLen(muts))} mutation in Grow A Garden (×100 multiplier). Learn how to unlock it and calculate crop values with our GAG calculator.`
);

if (failures.length) {
  console.error(
    `META CHECK FAILED — ${failures.length} issue(s) (titles > ${TITLE_LIMIT}, descriptions > ${DESC_LIMIT}):`
  );
  for (const f of failures) console.error("  • " + f);
  process.exit(1);
}
console.log(
  `Meta check passed: all titles ≤ ${TITLE_LIMIT} chars, all descriptions ≤ ${DESC_LIMIT} chars.`
);
