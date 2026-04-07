"use client";

import { useState, useMemo } from "react";
import { Pet } from "@/data/pets";
import { calculatePetValue, formatCurrency } from "@/lib/calculator";

export default function PetMiniCalculator({ pet, rarityColor }: { pet: Pet, rarityColor: string }) {
  const [weight, setWeight] = useState(10);
  const [age, setAge] = useState(30);
  const [abilityMod, setAbilityMod] = useState(pet.abilityMultiplier);

  const result = useMemo(() => calculatePetValue({
    baseValue: pet.baseValue,
    weight,
    age,
    abilityMultiplier: abilityMod,
  }), [pet.baseValue, weight, age, abilityMod]);

  return (
    <div className="glass-card-static p-6 border-t-4" style={{ borderColor: rarityColor }}>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div>
          <label className="result-label block mb-1">Weight</label>
          <input type="number" className="input-glow px-2" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} min={0} step={0.5} />
        </div>
        <div>
          <label className="result-label block mb-1">Age</label>
          <input type="number" className="input-glow px-2" value={age} onChange={(e) => setAge(parseInt(e.target.value) || 0)} min={0} />
        </div>
        <div>
          <label className="result-label block mb-1">Modifier</label>
          <input type="number" className="input-glow px-2" value={abilityMod} onChange={(e) => setAbilityMod(parseFloat(e.target.value) || 0)} min={0} step={0.1} />
        </div>
      </div>

      <div className="p-4 rounded-xl text-center" style={{ background: `${rarityColor}15`, border: `1px solid ${rarityColor}30` }}>
        <p className="result-label mb-1" style={{ color: rarityColor }}>Calculated Value</p>
        <p className="result-value number-animate" style={{ color: rarityColor }}>
          {formatCurrency(result.estimatedValue)}
        </p>
      </div>
    </div>
  );
}
