// Inline footnote marker — use in MDX body as <Ref id={1} />
// Renders a superscript [1] that jumps to the matching entry in the Quellen section.
export function Ref({ id }: { id: number }) {
  return (
    <a
      href={`#ref-${id}`}
      id={`cite-${id}`}
      className="text-stone-400 hover:text-stone-700 text-xs font-medium align-super no-underline ml-0.5"
      aria-label={`Quelle ${id}`}
    >
      [{id}]
    </a>
  );
}
