// The thin circular arcs from the corners of the business card.
export function Arcs({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -right-40 -top-56 size-[34rem] rounded-full border border-teal-400/35" />
      <div className="absolute -bottom-72 -left-56 size-[36rem] rounded-full bg-navy-800/60" />
      <div className="absolute -bottom-80 -left-64 size-[42rem] rounded-full border border-teal-400/25" />
    </div>
  );
}
