export type CardType = "interessenkonflikt" | "flickenteppich" | "zeitgeist-problem";
export type Domain =
  | "wohnen-bauen"
  | "oeffentlicher-raum"
  | "alltagsbuerokratie"
  | "unternehmen"
  | "arbeit-familie";
export type Jurisdiction = "federal" | "state" | "municipal" | "district" | "mixed";
export type AppliesIn = "all" | "partial";
export type ReformStatus = "none" | "discussed" | "proposed" | "partial" | "enacted";
export type TradeOffLean = "a" | "b";

export interface KeyNumber {
  label: string;
  value: string;
  source: string;
}

export interface Comparator {
  country: string;
  country_name: string;
  summary: string;
  source: string;
}

export interface TradeOffValues {
  side_a: string;
  side_b: string;
}

export interface Reference {
  label: string;
  url: string;
  note?: string;
}

export interface Illustration {
  src: string;
  alt: string;
  caption?: string;
}

export interface CardFrontmatter {
  title: string;
  subtitle: string;
  slug: string;
  domain: Domain;
  domain_label: string;
  type: CardType;
  type_label: string;

  jurisdiction: Jurisdiction;
  jurisdiction_label: string;
  legal_basis: string;
  source_url: string;
  applies_in: AppliesIn;
  applies_in_note?: string;
  local_variation: boolean;
  local_variation_note?: string;

  affects: string[];

  trade_off_values?: TradeOffValues;
  trade_off_current_lean?: TradeOffLean;
  trade_off_note?: string;

  key_numbers?: KeyNumber[];
  comparators?: Comparator[];

  reform_status: ReformStatus;
  reform_status_label: string;
  reform_proposals?: string[];

  illustration?: Illustration;
  references?: Reference[];

  tags: string[];
  last_reviewed: string;
  card_version: number;
}

export interface Card {
  frontmatter: CardFrontmatter;
  content: string;
  domain: Domain;
  slug: string;
}
