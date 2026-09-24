import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

const values = [
  { title: "Local first", body: "I live and work in Rochester. I know the market because it's my market too." },
  { title: "A direct line to me", body: "No account managers or hand-offs. You work with me from start to finish." },
  { title: "No templates", body: "Your business is unique. Every site is designed and written from scratch." },
  { title: "Here after launch", body: "Need a change, a new page, or have a question? I'm a text or call away." },
];

// A recreation of the Alpaca Digital business card. Type scales with the card itself
// (container units), so it reads the same at full width or tucked beside a photo.
function BusinessCard() {
  return (
    <div className="@container relative aspect-[1.75/1] w-full overflow-hidden rounded-2xl bg-navy-900 bg-[radial-gradient(ellipse_at_30%_20%,#123a63_0%,transparent_65%)] p-[7%] text-white shadow-[0_40px_80px_-30px_rgba(3,20,42,0.6)]">
      <div aria-hidden className="absolute -right-[18%] -top-[45%] aspect-square w-[55%] rounded-full border border-teal-400/40" />
      <div aria-hidden className="absolute -bottom-[55%] -left-[18%] aspect-square w-[55%] rounded-full border border-teal-400/30 bg-navy-800/50" />
      <div className="relative flex h-full items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-display text-[clamp(1.2rem,6.6cqw,2.4rem)] font-extrabold leading-none tracking-[-0.01em]">
            {site.founder}
          </p>
          <p className="mt-1.5 text-[clamp(0.75rem,2.8cqw,1rem)] tracking-[0.08em] text-white/85">Founder</p>
          <ul className="mt-[8%] space-y-[0.55em] text-[clamp(0.65rem,2.75cqw,0.95rem)]">
            <li className="flex items-center gap-2.5">
              <Phone className="size-[1.1em] text-teal-400" aria-hidden /> {site.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-[1.1em] text-teal-400" aria-hidden /> {site.email}
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="size-[1.1em] text-teal-400" aria-hidden /> alpacadigital.co
            </li>
          </ul>
        </div>
        <Image
          src="/alpaca-mark.png"
          alt=""
          width={625}
          height={988}
          className="h-[78%] w-auto shrink-0 self-end"
        />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-xl lg:order-last">
          {site.founderPhoto ? (
            <div className="relative pb-16 pl-6 sm:pl-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist shadow-[0_40px_80px_-40px_rgba(3,20,42,0.5)]">
                <Image
                  src={site.founderPhoto}
                  alt={`${site.founder}, founder of ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[68%] -rotate-3 transition-transform duration-500 hover:rotate-0">
                <BusinessCard />
              </div>
            </div>
          ) : (
            <div className="-rotate-2 transition-transform duration-500 hover:rotate-0">
              <BusinessCard />
            </div>
          )}
        </div>

        <div className="reveal">
          <p className="eyebrow text-teal-700">About</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
            Hi, I&apos;m {site.founderFirstName}.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-body">
            <p>
              I started Alpaca Digital because I kept seeing great local businesses stuck with
              outdated websites that didn&apos;t do them justice and weren&apos;t bringing in
              customers. A website should be one of the hardest-working parts of your business, not
              a digital business card nobody sees.
            </p>
            <p>
              I keep my client list small on purpose. When you work with me, you&apos;re not handed
              off to a junior designer or lost in a queue. You get my full attention from the first
              call through launch and beyond.
            </p>
          </div>

          <div className="mt-9">
            <p aria-hidden className="-rotate-3 font-hand text-6xl font-bold leading-none text-teal-700">
              {site.founderFirstName}
            </p>
            <p className="mt-4 text-sm text-body">
              <span className="font-semibold text-ink">{site.founder}</span> · Founder, {site.name}
            </p>
          </div>

          <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-10 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-teal-500 pl-4">
                <dt className="font-display font-bold text-navy-900">{v.title}</dt>
                <dd className="mt-1 text-[0.95rem] leading-relaxed text-body">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
