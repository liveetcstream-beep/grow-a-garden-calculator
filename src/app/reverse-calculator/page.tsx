import type { Metadata } from "next";
import ReverseCalculator from "@/components/ReverseCalculator";
import { getCanonical } from "@/lib/canonical";

const revTitle = "Reverse Goal Calculator - Target Coins | Grow A Garden";
const revDesc = "Set a coin goal and calculate exactly what weight and mutations you need to reach it in Grow A Garden. The ultimate reverse target calculator.";
const revUrl = "https://growagardencalcs.com/reverse-calculator";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: revTitle,
    description: revDesc,
    keywords: ["GAG reverse calculator", "Grow A Garden target goal", "calculate plant weight needed", "GAG goal calculator"],
    alternates: {
      canonical: getCanonical("/reverse-calculator"),
    },
    openGraph: {
      title: revTitle,
      description: revDesc,
      url: revUrl,
      siteName: "Grow A Garden Calculator",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: revTitle,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: revTitle,
      description: revDesc,
      images: ['/og-image.png'],
    },
  };
};

export default function ReverseCalculatorPage() {
  return <ReverseCalculator />;
}
