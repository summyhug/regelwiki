import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Card, CardFrontmatter, Domain } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export const DOMAINS: { slug: Domain; label: string }[] = [
  { slug: "wohnen-bauen", label: "Wohnen & Bauen" },
  { slug: "oeffentlicher-raum", label: "Öffentlicher Raum & Umwelt" },
  { slug: "alltagsbuerokratie", label: "Alltagsbürokratie" },
  { slug: "unternehmen", label: "Unternehmen gründen & führen" },
  { slug: "arbeit-familie", label: "Arbeit & Familie" },
  { slug: "arbeitgeber-pflichten", label: "Arbeitgeberpflichten" },
  { slug: "einwanderung", label: "Einwanderung & Anerkennung" },
];

function parseCard(filePath: string, domain: Domain): Card {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, ".mdx");
  return {
    frontmatter: data as CardFrontmatter,
    content,
    domain,
    slug,
  };
}

export function getCardsByDomain(domain: Domain): Card[] {
  const dir = path.join(CONTENT_DIR, domain);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseCard(path.join(dir, f), domain))
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, "de"));
}

export function getCard(domain: Domain, slug: string): Card | null {
  const filePath = path.join(CONTENT_DIR, domain, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseCard(filePath, domain);
}

export function getAllCards(): Card[] {
  return DOMAINS.flatMap(({ slug }) => getCardsByDomain(slug));
}
