// The alpaca mark, tinted with the current ink so it works on the day and night maps.
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block aspect-[625/988] bg-ink [mask:url(/alpaca-mark.png)_center/contain_no-repeat] ${className ?? ""}`}
    />
  );
}
