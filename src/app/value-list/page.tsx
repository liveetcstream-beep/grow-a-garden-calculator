import type { Metadata } from "next";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { getCanonical } from "@/lib/canonical";
import ValueListTabs from "./ValueListTabs";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Grow A Garden Value List [2026] | Crops & GAG Pet Values",
    description: "The official Grow A Garden value list database. Find exact values for all crops, seeds, and gag pet values. Compare trading multipliers and net worth.",
    keywords: ["grow a garden value", "value list grow a garden", "gag pet values", "grow a garden pet value list", "grow a garden values", "kalkulator grow a garden pet"],
    alternates: {
      canonical: getCanonical("/value-list"),
    },
  };
};

export default function ValueListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Value List</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the most accurate <strong>grow a garden value</strong> and <strong>gag pet value list</strong> database. 
          Below is the complete, continually-updated directory for every plant, fruit, crop, and mythical pet in the game ecosystem. 
          Whether you are running a <strong>watermelon calculator</strong> projection, analyzing <strong>gag pet values</strong>, or checking 
          Indonesian <strong>kalkulator grow a garden</strong> data, this portal gives you real-time base rates.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Use this list to check base prices before applying weight multipliers or mutation values. Click any card below to perform instant calculations.
        </p>
      </div>

      <ValueListTabs crops={CROPS} pets={PETS} />
    </div>
  );
}
