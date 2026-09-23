import {
  MapPinned,
  MousePointerClick,
  PenTool,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Store,
} from "lucide-react";

const items = [
  { icon: PenTool, title: "Custom design and copy", body: "Built from scratch around your brand, with words written to sell your services." },
  { icon: Smartphone, title: "Mobile-first and fast", body: "Most of your customers are on their phone. Your site will look and load great there." },
  { icon: Search, title: "On-page and technical SEO", body: "Clean code, fast load times, and content structured the way Google wants it." },
  { icon: MapPinned, title: "Service-area pages", body: "Show up in the towns you serve, not just the city your office is in." },
  { icon: Store, title: "Google Business Profile", body: "Full setup and optimization so you compete in the map results." },
  { icon: Star, title: "Review growth", body: "A simple, repeatable way to ask happy customers for 5-star reviews." },
  { icon: MousePointerClick, title: "Lead capture", body: "Quote forms, click-to-call, and clear calls to action on every page." },
  { icon: ShieldCheck, title: "Hosting and support", body: "Secure hosting, updates, and a real person to call when you need a change." },
];

export function Included() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-teal-700">Everything included</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
            One partner for your whole online presence.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            No juggling a web designer, an SEO agency, and a marketing guy. Every project is tailored
            to your business, and here&apos;s what you can count on.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="-mb-px -mr-px border-b border-r border-line p-7 transition-colors hover:bg-mist"
            >
              <item.icon className="size-6 text-teal-600" aria-hidden />
              <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
