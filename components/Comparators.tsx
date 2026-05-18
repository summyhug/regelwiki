import type { Comparator } from "@/lib/types";

export function Comparators({ comparators }: { comparators: Comparator[] }) {
  return (
    <div className="space-y-4">
      {comparators.map((c) => (
        <div key={c.country} className="rounded-lg border border-stone-200 bg-white p-4">
          <p className="font-semibold text-stone-900 mb-1">
            {c.country_name}
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">{c.summary}</p>
          <p className="text-xs text-stone-400 mt-2">Quelle: {c.source}</p>
        </div>
      ))}
    </div>
  );
}
