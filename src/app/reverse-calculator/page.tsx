import type { Metadata } from "next";
import ReverseCalculator from "@/components/ReverseCalculator";

export const metadata: Metadata = {
  title: "Reverse Goal Calculator - Target Coins | Grow A Garden",
  description: "Set a coin goal and calculate exactly what weight and mutations you need to reach it in Grow A Garden. The ultimate reverse target calculator.",
  keywords: ["GAG reverse calculator", "Grow A Garden target goal", "calculate plant weight needed", "GAG goal calculator"],
};

export default function ReverseCalculatorPage() {
  return <ReverseCalculator />;
}
