import type { KeyNumber } from "@/lib/types";

export function KeyNumbers({ numbers }: { numbers: KeyNumber[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl bg-stone-100 p-6">
      {numbers.map((kn) => (
        <div key={kn.label}>
          <p className="text-xs text-stone-500 mb-1">{kn.label}</p>
          <p className="text-base font-bold text-stone-900">{kn.value}</p>
          <p className="text-xs text-stone-400 mt-1">{kn.source}</p>
        </div>
      ))}
    </div>
  );
}
