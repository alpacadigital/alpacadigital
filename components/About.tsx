import type { ReactNode } from "react";
import Image from "next/image";
import { site, telHref } from "@/lib/site";

function Row({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-center gap-4 border-b border-rule py-3.5 last:border-b-0">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-land text-ink" aria-hidden="true">
        {icon}
      </span>
      <span className="text-[1.02rem] text-ink">{children}</span>
    </li>
  );
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:py-36">
        <div className="relative mx-auto w-full max-w-[30rem] lg:mx-0">
          <Image
            src="/gates.png"
            alt="Gates Jones, founder of Alpaca Digital"
            width={800}
            height={800}
            sizes="(min-width: 1024px) 480px, 90vw"
            className="aspect-square w-full rounded-[28px] object-cover"
          />
          <div className="panel absolute right-4 -bottom-6 left-4 rounded-2xl bg-paper px-5 py-4 sm:right-auto sm:left-6 sm:w-72">
            <p className="text-lg leading-tight font-bold text-ink">{site.owner}</p>
            <p className="text-ink-2">Founder, Alpaca Digital</p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
            Hi, I&apos;m Gates. You&apos;ll work with me directly.
          </h2>
          <div className="mt-7 max-w-[36rem] space-y-5 text-[1.08rem] leading-relaxed text-ink-2">
            <p>
              I started Alpaca Digital because I kept seeing great local businesses stuck with websites that
              didn&apos;t bring them customers. Some looked dated. Others looked fine but never showed up when
              people searched.
            </p>
            <p>
              So I do the whole job: the site, the words on it, the SEO, and your Google Business Profile. When all
              of it points the same way, more people find you and more of them call.
            </p>
            <p>
              There&apos;s no account manager or support queue in between. If something on your site needs to change
              after launch, you text me and I fix it.
            </p>
          </div>

          <ul className="mt-9 max-w-[36rem] border-t-2 border-ink">
            <Row
              icon={
                <svg {...iconProps}>
                  <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              }
            >
              Based in {site.city}
            </Row>
            <Row
              icon={
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              }
            >
              <a href={`mailto:${site.email}`} className="font-semibold underline decoration-rule underline-offset-4 hover:decoration-ink">
                {site.email}
              </a>
            </Row>
            {site.phone && (
              <Row
                icon={
                  <svg {...iconProps}>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                }
              >
                <a href={telHref(site.phone)} className="font-semibold underline decoration-rule underline-offset-4 hover:decoration-ink">
                  {site.phone}
                </a>{" "}
                <span className="text-ink-2">(call or text)</span>
              </Row>
            )}
            <Row
              icon={
                <svg {...iconProps}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              }
            >
              Replies within one business day
            </Row>
          </ul>
        </div>
      </div>
    </section>
  );
}
