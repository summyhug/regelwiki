import type { Reference } from "@/lib/types";

export function References({ references }: { references: Reference[] }) {
  return (
    <div className="border-t border-stone-200 pt-6">
      <h2 className="text-base font-semibold text-stone-700 mb-3">Quellen</h2>
      <ol className="space-y-2">
        {references.map((ref, i) => (
          <li key={i} id={`ref-${i + 1}`} className="flex gap-3 text-sm text-stone-600">
            <a
              href={`#cite-${i + 1}`}
              className="shrink-0 text-stone-400 hover:text-stone-600 font-medium"
              aria-label={`Zurück zu Verweis ${i + 1}`}
            >
              [{i + 1}]
            </a>
            <span>
              <a
                href={ref.url}
                className="underline hover:text-stone-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ref.label}
              </a>
              {ref.note && (
                <span className="text-stone-400"> — {ref.note}</span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
