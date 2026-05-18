import type { CardType } from "@/lib/types";

const styles: Record<CardType, string> = {
  interessenkonflikt: "bg-amber-100 text-amber-800",
  flickenteppich: "bg-violet-100 text-violet-800",
  "zeitgeist-problem": "bg-sky-100 text-sky-800",
};

export function TypeBadge({ type, label }: { type: CardType; label: string }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[type]}`}>
      {label}
    </span>
  );
}
