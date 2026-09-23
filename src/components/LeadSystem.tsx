import { Check, MapPin, MonitorSmartphone, Search } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "A website built to convert",
    body: "Designed around your business, your services, and your customers. Every page is built to turn a visitor into a phone call or a quote request.",
    points: [
      "Custom design and copywriting",
      "Mobile-first and fast-loading",
      "Click-to-call, quote forms, and clear next steps",
      "Your reviews and real work front and center",
    ],
  },
  {
    icon: Search,
    title: "SEO that gets you found",
    body: "When someone nearby searches for what you do, your business should be one of the first names they see, not buried on page three.",
    points: [
      "Keyword research for your services and area",
      "Dedicated service and service-area pages",
      "Technical SEO, site speed, and structured data",
      "Google Search Console setup",
    ],
  },
  {
    icon: MapPin,
    title: "A Google profile that ranks",
    body: "For local searches, the map results get the calls. I optimize your Google Business Profile so you show up there and stand out when you do.",
    points: [
      "Complete profile setup and optimization",
      "Categories, services, photos, and posts",
      "A simple system for earning more 5-star reviews",
      "Consistent listings across the web",
    ],
  },
];

export function LeadSystem() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-teal-700">The difference</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
              Other designers hand you a website. I hand you a way to get customers.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-body lg:justify-self-end">
            A good-looking site is only one piece. To bring in leads, customers have to{" "}
            <strong className="font-semibold text-ink">find you</strong> on Google,{" "}
            <strong className="font-semibold text-ink">trust</strong> what they see, and have an{" "}
            <strong className="font-semibold text-ink">easy way to reach you</strong>. I build all
            three, tailored to your business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-2xl border border-line bg-mist p-8 transition-colors hover:border-teal-500/40 hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-navy-900 text-teal-400">
                  <p.icon className="size-6" aria-hidden />
                </span>
                <span className="font-display text-sm font-bold tracking-widest text-navy-900/25">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.01em] text-navy-900">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">{p.body}</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[0.95rem] text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal-600" strokeWidth={3} aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
