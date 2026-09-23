import { FileText, MapPin, PhoneIncoming, Search, Star } from "lucide-react";
import type { ReactNode } from "react";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3 fill-[#fbbc04] text-[#fbbc04]" />
      ))}
    </span>
  );
}

function SearchMock() {
  return (
    <div className="flex items-center gap-2.5 rounded-full bg-white px-4 py-3 text-sm text-ink shadow-lg">
      <Search className="size-4 text-body" aria-hidden />
      <span className="truncate">roofer near me</span>
      <span className="ml-[-6px] h-4 w-px animate-pulse bg-ink" aria-hidden />
    </div>
  );
}

function MapPackMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-ink shadow-lg">
      <div className="relative h-9 bg-[#e8eef3] bg-[linear-gradient(90deg,#d6dee6_1px,transparent_1px),linear-gradient(#d6dee6_1px,transparent_1px)] bg-[size:18px_18px]">
        <MapPin className="absolute left-1/2 top-1.5 size-5 -translate-x-1/2 fill-[#ea4335] text-white" aria-hidden />
      </div>
      <div className="space-y-2.5 p-2.5">
        <div className="flex items-center justify-between rounded-lg bg-teal-500/10 p-2 ring-1 ring-teal-500/40">
          <div>
            <p className="text-xs font-bold">Your Business</p>
            <div className="mt-1 flex items-center gap-1.5 text-[0.65rem] text-body">
              4.9 <Stars /> (87)
            </div>
          </div>
          <span className="rounded bg-teal-600 px-1.5 py-0.5 font-display text-[0.6rem] font-bold text-white">
            #1
          </span>
        </div>
        <div className="space-y-1.5 px-2 pb-1 opacity-60">
          <div className="h-2 w-2/3 rounded bg-[#d9e0e7]" />
          <div className="h-2 w-1/3 rounded bg-[#e6ebf0]" />
        </div>
      </div>
    </div>
  );
}

function SiteMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="flex items-center justify-between bg-navy-800 px-3 py-2">
        <div className="h-2 w-12 rounded bg-white/70" />
        <div className="h-4 w-14 rounded-full bg-teal-500" />
      </div>
      <div className="space-y-2 p-3.5">
        <div className="h-2.5 w-4/5 rounded bg-navy-900" />
        <div className="h-2.5 w-3/5 rounded bg-navy-900" />
        <div className="h-1.5 w-full rounded bg-[#e2e8ef]" />
        <div className="h-1.5 w-5/6 rounded bg-[#e2e8ef]" />
        <div className="flex items-center justify-between gap-2 pt-1.5">
          <span className="whitespace-nowrap rounded-full bg-teal-500 px-2.5 py-1 font-display text-[0.6rem] font-bold text-navy-950">
            Get a free quote
          </span>
          <Stars />
        </div>
      </div>
    </div>
  );
}

function LeadMock() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#34a853]/15 text-[#1e8e3e]">
          <PhoneIncoming className="size-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold text-ink">Incoming call</p>
          <p className="truncate text-[0.7rem] text-body">From Google Maps</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-700">
          <FileText className="size-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold text-ink">New quote request</p>
          <p className="truncate text-[0.7rem] text-body">From your website</p>
        </div>
      </div>
    </div>
  );
}

const steps: { title: string; body: string; mock: ReactNode }[] = [
  {
    title: "They search",
    body: "A customer nearby needs what you offer and pulls out their phone.",
    mock: <SearchMock />,
  },
  {
    title: "They find you",
    body: "Your optimized Google profile and SEO put you at the top of the results.",
    mock: <MapPackMock />,
  },
  {
    title: "They trust you",
    body: "A professional site with real reviews and real work shows you're the right call.",
    mock: <SiteMock />,
  },
  {
    title: "They reach out",
    body: "One tap to call or a quick quote form, and the lead lands with you.",
    mock: <LeadMock />,
  },
];

export function LeadPath() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="absolute -right-48 top-1/2 size-[40rem] -translate-y-1/2 rounded-full border border-teal-400/20"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-teal-400">How leads happen</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Every new customer follows the same path. I build every step of it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            If any step is missing, like a Google profile nobody sees or a site that&apos;s hard to
            use on a phone, that customer calls your competitor instead.
          </p>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10"
            >
              <div className="flex h-48 flex-col justify-center overflow-hidden rounded-xl bg-gradient-to-b from-navy-700/70 to-navy-800/40 px-5">
                {s.mock}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-7 place-items-center rounded-full bg-teal-500 font-display text-xs font-extrabold text-navy-950">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-white/65">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
