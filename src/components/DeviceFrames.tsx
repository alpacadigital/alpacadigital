import Image from "next/image";
import type { ReactNode } from "react";

export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(3,20,42,0.55)] ring-1 ring-black/10 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-[#f3f5f8] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {/* inline-size containment keeps the URL's length from widening the page on small phones */}
        <div className="mx-auto w-full max-w-xs truncate rounded-md bg-white px-3 py-1 text-center text-[0.7rem] text-body ring-1 ring-line contain-inline-size">
          {url}
        </div>
        <div className="w-10" aria-hidden />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  className = "",
  sizes = "200px",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] bg-navy-950 p-1.5 shadow-[0_30px_60px_-15px_rgba(3,20,42,0.6)] ring-1 ring-white/15 ${className}`}
    >
      <div className="relative aspect-[390/844] overflow-hidden rounded-[1.6rem] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
