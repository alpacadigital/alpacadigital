import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  preload?: boolean;
};

// Horizontal lockup: alpaca mark + stacked ALPACA / — DIGITAL — wordmark from the card.
export function Logo({ variant = "light", className = "", preload = false }: LogoProps) {
  const onDark = variant === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={onDark ? "/alpaca-mark.png" : "/alpaca-mark-navy.png"}
        alt=""
        width={625}
        height={988}
        className="h-10 w-auto"
        preload={preload}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.2rem] font-extrabold tracking-[0.06em] ${
            onDark ? "text-white" : "text-navy-900"
          }`}
        >
          ALPACA
        </span>
        <span
          className={`mt-1 flex items-center gap-1.5 font-display text-[0.58rem] font-bold tracking-[0.34em] ${
            onDark ? "text-teal-400" : "text-teal-700"
          }`}
        >
          <span className="h-px w-2.5 bg-current" />
          DIGITAL
          <span className="-ml-1 h-px w-2.5 bg-current" />
        </span>
      </span>
    </span>
  );
}
