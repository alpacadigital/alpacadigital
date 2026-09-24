import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Arcs } from "./Arcs";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";
import { FounderAvatar } from "./FounderAvatar";
import { Arrow, Underline } from "./Hand";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-900 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,#123a63_0%,transparent_60%)] pb-20 pt-32 text-white sm:pt-40 lg:pb-28"
    >
      <Arcs />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <p className="eyebrow text-teal-400">
            <span>
              Rochester, MN<span className="hidden sm:inline"> · Web design + local SEO</span>
            </span>
          </p>
          <h1 className="mt-6 text-wrap font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-6xl lg:text-[4.25rem]">
            Websites that bring in{" "}
            <span className="relative inline-block whitespace-nowrap text-teal-400">
              more leads.
              <Underline className="draw absolute -bottom-3 left-0 w-full text-teal-400/70 sm:-bottom-4" />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Most web designers hand you a nice-looking site and walk away. I build the whole
            system: a professional website tailored to your business, SEO that gets you found,
            and a Google Business Profile that climbs the map. The goal is simple: more calls
            and more customers.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-5 py-4 font-display font-bold text-navy-950 shadow-[0_12px_32px_-12px_rgba(0,184,186,0.8)] transition-colors hover:bg-teal-400 sm:px-7"
            >
              Get a free website audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="relative">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display font-bold text-white ring-1 ring-white/25 transition-colors hover:bg-white/5 hover:ring-white/40"
              >
                <Phone className="size-4 text-teal-400" aria-hidden />
                {site.phone}
              </a>
              <p className="pointer-events-none absolute right-3 top-full mt-1 flex items-start gap-1 whitespace-nowrap font-hand text-[1.4rem] font-medium leading-none text-teal-300 sm:left-1/3 sm:right-auto">
                <Arrow className="draw -mt-1.5 w-10 -scale-x-100 rotate-45" />
                <span className="mt-4 -rotate-3">goes straight to me</span>
              </p>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-4 border-t border-white/10 pt-7 sm:mt-16">
            <FounderAvatar
              className="size-14 text-lg ring-2 ring-teal-400/70 ring-offset-2 ring-offset-navy-900"
              sizes="56px"
            />
            <div>
              <p className="text-balance leading-relaxed text-white/85">
                I design, write, and build every site myself. No templates, no hand-offs.
              </p>
              <p className="mt-0.5 text-sm text-white/55">
                <span className="font-semibold text-white">{site.founder}</span> · Founder,{" "}
                {site.name}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[40rem] lg:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-x-0 top-1/4 -z-10 h-2/3 rounded-full bg-teal-500/15 blur-3xl"
            />
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
            className="ml-auto mt-16 flex w-fit items-center gap-2 text-right text-sm text-white/60 transition-colors hover:text-white xl:mt-6"
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
