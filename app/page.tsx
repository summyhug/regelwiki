import Link from "next/link";
import { DOMAINS, getCardsByDomain } from "@/lib/cards";

export default function HomePage() {
  const domains = DOMAINS.map((d) => ({
    ...d,
    count: getCardsByDomain(d.slug).length,
  }));

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-3">
          Regelwiki
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl">
          Eine Enzyklopädie deutscher Vorschriften — geschrieben für Bürger, nicht für Juristen.
          Wir erklären, was eine Regelung tut, warum sie existiert, welchen Kompromiss sie
          darstellt — und wie andere Länder dasselbe Problem lösen.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {domains.map((d) => (
          <Link
            key={d.slug}
            href={`/${d.slug}`}
            className={`group rounded-xl border p-6 transition-all ${
              d.count > 0
                ? "border-stone-200 bg-white hover:border-stone-400 hover:shadow-sm cursor-pointer"
                : "border-stone-100 bg-stone-50 cursor-default opacity-60 pointer-events-none"
            }`}
          >
            <h2 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 mb-1">
              {d.label}
            </h2>
            <p className="text-sm text-stone-400">
              {d.count > 0 ? `${d.count} ${d.count === 1 ? "Karte" : "Karten"}` : "In Vorbereitung"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
