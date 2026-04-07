import { Mutation } from "@/data/mutations";

/**
 * Vanilla JS Calculation Engine for Grow A Garden Calculator
 * All formulas are pure functions with zero dependencies
 */

// ━━━━━━━━━━━━━━━━━━━━━━ CROP VALUE CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━

export interface CropCalcInput {
  basePrice: number;
  weight: number;
  mutations: Mutation[];
  friendBoost: number;
  quantity: number;
}

export interface CropCalcResult {
  baseValue: number;
  mutationMultiplier: number;
  mutationValue: number;
  friendBoostMultiplier: number;
  finalValue: number;
  perUnit: number;
}

export function calculateCropValue(input: CropCalcInput): CropCalcResult {
  const { basePrice, weight, mutations, friendBoost, quantity } = input;

  // Base Value = Base Price × Weight²
  const baseValue = basePrice * Math.pow(weight, 2);

  // Mutation multiplier = product of all mutation multipliers
  const mutationMultiplier = mutations.length > 0
    ? mutations.reduce((acc, m) => acc * m.multiplier, 1)
    : 1;

  // Mutation Value = Base Value × mutation multiplier product
  const mutationValue = baseValue * mutationMultiplier;

  // Friend Boost multiplier
  const friendBoostMultiplier = 1 + (friendBoost / 100);

  // Final Value = Mutation Value × Friend Boost × Quantity
  const finalValue = mutationValue * friendBoostMultiplier * quantity;

  const perUnit = quantity > 0 ? finalValue / quantity : 0;

  return {
    baseValue: Math.round(baseValue * 100) / 100,
    mutationMultiplier,
    mutationValue: Math.round(mutationValue * 100) / 100,
    friendBoostMultiplier,
    finalValue: Math.round(finalValue * 100) / 100,
    perUnit: Math.round(perUnit * 100) / 100,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━ TRADE CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━

export interface TradeItem {
  id: string;
  cropName: string;
  basePrice: number;
  weight: number;
  mutations: Mutation[];
  quantity: number;
}

export type TradeResult = "WIN" | "FAIR" | "LOSE";

export interface TradeCalcResult {
  yourTotal: number;
  theirTotal: number;
  result: TradeResult;
  difference: number;
  percentageDiff: number;
  yourItems: { name: string; value: number }[];
  theirItems: { name: string; value: number }[];
}

export function calculateTradeValue(item: TradeItem): number {
  const baseValue = item.basePrice * Math.pow(item.weight, 2);
  const mutMult = item.mutations.length > 0
    ? item.mutations.reduce((acc, m) => acc * m.multiplier, 1)
    : 1;
  return baseValue * mutMult * item.quantity;
}

export function calculateTrade(
  yourItems: TradeItem[],
  theirItems: TradeItem[]
): TradeCalcResult {
  const yourItemValues = yourItems.map(item => ({
    name: item.cropName,
    value: calculateTradeValue(item),
  }));

  const theirItemValues = theirItems.map(item => ({
    name: item.cropName,
    value: calculateTradeValue(item),
  }));

  const yourTotal = yourItemValues.reduce((sum, i) => sum + i.value, 0);
  const theirTotal = theirItemValues.reduce((sum, i) => sum + i.value, 0);

  const difference = theirTotal - yourTotal;
  const average = (yourTotal + theirTotal) / 2 || 1;
  const percentageDiff = (difference / average) * 100;

  let result: TradeResult;
  if (percentageDiff > 10) {
    result = "WIN";
  } else if (percentageDiff < -10) {
    result = "LOSE";
  } else {
    result = "FAIR";
  }

  return {
    yourTotal: Math.round(yourTotal * 100) / 100,
    theirTotal: Math.round(theirTotal * 100) / 100,
    result,
    difference: Math.round(Math.abs(difference) * 100) / 100,
    percentageDiff: Math.round(percentageDiff * 100) / 100,
    yourItems: yourItemValues,
    theirItems: theirItemValues,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━ PET CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━

export interface PetCalcInput {
  baseValue: number;
  weight: number;
  age: number;
  abilityMultiplier: number;
}

export interface PetCalcResult {
  estimatedValue: number;
  weightBonus: number;
  ageBonus: number;
  abilityBonus: number;
  totalMultiplier: number;
}

export function calculatePetValue(input: PetCalcInput): PetCalcResult {
  const { baseValue, weight, age, abilityMultiplier } = input;

  // Weight multiplier: heavier pets are worth more (diminishing returns)
  const weightBonus = 1 + Math.log10(Math.max(weight, 1)) * 0.5;

  // Age multiplier: older pets are worth more
  const ageBonus = 1 + (age * 0.02);

  // Ability multiplier directly from pet data
  const abilityBonus = abilityMultiplier;

  const totalMultiplier = weightBonus * ageBonus * abilityBonus;
  const estimatedValue = baseValue * totalMultiplier;

  return {
    estimatedValue: Math.round(estimatedValue),
    weightBonus: Math.round(weightBonus * 100) / 100,
    ageBonus: Math.round(ageBonus * 100) / 100,
    abilityBonus: Math.round(abilityBonus * 100) / 100,
    totalMultiplier: Math.round(totalMultiplier * 100) / 100,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━ SEED PROFIT CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━

export interface SeedProfitInput {
  seedCost: number;
  cropBasePrice: number;
  expectedWeight: number;
  mutations: Mutation[];
  growthTimeMinutes: number;
  quantity: number;
}

export interface SeedProfitResult {
  totalRevenue: number;
  totalCost: number;
  profit: number;
  profitPerSeed: number;
  profitPerMinute: number;
  roi: number; // Return on Investment percentage
}

export function calculateSeedProfit(input: SeedProfitInput): SeedProfitResult {
  const { seedCost, cropBasePrice, expectedWeight, mutations, growthTimeMinutes, quantity } = input;

  const baseValue = cropBasePrice * Math.pow(expectedWeight, 2);
  const mutMult = mutations.length > 0
    ? mutations.reduce((acc, m) => acc * m.multiplier, 1)
    : 1;

  const totalRevenue = baseValue * mutMult * quantity;
  const totalCost = seedCost * quantity;
  const profit = totalRevenue - totalCost;
  const profitPerSeed = quantity > 0 ? profit / quantity : 0;
  const profitPerMinute = growthTimeMinutes > 0 ? profit / growthTimeMinutes : 0;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;

  return {
    totalRevenue: Math.round(totalRevenue * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    profit: Math.round(profit * 100) / 100,
    profitPerSeed: Math.round(profitPerSeed * 100) / 100,
    profitPerMinute: Math.round(profitPerMinute * 100) / 100,
    roi: Math.round(roi * 100) / 100,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━ UTILITY ━━━━━━━━━━━━━━━━━━━━━━

export function formatNumber(num: number): string {
  if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + "T";
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(2) + "K";
  return num.toFixed(2);
}

export function formatCurrency(num: number): string {
  return formatNumber(num);
}
