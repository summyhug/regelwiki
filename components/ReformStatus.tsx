import type { ReformStatus as ReformStatusType } from "@/lib/types";

const styles: Record<ReformStatusType, string> = {
  none: "bg-stone-100 text-stone-600",
  discussed: "bg-yellow-100 text-yellow-800",
  proposed: "bg-blue-100 text-blue-800",
  partial: "bg-emerald-100 text-emerald-800",
  enacted: "bg-green-100 text-green-800",
};

export function ReformProposals({ proposals }: { proposals?: string[] }) {
  if (!proposals || proposals.length === 0) return null;
  return (
    <ul className="space-y-3">
      {proposals.map((p, i) => {
        const colonIdx = p.indexOf(": ");
        const title = colonIdx !== -1 ? p.slice(0, colonIdx) : null;
        const body = colonIdx !== -1 ? p.slice(colonIdx + 2) : p;
        return (
          <li key={i} className="flex gap-2 text-sm text-stone-700">
            <span className="text-stone-400 shrink-0 mt-0.5">→</span>
            <span>
              {title && <strong className="text-stone-900">{title}: </strong>}
              {body}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function ReformStatus({
  status,
  label,
}: {
  status: ReformStatusType;
  label: string;
}) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}>
      {label}
    </span>
  );
}
