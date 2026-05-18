// Route handler — data fetching only. Card rendering lives in CardTemplate.tsx.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DOMAINS, getCard, getCardsByDomain } from "@/lib/cards";
import { CardTemplate } from "@/components/CardTemplate";
import type { Domain } from "@/lib/types";

export async function generateStaticParams() {
  const params: { domain: string; slug: string }[] = [];
  for (const d of DOMAINS) {
    for (const card of getCardsByDomain(d.slug)) {
      params.push({ domain: d.slug, slug: card.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string; slug: string }>;
}): Promise<Metadata> {
  const { domain, slug } = await params;
  const card = getCard(domain as Domain, slug);
  if (!card) return {};
  return {
    title: `${card.frontmatter.title} — Regelwiki`,
    description: card.frontmatter.subtitle,
  };
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ domain: string; slug: string }>;
}) {
  const { domain, slug } = await params;
  const card = getCard(domain as Domain, slug);
  if (!card) notFound();
  return <CardTemplate card={card} />;
}
