// =============================================================================
// CARD TEMPLATE — single source of truth for all Regelwiki card pages.
// Every card on the site renders through this component.
// Change layout, sections, or structure here and it applies to all cards.
// =============================================================================

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Card } from "@/lib/types";
import { TypeBadge } from "./TypeBadge";
import { KeyNumbers } from "./KeyNumbers";
import { Comparators } from "./Comparators";
import { ReformStatus, ReformProposals } from "./ReformStatus";
import { References } from "./References";
import { Ref } from "./Ref";

// MDX components available in every card body.
// Add new components here to make them usable in all card MDX files.
const MDX_COMPONENTS = {
  Ref,
};

export function CardTemplate({ card }: { card: Card }) {
  const { frontmatter, content, domain } = card;

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <p className="text-sm text-stone-400 mb-6">
        <a href="/" className="hover:text-stone-600">Regelwiki</a>
        {" / "}
        <a href={`/${domain}`} className="hover:text-stone-600">{frontmatter.domain_label}</a>
        {" / "}
        <span className="text-stone-500">{frontmatter.title}</span>
      </p>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <TypeBadge type={frontmatter.type} label={frontmatter.type_label} />
          <span className="text-xs text-stone-400">{frontmatter.jurisdiction_label}</span>
        </div>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">{frontmatter.title}</h1>
        <p className="text-xl text-stone-500">{frontmatter.subtitle}</p>
      </div>

      {/* Key numbers */}
      {frontmatter.key_numbers && frontmatter.key_numbers.length > 0 && (
        <div className="mb-8">
          <KeyNumbers numbers={frontmatter.key_numbers} />
        </div>
      )}

      {/* Illustration (optional) — place image file in public/images/[domain]/[slug]/ */}
      {frontmatter.illustration && (
        <figure className="mb-8 rounded-xl overflow-hidden border border-stone-200">
          <div className="relative w-full aspect-video bg-stone-100">
            <Image
              src={frontmatter.illustration.src}
              alt={frontmatter.illustration.alt}
              fill
              loading="eager"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {frontmatter.illustration.caption && (
            <figcaption className="px-4 py-2 text-xs text-stone-500 bg-stone-50 border-t border-stone-200">
              {frontmatter.illustration.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* MDX body — sections: Was es bedeutet / Warum es dieses Gesetz gibt / Die Abwägung */}
      <div className="prose prose-stone max-w-none mb-10
        prose-h2:text-xl prose-h2:font-bold prose-h2:text-stone-900 prose-h2:mt-10 prose-h2:mb-3
        prose-p:text-stone-700 prose-p:leading-relaxed
        prose-li:text-stone-700
        prose-strong:text-stone-900
        prose-a:text-stone-700 prose-a:underline">
        <MDXRemote source={content} components={MDX_COMPONENTS} />
      </div>

      {/* Comparators — directly before Reformrichtung so country references land in context */}
      {frontmatter.comparators && frontmatter.comparators.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Internationaler Vergleich</h2>
          <Comparators comparators={frontmatter.comparators} />
        </div>
      )}

      {/* Reformrichtung — proposals from frontmatter */}
      {frontmatter.reform_proposals && frontmatter.reform_proposals.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Reformrichtung</h2>
          <ReformProposals proposals={frontmatter.reform_proposals} />
        </div>
      )}

      {/* Reformstatus — current state of reform efforts */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Reformstatus</h2>
        <ReformStatus
          status={frontmatter.reform_status}
          label={frontmatter.reform_status_label}
        />
      </div>

      {/* Numbered source references (Quellen) */}
      {frontmatter.references && frontmatter.references.length > 0 && (
        <div className="mb-8">
          <References references={frontmatter.references} />
        </div>
      )}

      {/* Legal metadata footer */}
      <div className="border-t border-stone-200 pt-6 text-xs text-stone-400 space-y-1">
        <p>Rechtsgrundlage: {frontmatter.legal_basis}</p>
        <p>
          Primärquelle:{" "}
          <a
            href={frontmatter.source_url}
            className="underline hover:text-stone-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {frontmatter.source_url}
          </a>
        </p>
        <p>Zuletzt geprüft: {frontmatter.last_reviewed}</p>
        {frontmatter.local_variation && frontmatter.local_variation_note && (
          <p>Lokale Variationen: {frontmatter.local_variation_note}</p>
        )}
      </div>
    </div>
  );
}
