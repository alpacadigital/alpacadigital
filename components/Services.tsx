function SearchSymbol() {
  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="14" className="fill-land" />
      <path d="M2 44C20 40 40 42 62 34" className="stroke-[var(--highway-casing)]" strokeWidth="9" fill="none" />
      <path d="M2 44C20 40 40 42 62 34" className="stroke-[var(--highway)]" strokeWidth="6" fill="none" />
      <circle cx="28" cy="26" r="11" className="fill-paper stroke-ink" strokeWidth="3" />
      <path d="M36 34l9 9" className="stroke-ink" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function ProfileSymbol() {
  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="14" className="fill-land" />
      <path d="M2 22H62M2 44H62M22 2V62M44 2V62" className="stroke-street" strokeWidth="3" />
      <rect x="45.5" y="23.5" width="15" height="19" rx="2" className="fill-park" />
      <path d="M32 50C29 43 21 38 21 30A11 11 0 1 1 43 30C43 38 35 43 32 50Z" className="fill-ink stroke-paper" strokeWidth="2" />
      <text x="32" y="34.5" textAnchor="middle" className="fill-paper text-[13px] font-bold">
        1
      </text>
    </svg>
  );
}

function SiteSymbol() {
  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="14" className="fill-land" />
      <rect x="19" y="8" width="26" height="48" rx="5" className="fill-paper stroke-ink" strokeWidth="3" />
      <path d="M24 17h16M24 22h11" className="stroke-ink-3" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="23" y="40" width="18" height="8" rx="4" className="fill-ink" />
    </svg>
  );
}

const entries = [
  {
    Symbol: SearchSymbol,
    name: "Local SEO",
    job: "Show up when they search.",
    body: "I find out what people around here actually type, then build the pages and fix the technical side so Google knows exactly what you do and where you do it.",
    handles: "That covers keyword research, service pages, site speed, page titles, schema, and making sure your business info matches everywhere online.",
  },
  {
    Symbol: ProfileSymbol,
    name: "Google Business Profile",
    job: "Get into the map pack.",
    body: "The map with three businesses at the top of local results is where a lot of calls start. I fill out and clean up your profile and keep it active, which gives you a real shot at one of those spots.",
    handles: "I also pick the right categories and services, add photos and posts, and help you get more reviews from happy customers.",
  },
  {
    Symbol: SiteSymbol,
    name: "Your website",
    job: "Turn the visit into a call.",
    body: "I design a fast site for phones and write the words on it, so visitors can call, book, or ask for a quote in one tap.",
    handles: "I also handle hosting and keep the site updated after launch.",
  },
];

function PinKey({ form }: { form: "solid" | "outline" | "dashed" }) {
  return (
    <svg width="22" height="30" viewBox="-12 -32 24 34" aria-hidden="true">
      <path
        d="M0 0C-3 -8 -11 -12 -11 -20A11 11 0 1 1 11 -20C11 -12 3 -8 0 0Z"
        className={form === "solid" ? "fill-ink" : "fill-paper stroke-ink"}
        strokeWidth="2.2"
        strokeDasharray={form === "dashed" ? "4 3" : undefined}
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:py-36">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
            Three things decide who gets the call.
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-ink-2">
            A good-looking website doesn&apos;t help if nobody finds it, and a top spot on the map is wasted if the
            website sends people away. I handle all three so they work together.
          </p>
          <div className="mt-10 max-w-[30rem] rounded-2xl border border-rule p-5">
            <p className="text-sm font-bold text-ink">Reading the map at the top of this page</p>
            <ul className="mt-3 grid gap-2.5 text-[0.95rem] text-ink-2">
              <li className="flex items-center gap-3">
                <PinKey form="solid" /> In the top three: the first businesses people see.
              </li>
              <li className="flex items-center gap-3">
                <PinKey form="outline" /> Showing up, but below the top three.
              </li>
              <li className="flex items-center gap-3">
                <PinKey form="dashed" /> Buried. People scroll past before they get to you.
              </li>
            </ul>
          </div>
        </div>

        <ol className="border-t-2 border-ink">
          {entries.map(({ Symbol, name, job, body, handles }) => (
            <li key={name} className="grid gap-5 border-b border-rule py-9 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-7 lg:py-11">
              <Symbol />
              <div>
                <h3 className="font-display text-[2rem] leading-none font-extrabold text-ink uppercase sm:text-[2.4rem]">
                  {name}
                </h3>
                <p className="mt-2 text-xl font-bold text-ink">{job}</p>
                <p className="mt-3 max-w-[38rem] text-[1.05rem] leading-relaxed text-ink-2">{body}</p>
                <p className="mt-3 max-w-[38rem] text-[1.05rem] leading-relaxed text-ink-2">{handles}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
