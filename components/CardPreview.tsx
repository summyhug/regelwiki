import Link from "next/link";
import type { Card } from "@/lib/types";
import { TypeBadge } from "./TypeBadge";

export function CardPreview({ card }: { card: Card }) {
  const { frontmatter, domain, slug } = card;
  return (
    <Link
      href={`/${domain}/${slug}`}
      className="group block rounded-xl border border-stone-200 bg-white p-6 hover:border-stone-400 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-stone-400 mb-1">{frontmatter.domain_label}</p>
          <h2 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 leading-tight mb-1">
            {frontmatter.title}
          </h2>
          <p className="text-sm text-stone-500 line-clamp-2">{frontmatter.subtitle}</p>
        </div>
        <TypeBadge type={frontmatter.type} label={frontmatter.type_label} />
      </div>
      {frontmatter.key_numbers && frontmatter.key_numbers.length > 0 && (
        <div className="mt-4 pt-4 border-t border-stone-100 flex gap-6 overflow-x-auto">
          {frontmatter.key_numbers.slice(0, 2).map((kn) => (
            <div key={kn.label} className="shrink-0">
              <p className="text-xs text-stone-400">{kn.label}</p>
              <p className="text-sm font-semibold text-stone-800">{kn.value}</p>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}
