import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";
import { Arrow } from "./Hand";

const built = [
  "A story-driven About section that introduces Marco and the family behind the business",
  "Six service sections: drywall, taping and finishing, painting, flooring, trim, and texture",
  "A project gallery that lets the work speak for itself",
  "Real 5-star Google and Facebook reviews featured on the homepage",
  "Service-area coverage for Rochester and seven surrounding SE Minnesota cities",
  "Lead capture everywhere: free-estimate form, click-to-call, and live chat",
  "Search-optimized page titles and local keywords targeting drywall searches in Rochester",
];

export function CaseStudy() {
  return (
    <section id="work" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-teal-700">Featured work</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy-900 sm:text-5xl">
              Exclusive Drywall Company
            </h2>
            <p className="mt-3 text-lg text-body">Family-owned drywall contractor · Rochester, MN</p>
          </div>
          <a
            href="https://www.exclusivedrywallcompany.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 font-display text-sm font-bold text-navy-900 ring-1 ring-line transition-colors hover:ring-navy-900/30 sm:self-auto"
          >
            Visit the live site
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="reveal relative pb-10 pr-6 sm:pr-16">
            <BrowserFrame url="exclusivedrywallcompany.com" className="group">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/work/exclusive-drywall-full.webp"
                  alt="Full homepage of the Exclusive Drywall Company website: hero, services, project gallery, reviews, service area, and estimate form"
                  fill
                  sizes="(min-width: 1024px) 700px, 100vw"
                  className="object-cover object-top transition-[object-position] duration-[9s] ease-in-out group-hover:object-bottom motion-reduce:transition-none"
                />
              </div>
            </BrowserFrame>
            <PhoneFrame
              src="/work/exclusive-drywall-mobile.webp"
              alt="Exclusive Drywall Company website on mobile"
              className="absolute bottom-0 right-0 w-[24%] min-w-24"
              sizes="180px"
            />
            <p className="mt-3 hidden items-end gap-2 pl-4 font-hand text-2xl font-medium text-teal-700 sm:flex">
              <Arrow className="w-11 -rotate-45" />
              <span className="-rotate-2">hover to scroll the whole homepage</span>
            </p>
          </div>

          <div className="reveal">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-900/50">
              The goal
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              Marco and his family had built a strong business on word-of-mouth referrals and loyal
              customers. They needed a website that looks as professional as their work and turns
              local searches into free-estimate requests.
            </p>

            <h3 className="mt-10 font-display text-sm font-bold uppercase tracking-[0.18em] text-navy-900/50">
              What I built
            </h3>
            <ul className="mt-4 space-y-3.5">
              {built.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-body">
                  <Check className="mt-1 size-4 shrink-0 text-teal-600" strokeWidth={3} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 font-display font-bold text-navy-900"
            >
              <span className="border-b-2 border-teal-500 pb-0.5">Want a site like this for your business?</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
