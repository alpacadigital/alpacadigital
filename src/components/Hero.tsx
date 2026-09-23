import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Arcs } from "./Arcs";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";
import { site } from "@/lib/site";

const proof = [
  "Custom-built, never a template",
  "SEO + Google Business Profile included",
  "You work directly with the founder",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-900 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,#123a63_0%,transparent_60%)] pb-20 pt-32 text-white sm:pt-40 lg:pb-28"
    >
      <Arcs />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <p className="eyebrow text-teal-400">Rochester, MN · Web design + local SEO</p>
          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-[4.25rem]">
            Websites that bring in <span className="whitespace-nowrap text-teal-400">more leads.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Most web designers hand you a nice-looking site and walk away. I build the whole
            system: a professional website tailored to your business, SEO that gets you found,
            and a Google Business Profile that climbs the map. The goal is simple: more calls
            and more customers.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 font-display font-bold text-navy-950 transition-colors hover:bg-teal-400"
            >
              Get a free website audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display font-bold text-white ring-1 ring-white/25 transition-colors hover:bg-white/5 hover:ring-white/40"
            >
              <Phone className="size-4 text-teal-400" aria-hidden />
              {site.phone}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-[0.95rem] text-white/80 sm:grid-cols-1">
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-teal-500/15">
                  <Check className="size-3.5 text-teal-400" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[40rem] lg:mx-0">
          <div className="relative">
            <BrowserFrame url="exclusivedrywallcompany.com" className="lg:translate-x-6">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/work/exclusive-drywall-desktop.webp"
                  alt="Homepage of the Exclusive Drywall Company website built by Alpaca Digital"
                  fill
                  preload
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </BrowserFrame>
            <PhoneFrame
              src="/work/exclusive-drywall-mobile.webp"
              alt="Exclusive Drywall Company website on a phone"
              className="absolute -bottom-12 -left-3 w-[26%] min-w-24 sm:-left-8"
              sizes="160px"
            />
          </div>
          <a
            href="#work"
            className="ml-auto mt-16 flex w-fit items-center gap-2 text-right text-sm text-white/60 transition-colors hover:text-white sm:mt-6"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-teal-400" />
            Recent project: Exclusive Drywall Company, Rochester MN
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
