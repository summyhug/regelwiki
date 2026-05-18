import type { ReformStatus as ReformStatusType } from "@/lib/types";

const styles: Record<ReformStatusType, string> = {
  none: "bg-stone-100 text-stone-600",
  discussed: "bg-yellow-100 text-yellow-800",
  proposed: "bg-blue-100 text-blue-800",
  partial: "bg-emerald-100 text-emerald-800",
  enacted: "bg-green-100 text-green-800",
};

export function ReformStatus({
  status,
  label,
  proposals,
}: {
  status: ReformStatusType;
  label: string;
  proposals?: string[];
}) {
  return (
    <div>
      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-3 ${styles[status]}`}>
        {label}
      </span>
      {proposals && proposals.length > 0 && (
        <ul className="space-y-2">
          {proposals.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-stone-700">
              <span className="text-stone-400 shrink-0">→</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
