export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <g className="fill-ink">
        <ellipse cx="16" cy="9.5" rx="2.8" ry="5" transform="rotate(-12 16 9.5)" />
        <ellipse cx="29" cy="8.5" rx="2.8" ry="5" transform="rotate(12 29 8.5)" />
        <ellipse cx="22.5" cy="16" rx="8.5" ry="8" />
        <path d="M17 22Q16 26 15.5 30L29 30Q28.5 26 27 22Q24.5 20.5 22 21Q19.5 21.5 17 22Z" />
        <ellipse cx="22" cy="37" rx="12" ry="9" />
        <rect x="13" y="43" width="4.5" height="5" rx="2.2" />
        <rect x="19.5" y="43" width="4.5" height="5" rx="2.2" />
        <rect x="25" y="43" width="4.5" height="5" rx="2.2" />
      </g>
      <g className="fill-ink-3">
        <ellipse cx="16" cy="9.5" rx="1.4" ry="3" transform="rotate(-12 16 9.5)" />
        <ellipse cx="29" cy="8.5" rx="1.4" ry="3" transform="rotate(12 29 8.5)" />
      </g>
      <ellipse cx="25" cy="19.5" rx="4.5" ry="3" className="fill-ink-2" />
      <circle cx="19" cy="14.5" r="1.6" className="fill-paper" />
      <circle cx="25.5" cy="14" r="1.6" className="fill-paper" />
      <circle cx="19.4" cy="14.5" r="0.8" className="fill-ink" />
      <circle cx="25.9" cy="14" r="0.8" className="fill-ink" />
    </svg>
  );
}
