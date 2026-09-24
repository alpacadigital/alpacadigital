"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Exclusive Drywall Company",
    category: "Contractor",
    client: true,
    description:
      "A story-driven site for a family-owned drywall business, with a project gallery and a free estimate form. Now getting found for local drywall searches.",
    url: "https://www.exclusivedrywallcompany.com/",
    screenshot: "/www.exclusivedrywallcompany.com_.png",
  },
  {
    name: "Rochester Family Eye Clinic",
    category: "Eye care",
    description:
      "A concept site for a 30-year Rochester optometry practice: services, doctor bios, insurance info, and an appointment request form.",
    url: "https://rochester-family-eye-clinic.vercel.app/",
    screenshot: "/rochester-family-eye-clinic.vercel.app_.png",
  },
  {
    name: "12th Street Dental",
    category: "Dental",
    description:
      "A concept site for a dental practice, with before-and-after galleries, service pages, Google reviews, and a new patient flow.",
    url: "https://12streetdental.alpacadigital.co/",
    screenshot: "/12streetdental.alpacadigital.co_.png",
  },
  {
    name: "Fat Willy's Bar & Grill",
    category: "Restaurant",
    description:
      "A concept site for a bar and grill, with menu highlights, weekly specials, events, online ordering, and an email signup.",
    url: "https://fatwillys.alpacadigital.co/",
    screenshot: "/fatwillys.alpacadigital.co.png",
  },
  {
    name: "Kiwanis Rochester Day Makers",
    category: "Non-profit",
    description:
      "A concept site for a local Kiwanis chapter, with an event calendar, impact stats, and membership sign-ups.",
    url: "https://kiwanis.alpacadigital.co/",
    screenshot: "/kiwanis.alpacadigital.co_.png",
  },
];

const domain = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function Browser({ project, priority }: { project: (typeof projects)[number]; priority?: boolean }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="panel group block overflow-hidden rounded-2xl bg-paper"
    >
      <span className="flex items-center gap-3 border-b border-rule px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
          <span className="size-2.5 rounded-full bg-rule" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-land px-3 py-1 text-sm text-ink-2">
          {domain(project.url)}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-ink">
          Visit
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </span>
      </span>
      <span className="relative block aspect-[16/10] overflow-hidden bg-land">
        <Image
          src={project.screenshot}
          alt={`${project.name} website`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 680px, 92vw"
          className="object-cover object-top transition-transform duration-[1200ms] ease-settle group-hover:scale-[1.02]"
        />
      </span>
    </a>
  );
}

export default function Work() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="work" className="bg-land">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-36">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
          Built for businesses right here.
        </h2>
        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink-2">
          Exclusive Drywall is a client. The others are concept sites I built for local businesses to show what&apos;s
          possible. Pick one to take a look.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <ul className="border-t-2 border-ink">
            {projects.map((p, i) => {
              const on = i === active;
              return (
                <li key={p.name} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={on}
                    className="flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-3 shrink-0 rounded-full transition-[background-color,box-shadow] duration-300 ${
                        on ? "bg-ink shadow-[0_0_0_4px_var(--land),0_0_0_6px_var(--ink)]" : "bg-ink-3"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className={`block text-xl leading-tight font-bold transition-colors ${on ? "text-ink" : "text-ink-2"}`}>
                        {p.name}
                      </span>
                      <span className="text-[0.95rem] text-ink-2">
                        {p.category}
                        <span aria-hidden="true" className="mr-2 ml-1">
                          ·
                        </span>
                        {"client" in p ? <span className="font-bold text-ink">Client</span> : "Concept site"}
                      </span>
                    </span>
                  </button>
                  {on && (
                    <div className="pb-7 lg:hidden">
                      <p className="mb-5 text-[1.02rem] leading-relaxed text-ink-2">{p.description}</p>
                      <Browser project={p} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Browser project={current} priority={false} />
            <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-relaxed text-ink-2">{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
