const faqs = [
  {
    q: "How much does it cost?",
    a: "It depends on what your business needs. Some businesses need a new website, and others only need their Google Business Profile fixed. The audit is free, and after it I'll give you a straight quote for the work that would make the biggest difference.",
  },
  {
    q: "Can you guarantee I'll be #1 on Google?",
    a: "No, and nobody can honestly promise that, because Google decides the rankings. What I can do is fix the things Google looks at, like your profile, your reviews, your website, and whether your business info matches everywhere. Then I show you where you stand with real numbers from Google.",
  },
  {
    q: "How long until I see results?",
    a: "Some fixes, like a broken contact form or a missing phone number, help the day they go live. Rankings usually take a few months to move. After the audit I'll tell you what to expect for your business.",
  },
  {
    q: "I already have a website. Do I need a new one?",
    a: "Not always. If your site loads fast on a phone and makes it easy to call you, I'll leave it alone and work on your Google presence instead. The audit shows which one is holding you back.",
  },
  {
    q: "Do you only work with Rochester businesses?",
    a: "I'm based in Rochester and most of my work is local search, so nearby businesses are where I can help the most. If you're somewhere else, send me your business anyway and I'll tell you honestly whether I'm a good fit.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:py-36">
        <h2 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase lg:sticky lg:top-28 lg:self-start">
          Questions owners ask me.
        </h2>
        <div className="border-t-2 border-ink">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-bold text-ink [&::-webkit-details-marker]:hidden">
                {q}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="shrink-0 text-ink-2 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-[40rem] pb-7 text-[1.05rem] leading-relaxed text-ink-2">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
