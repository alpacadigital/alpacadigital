const stops = [
  {
    title: "Free visibility audit",
    body: "I check where you rank on the map, how your Google Business Profile looks, your website, and who's showing up ahead of you.",
  },
  {
    title: "A plan in plain English",
    body: "I tell you what to fix first to get the most calls and what it'll take to do it.",
  },
  {
    title: "Build and fix",
    body: "I build or rebuild your site, clean up your profile, and set up your SEO so they all work together.",
  },
  {
    title: "I stick around",
    body: "After launch I handle updates and new pages, and you can call or text me with questions.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-land">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-36">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
          How I get you on the map.
        </h2>

        <ol className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* The route: vertical on phones, across on desktop */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[13px] w-[14px] rounded-full bg-street ring-[1.5px] ring-casing lg:top-[13px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-[14px] lg:w-auto"
          >
            <span className="route-draw absolute inset-1 rounded-full bg-route" />
          </span>
          {stops.map((stop, i) => (
            <li key={stop.title} className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-5 lg:block">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border-[3px] border-route bg-paper font-bold text-route tabular">
                {i + 1}
              </span>
              <div className="lg:mt-7 lg:pr-4">
                <h3 className="text-[1.35rem] leading-tight font-bold text-ink">{stop.title}</h3>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-ink-2">{stop.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-5 border-t-2 border-ink pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-bold text-ink">Step one is free, and you&apos;ll learn something either way.</p>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 rounded-full bg-route px-7 py-4 font-bold text-route-ink transition-transform duration-300 ease-settle hover:-translate-y-0.5"
          >
            Get my free visibility audit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
