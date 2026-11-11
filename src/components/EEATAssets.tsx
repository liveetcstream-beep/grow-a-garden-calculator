import Link from "next/link";
import { CROPS } from "@/data/crops";
import { MUTATIONS } from "@/data/mutations";

const numberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const goldenMultiplier = MUTATIONS.find((mutation) => mutation.id === "golden")?.multiplier ?? 1;
const rainbowMultiplier = MUTATIONS.find((mutation) => mutation.id === "rainbow")?.multiplier ?? 1;
const exampleCrops = [...CROPS].sort((a, b) => b.basePrice - a.basePrice).slice(0, 6);

export default function EEATAssets() {
  return (
    <section className="my-12 glass-card-static p-6 sm:p-8 rounded-3xl border text-left"
      style={{ borderColor: "var(--glass-border)", background: "var(--surface-1)" }}>
      <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>
        Example Grow A Garden crop values
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
        These examples are calculated from the crop base values stored on this site. They use a 10 kg crop, one item, and no friend boost. They show formula outputs, not live trade prices or a profitability ranking.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left">
          <thead>
            <tr className="border-b" style={{ borderColor: "var(--glass-border)" }}>
              <th scope="col" className="py-3 px-3 font-semibold" style={{ color: "var(--muted)" }}>Crop</th>
              <th scope="col" className="py-3 px-3 font-semibold text-right" style={{ color: "var(--muted)" }}>Base price</th>
              <th scope="col" className="py-3 px-3 font-semibold text-right" style={{ color: "var(--muted)" }}>10 kg, no mutation</th>
              <th scope="col" className="py-3 px-3 font-semibold text-right" style={{ color: "var(--muted)" }}>10 kg + Golden</th>
              <th scope="col" className="py-3 px-3 font-semibold text-right" style={{ color: "var(--muted)" }}>10 kg + Rainbow</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: "var(--glass-border)" }}>
            {exampleCrops.map((crop) => {
              const baseAtTenKg = crop.basePrice * 100;
              return (
                <tr key={crop.id}>
                  <td className="py-3 px-3 font-bold" style={{ color: "var(--foreground)" }}>
                    <Link href={`/crop/${crop.id}-value`} className="hover:underline">{crop.emoji} {crop.name}</Link>
                  </td>
                  <td className="py-3 px-3 text-right font-mono" style={{ color: "var(--muted)" }}>{numberFormat.format(crop.basePrice)}</td>
                  <td className="py-3 px-3 text-right font-mono" style={{ color: "var(--foreground)" }}>{numberFormat.format(baseAtTenKg)}</td>
                  <td className="py-3 px-3 text-right font-mono" style={{ color: "var(--foreground)" }}>{numberFormat.format(baseAtTenKg * goldenMultiplier)}</td>
                  <td className="py-3 px-3 text-right font-mono" style={{ color: "var(--foreground)" }}>{numberFormat.format(baseAtTenKg * rainbowMultiplier)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
        Formula: base price × weight² × mutation multiplier. Check the <Link href="/value-list" className="text-[var(--primary)] hover:underline font-semibold">Grow A Garden values list</Link> for the stored records, or use the <Link href="/crop-calculator" className="text-[var(--primary)] hover:underline font-semibold">crop value calculator</Link> with your own crop weight and mutations.
      </p>
    </section>
  );
}
