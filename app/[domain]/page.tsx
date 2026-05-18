import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOMAINS, getCardsByDomain } from "@/lib/cards";
import { CardPreview } from "@/components/CardPreview";
import type { Domain } from "@/lib/types";

export function generateStaticParams() {
  return DOMAINS.map((d) => ({ domain: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string }>;
}): Promise<Metadata> {
  const { domain } = await params;
  const domainMeta = DOMAINS.find((d) => d.slug === domain);
  if (!domainMeta) return {};
  return {
    title: `${domainMeta.label} — Regelwiki`,
    description: `Überblick über deutsche Vorschriften im Bereich ${domainMeta.label}.`,
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const domainMeta = DOMAINS.find((d) => d.slug === domain);
  if (!domainMeta) notFound();

  const cards = getCardsByDomain(domain as Domain);

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm text-stone-400 mb-1">
          <a href="/" className="hover:text-stone-600">Regelwiki</a> /
        </p>
        <h1 className="text-3xl font-bold text-stone-900">{domainMeta.label}</h1>
        {cards.length > 0 && (
          <p className="text-stone-500 mt-1">{cards.length} {cards.length === 1 ? "Karte" : "Karten"}</p>
        )}
      </div>

      {cards.length === 0 ? (
        <p className="text-stone-400">Noch keine Karten in diesem Bereich.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <CardPreview key={card.slug} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
