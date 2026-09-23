"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo preload />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.925rem] font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[0.925rem] font-semibold text-white md:inline-flex"
          >
            <Phone className="size-4 text-teal-400" aria-hidden />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-teal-500 px-5 py-2.5 font-display text-sm font-bold text-navy-950 transition-colors hover:bg-teal-400 sm:inline-flex"
          >
            Free audit
          </a>
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid size-11 place-items-center rounded-full bg-teal-500 text-navy-950 md:hidden"
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-white ring-1 ring-white/20 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-display text-lg font-semibold text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-4 font-display font-bold text-navy-950"
          >
            Get my free audit
          </a>
        </nav>
      )}
    </header>
  );
}
