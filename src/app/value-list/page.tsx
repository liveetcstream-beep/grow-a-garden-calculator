import type { Metadata } from "next";
import { CROPS } from "@/data/crops";
import { PETS } from "@/data/pets";
import { getCanonical } from "@/lib/canonical";
import ValueListTabs from "./ValueListTabs";

const valListTitle = "GAG Values — Complete Grow A Garden Value List 2026";
const valListDesc = "Complete GAG value list with all crop prices, seed shop values, event crops, and gag values in Grow A Garden 2026.";
const valListUrl = "https://growagardencalcs.com/value-list";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: valListTitle,
    description: valListDesc,
    keywords: ["gag values", "grow a garden value", "value list grow a garden", "gag pet values", "grow a garden pet value list", "grow a garden values", "kalkulator grow a garden pet"],
    alternates: {
      canonical: getCanonical("/value-list"),
    },
    openGraph: {
      title: valListTitle,
      description: valListDesc,
      url: valListUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: valListTitle,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: valListTitle,
      description: valListDesc,
      images: ['/og-image.png'],
    },
  };
};

export default function ValueListPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Complete Grow A Garden Values List",
    "description": "Live market value database of all crops, seeds, and pets in Grow A Garden.",
    "numberOfItems": CROPS.length,
    "itemListElement": CROPS.slice(0, 30).map((crop, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${crop.name} Value`,
      "url": `https://growagardencalcs.com/crop/${crop.id}-value`
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          Complete Grow A Garden <span style={{ background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Values List</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Welcome to the official <strong>GAG values</strong> and <strong>grow a garden value</strong> list database for 2026. 
          Below is the complete, live-updated value directory for all crops, seeds, event fruits, and mythical pets. 
          Whether you are comparing trading multipliers, checking <strong>gag pet values</strong>, or searching for <strong>gag values</strong> rates, this directory provides instant access to base prices and multiplier tables.
        </p>
        <p className="text-sm max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Use this value list to verify crop base values before applying weight scaling (Weight²) or stacking mutation multipliers. Click any item card to open its dedicated live calculator.
        </p>
      </div>

      <ValueListTabs crops={CROPS} pets={PETS} />
    </div>
  );
}
