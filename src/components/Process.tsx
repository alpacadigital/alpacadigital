const steps = [
  {
    title: "Free audit and strategy call",
    body: "I review your current website, Google Business Profile, and where you rank against local competitors, then show you exactly where you're losing customers. Free, no pressure.",
  },
  {
    title: "Custom design and build",
    body: "I design and write your site around your business and your customers. You review everything and request changes before anything goes live.",
  },
  {
    title: "Launch and optimize",
    body: "Your site goes live with SEO built in from day one, and I get your Google Business Profile fully set up and optimized.",
  },
  {
    title: "Grow from there",
    body: "I stay on as your go-to for updates, new pages, and ongoing improvements, so you keep showing up and keep getting calls.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-teal-700">How it works</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
            From first call to a phone that rings.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            A straightforward process with no tech jargon and no runaround. You&apos;ll always know
            what&apos;s happening and what comes next.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-navy-900 px-7 py-4 font-display font-bold text-white transition-colors hover:bg-navy-800"
          >
            Start with a free audit
          </a>
        </div>

        <ol className="reveal relative space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl bg-mist p-7 ring-1 ring-line sm:p-8"
            >
              <span className="w-12 font-display text-4xl font-extrabold leading-none tabular-nums text-teal-500 sm:w-14">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
