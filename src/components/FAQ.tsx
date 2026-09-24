import { Plus } from "lucide-react";

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Every business is different, so I don't sell one-size-fits-all packages. After your free audit, I'll give you a clear, flat quote based on what your business actually needs. No surprises.",
  },
  {
    q: "How long does it take to launch?",
    a: "It depends on the size of the site and how quickly we can gather your photos and details. I'll give you a realistic timeline up front, before any work starts.",
  },
  {
    q: "I already have a website. Can you just help with SEO or my Google profile?",
    a: "Yes. If your current site is in good shape, I can focus on SEO and your Google Business Profile. If your site is holding you back, I'll tell you honestly.",
  },
  {
    q: "What is a Google Business Profile, and why does it matter?",
    a: "It's the listing that appears on Google Maps and in the map results when someone searches for a business like yours. For local businesses, it's often the first place new customers find you, and a complete, active profile with steady reviews is a big part of ranking higher.",
  },
  {
    q: "Do I need to write the content myself?",
    a: "No. I write the copy for you based on a conversation about your business, your services, and your customers. You just review it and tell me what to change.",
  },
  {
    q: "What happens after my site launches?",
    a: "I don't disappear. I'm your go-to for updates, new pages, and questions, and I can keep working on your SEO and Google profile so you keep climbing.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow text-teal-700">FAQ</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Don&apos;t see yours? Just ask. I&apos;m happy to talk it through.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-lg font-bold text-navy-900">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white ring-1 ring-line transition-transform group-open:rotate-45">
                  <Plus className="size-4 text-teal-700" aria-hidden />
                </span>
              </summary>
              <p className="pb-5 pr-12 leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
