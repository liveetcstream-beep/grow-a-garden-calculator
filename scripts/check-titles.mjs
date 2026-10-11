// Fails the build if any page <title> would exceed 60 characters (SERP truncation).
// Covers: hardcoded title literals, the layout default title, and worst-case
// dynamic titles built from data names (crops / pets / mutations).
// Run: node scripts/check-titles.mjs   (wired into `npm run build`)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LIMIT = 60;
const failures = [];

function check(label, title) {
  if (title.length > LIMIT) {
    failures.push(`${label}: ${title.length} chars — "${title}"`);
  }
}

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.tsx?$/.test(e)) yield p;
  }
}

// 1) Hardcoded title string literals in the app tree
for (const file of walk(join(ROOT, "src", "app"))) {
  const src = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  const patterns = [
    /(?:\btitle\s*[:=]\s*|const\s+\w*[Tt]itle\w*\s*=\s*)"([^"\\]+)"/g, // title: "..." / const xTitle = "..."
    /\bdefault\s*:\s*"([^"\\]+)"/g, // layout metadata title.default
  ];
  for (const re of patterns) {
    for (const m of src.matchAll(re)) check(rel, m[1]);
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
check("crop/[slug] worst case", `${pad(maxLen(crops))} Value`);

const pets = namesOf("pets.ts");
check(
  "pet/[slug] worst case",
  `${pad(maxLen(pets))} Value | Pet Calculator Grow A Garden`
);

const muts = namesOf("mutations.ts");
const mutFull = `${pad(maxLen(muts))} Mutation – GAG Multiplier (×100)`;
check(
  "mutation/[slug] worst case",
  // mirrors the in-code fallback that shortens titles hitting the limit
  mutFull.length >= LIMIT
    ? `${pad(maxLen(muts))} Mutation – GAG (×100)`
    : mutFull
);

if (failures.length) {
  console.error(
    `TITLE CHECK FAILED — ${failures.length} title(s) exceed ${LIMIT} chars:`
  );
  for (const f of failures) console.error("  • " + f);
  process.exit(1);
}
console.log(`Title check passed: all page titles ≤ ${LIMIT} chars.`);
