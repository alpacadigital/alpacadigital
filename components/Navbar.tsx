"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
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
      className="grid size-10 place-items-center rounded-full text-ink-2 transition-colors hover:bg-land hover:text-ink"
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-[1552px] lg:inset-x-6">
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
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-land"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="panel mt-2 flex flex-col gap-1 rounded-3xl bg-paper p-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg font-semibold text-ink hover:bg-land"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#audit"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-route px-5 py-3.5 text-center text-lg font-bold text-route-ink"
          >
            Get my free visibility audit
          </Link>
        </div>
      )}
    </header>
  );
}
