"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const night = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(night ? "light" : "dark")}
      className="grid size-11 place-items-center rounded-full text-ink-2 transition-colors hover:bg-land hover:text-ink"
      aria-label={night ? "Switch to day map" : "Switch to night map"}
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {night ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
          </>
        ) : (
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        )}
      </svg>
    </button>
  );
}

const Bar = ({ className }: { className: string }) => (
  <span className={`absolute inset-x-0 h-[2.2px] rounded-full bg-current ease-settle ${className}`} />
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Rows drop in one after another on open and leave together on close.
  const row = (i: number) => ({
    className: `transition-[opacity,translate] ease-settle ${
      open ? "translate-y-0 opacity-100 duration-400" : "-translate-y-2 opacity-0 duration-150"
    }`,
    style: { transitionDelay: open ? `${90 + i * 45}ms` : "0ms" },
  });

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-[1552px] lg:inset-x-6">
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 -z-10 bg-[rgb(var(--shadow)/0.3)] transition-opacity md:hidden ${
          open ? "opacity-100 duration-400" : "pointer-events-none opacity-0 duration-250"
        }`}
      />
      <nav className="panel flex h-15 items-center justify-between rounded-full bg-paper/95 pr-2 pl-4 backdrop-blur-md lg:pl-5">
        <Link href="/#top" className="flex items-center gap-2" aria-label="Alpaca Digital, back to top">
          <Logo className="h-8" />
          <span className="font-display text-[1.35rem] font-extrabold tracking-[0.04em] text-ink uppercase">
            Alpaca Digital
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-ink-2 transition-colors hover:bg-land hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/#audit"
            className="ml-1 rounded-full bg-route px-5 py-2.5 text-[0.95rem] font-bold text-route-ink transition-transform duration-300 ease-settle hover:-translate-y-px"
          >
            Free audit
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-ink transition-[background-color,scale] duration-200 ease-settle hover:bg-land active:scale-90"
          >
            <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
              <Bar className={`top-0 transition-[translate,rotate] duration-400 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <Bar className={`top-[6px] transition-[scale,opacity] duration-250 ${open ? "scale-x-0 opacity-0" : ""}`} />
              <Bar className={`top-3 transition-[translate,rotate] duration-400 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        inert={!open}
        className={`panel mt-2 flex origin-top-right flex-col gap-1 rounded-3xl bg-paper p-3 transition-[opacity,translate,scale] ease-settle md:hidden ${
          open ? "translate-y-0 scale-100 opacity-100 duration-400" : "pointer-events-none -translate-y-3 scale-95 opacity-0 duration-250"
        }`}
      >
        {links.map((link, i) => (
          <div key={link.href} {...row(i)}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink transition-[background-color,scale] duration-200 ease-settle hover:bg-land active:scale-[0.97] active:bg-land"
            >
              {link.label}
            </Link>
          </div>
        ))}
        <div className={`mt-1 ${row(links.length).className}`} style={row(links.length).style}>
          <Link
            href="/#audit"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-route px-5 py-3.5 text-center text-lg font-bold text-route-ink transition-[scale] duration-200 ease-settle active:scale-[0.97]"
          >
            Get my free visibility audit
          </Link>
        </div>
      </div>
    </header>
  );
}
