// Hand-drawn marks: the "a person made this" layer. Use sparingly.
// Both inherit color from `currentColor`; add the `draw` class to animate them in on load.

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={className}
    >
      <path pathLength={1} strokeWidth={6} d="M6 17 C 70 9, 150 7, 230 10 C 262 11, 290 13, 314 8" />
      <path pathLength={1} strokeWidth={4.5} d="M42 24 C 110 19, 190 17, 272 20" />
    </svg>
  );
}

// Curves up and to the right. Rotate or flip it with classes to point elsewhere.
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path pathLength={1} d="M5 42 C 12 22, 28 12, 53 11" />
      <path pathLength={1} d="M40 3 C 45 6, 50 9, 56 11 C 50 14, 46 18, 42 24" />
    </svg>
  );
}
