"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import Image from "next/image";
import { site, telHref } from "@/lib/site";

type Pin = { id: string; x: number; y: number };

// Pin tips in RochesterMap's 1600x1000 space.
const PINS: Pin[] = [
  { id: "you", x: 1080, y: 624 },
  { id: "a", x: 1010, y: 720 },
  { id: "b", x: 880, y: 520 },
  { id: "c", x: 960, y: 400 },
  { id: "d", x: 1200, y: 768 },
  { id: "e", x: 840, y: 672 },
  { id: "f", x: 1330, y: 730 },
  { id: "g", x: 780, y: 440 },
  { id: "h", x: 1130, y: 880 },
];

const ORDER = {
  buried: ["a", "b", "c", "d", "e", "f", "g", "h", "you"],
  found: ["you", "a", "b", "c", "d", "e", "f", "g", "h"],
};

// Share of searchers each rank pulls in. The one motion law on the page.
const PULL = [0.46, 0.24, 0.14, 0.05, 0.04, 0.03, 0.02, 0.01, 0.01];

const QUERIES = [
  "drywall contractor near me",
  "dentist rochester mn",
  "eye doctor near me",
  "bar and grill near me",
  "family dentist accepting new patients",
];

const scaleFor = (rank: number, you: boolean) => (you && rank === 1 ? 1.3 : rank <= 3 ? 1.12 : 0.9);
const headY = (pin: Pin, s: number) => pin.y - 26 * s;

function MapPin({ pin, rank }: { pin: Pin; rank: number }) {
  const you = pin.id === "you";
  const form = rank <= 3 ? "solid" : rank <= 8 ? "outline" : "dashed";
  const color = you ? "var(--route)" : "var(--ink)";
  const s = scaleFor(rank, you);
  return (
    <g transform={`translate(${pin.x} ${pin.y})`}>
      <g
        style={{ transform: `scale(${s})` }}
        className="transition-transform duration-700 ease-settle"
      >
        <ellipse cx="0" cy="0" rx="7" ry="2.5" fill="var(--ink)" opacity="0.18" />
        <path
          d="M0 0C-4 -10 -14 -16 -14 -26A14 14 0 1 1 14 -26C14 -16 4 -10 0 0Z"
          style={{
            fill: form === "solid" ? color : "var(--paper)",
            fillOpacity: form === "dashed" ? 0.7 : 1,
            stroke: form === "solid" ? "var(--paper)" : color,
            strokeWidth: form === "solid" ? 2 : 2.5,
          }}
          strokeDasharray={form === "dashed" ? "4 3" : undefined}
          className="transition-[fill,stroke] duration-500"
        />
        {form === "solid" ? (
          <text
            y="-21.5"
            textAnchor="middle"
            className="text-[13px] font-bold tabular"
            fill={you ? "var(--route-ink)" : "var(--paper)"}
          >
            {rank}
          </text>
        ) : (
          <circle cy="-26" r="4.5" fill={color} opacity={form === "dashed" ? 0.5 : 1} />
        )}
      </g>
      {you && (
        <g
          className="transition-opacity duration-500"
          style={{ opacity: rank === 1 ? 1 : 0 }}
          transform="translate(-24 -44)"
        >
          <rect x="-146" y="-16" width="140" height="32" rx="16" fill="var(--route)" />
          <text x="-76" y="5.5" textAnchor="middle" className="text-[14px] font-bold" fill="var(--route-ink)">
            Your business
          </text>
        </g>
      )}
    </g>
  );
}

function Searchers({ ranksRef }: { ranksRef: RefObject<Record<string, number>> }) {
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = groupRef.current;
    if (!g || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const svg = g.ownerSVGElement!;
    const NS = "http://www.w3.org/2000/svg";

    const pickTarget = () => {
      const ranks = ranksRef.current;
      let r = Math.random();
      for (let i = 0; i < PULL.length; i++) {
        r -= PULL[i];
        if (r <= 0) return PINS.find((p) => ranks[p.id] === i + 1)!;
      }
      return PINS[0];
    };

    type Dot = { el: SVGCircleElement; x0: number; y0: number; pin: Pin; t0: number; dur: number };
    const spawn = (el: SVGCircleElement, now: number): Dot => ({
      el,
      x0: 720 + Math.random() * 840,
      y0: 120 + Math.random() * 820,
      pin: pickTarget(),
      t0: now + Math.random() * 2600,
      dur: 2600 + Math.random() * 1800,
    });

    const ping = (pin: Pin) => {
      const s = scaleFor(ranksRef.current[pin.id], pin.id === "you");
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", String(pin.x));
      c.setAttribute("cy", String(headY(pin, s)));
      c.setAttribute("r", "14");
      c.setAttribute("fill", "none");
      c.setAttribute("stroke", pin.id === "you" ? "var(--route)" : "var(--ink-2)");
      c.setAttribute("stroke-width", "2");
      c.style.transformBox = "fill-box";
      c.style.transformOrigin = "center";
      g.appendChild(c);
      c.animate(
        [
          { transform: "scale(0.85)", opacity: 0.7 },
          { transform: "scale(2.4)", opacity: 0 },
        ],
        { duration: 900, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
      ).onfinish = () => c.remove();
    };

    // Dots start once the page has loaded so they never compete with first paint.
    let dots: Dot[] = [];
    const makeDots = () => {
      const now0 = performance.now();
      dots = Array.from({ length: innerWidth < 1024 ? 8 : 14 }, () => {
        const el = document.createElementNS(NS, "circle");
        el.setAttribute("r", "5");
        el.setAttribute("fill", "var(--ink-2)");
        el.setAttribute("stroke", "var(--paper)");
        el.setAttribute("stroke-width", "2");
        el.setAttribute("opacity", "0");
        g.appendChild(el);
        return spawn(el, now0);
      });
    };

    let raf = 0;
    let visible = true;
    let ready = false;
    const frame = (now: number) => {
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const p = (now - d.t0) / d.dur;
        if (p < 0) continue;
        if (p >= 1) {
          ping(d.pin);
          d.el.setAttribute("opacity", "0");
          dots[i] = spawn(d.el, now);
          continue;
        }
        const e = 1 - Math.pow(1 - p, 3);
        const s = scaleFor(ranksRef.current[d.pin.id], d.pin.id === "you");
        d.el.setAttribute("cx", String(d.x0 + (d.pin.x - d.x0) * e));
        d.el.setAttribute("cy", String(d.y0 + (headY(d.pin, s) - d.y0) * e));
        d.el.setAttribute("opacity", String(Math.min(1, p * 8, (1 - p) * 6) * 0.85));
      }
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (ready && visible && document.visibilityState === "visible") raf = requestAnimationFrame(frame);
    };
    let delay: ReturnType<typeof setTimeout>;
    const begin = () => {
      delay = setTimeout(() => {
        makeDots();
        ready = true;
        start();
      }, 1200);
    };
    if (document.readyState === "complete") begin();
    else addEventListener("load", begin, { once: true });
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(svg);
    document.addEventListener("visibilitychange", start);
    start();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(delay);
      removeEventListener("load", begin);
      io.disconnect();
      document.removeEventListener("visibilitychange", start);
      dots.forEach((d) => d.el.remove());
    };
  }, [ranksRef]);

  return <g ref={groupRef} />;
}

function TypedQuery() {
  const [text, setText] = useState(QUERIES[0]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let q = 0;
    let i = QUERIES[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += deleting ? -1 : 1;
      setText(QUERIES[q].slice(0, i));
      let wait = deleting ? 28 : 55 + Math.random() * 40;
      if (deleting && i === 0) {
        deleting = false;
        q = (q + 1) % QUERIES.length;
        wait = 300;
      } else if (!deleting && i === QUERIES[q].length) {
        deleting = true;
        wait = 2400;
      }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="truncate">
      {text}
      <span className="caret ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-route" aria-hidden="true" />
    </span>
  );
}

const ROWS: Record<string, { name: string; meta: (rank: number) => string[] }> = {
  you: {
    name: "Your business",
    meta: (r) => (r === 1 ? ["Top of the map", "Open now"] : ["Buried below the map pack"]),
  },
  a: { name: "Competitor", meta: () => ["0.8 mi", "Open now"] },
  b: { name: "Competitor", meta: () => ["1.4 mi", "Open now"] },
  c: { name: "Competitor", meta: () => ["2.1 mi", "Closes 5 PM"] },
};
const ROW_H = 64;

const Sep = () => (
  <span aria-hidden="true" className="mr-2 ml-1">
    ·
  </span>
);

function RankBadge({ rank, you }: { rank: number; you: boolean }) {
  const solid = rank <= 3;
  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold tabular transition-colors duration-500 ${
        solid
          ? you
            ? "bg-route text-route-ink"
            : "bg-ink text-paper"
          : `border-2 ${rank >= 9 ? "border-dashed" : ""} ${you ? "border-route text-route" : "border-ink-2 text-ink-2"}`
      }`}
    >
      {rank}
    </span>
  );
}

function ResultsCard({
  found,
  setFound,
  ranks,
}: {
  found: boolean;
  setFound: (f: boolean) => void;
  ranks: Record<string, number>;
}) {
  const order = (found ? ORDER.found : ORDER.buried).filter((id) => id in ROWS);
  return (
    <figure className="panel overflow-hidden rounded-2xl bg-paper">

      <div className="flex items-center gap-3 border-b border-rule px-4 py-3.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="shrink-0 text-ink-2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="min-w-0 flex-1 text-[0.98rem] text-ink" aria-hidden="true">
          <TypedQuery />
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-1">
        <span className="text-sm font-semibold text-ink-2">Near {site.city}</span>
        <div className="flex rounded-full bg-land p-1 text-sm font-semibold" role="group" aria-label="Show your business as">
          {(["Buried", "Found"] as const).map((label) => {
            const on = (label === "Found") === found;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => setFound(label === "Found")}
                className={`rounded-full px-3.5 py-1.5 transition-colors duration-300 ${
                  on ? (label === "Found" ? "bg-route text-route-ink" : "bg-ink text-paper") : "text-ink-2 hover:text-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <ol className="relative mx-2 mb-2" style={{ height: ROW_H * 4 }} aria-hidden="true">
        {Object.keys(ROWS).map((id) => {
          const i = order.indexOf(id);
          const rank = ranks[id];
          const you = id === "you";
          return (
            <li
              key={id}
              className={`absolute inset-x-0 top-0 flex items-center gap-3 rounded-xl px-2 transition-transform duration-700 ease-settle ${
                you && rank === 1 ? "bg-route-soft" : ""
              }`}
              style={{ height: ROW_H, transform: `translateY(${i * ROW_H}px)` }}
            >
              <RankBadge rank={rank} you={you} />
              <div className="min-w-0 flex-1">
                <p className={`truncate font-bold leading-tight ${you ? "text-route" : "text-ink"}`}>{ROWS[id].name}</p>
                <p className="truncate text-sm text-ink-2">
                  {ROWS[id].meta(rank).map((part, j) => (
                    <span key={part}>
                      {j > 0 && <Sep />}
                      {part}
                    </span>
                  ))}
                </p>
              </div>
              {you && rank === 1 && (
                <span className="shrink-0 rounded-full bg-route px-3 py-1.5 text-xs font-bold text-route-ink">Call</span>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="border-t border-rule px-4 py-2.5 text-xs text-ink-2">
        Illustration: your business moving up the local results.
      </figcaption>
    </figure>
  );
}

export default function Hero({ map }: { map: ReactNode }) {
  const [found, setFound] = useState(false);
  const touched = useRef(false);
  const order = found ? ORDER.found : ORDER.buried;
  const ranks = Object.fromEntries(order.map((id, i) => [id, i + 1]));
  const ranksRef = useRef(ranks);
  useEffect(() => {
    ranksRef.current = ranks;
  });

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => !touched.current && setFound(true), reduced ? 0 : 1800);
    return () => clearTimeout(t);
  }, []);

  const choose = (f: boolean) => {
    touched.current = true;
    setFound(f);
  };

  return (
    <section className="relative overflow-hidden bg-land lg:min-h-[max(100svh,760px)]">
      {/* Map: a band on phones, the whole stage on desktop */}
      <div className="relative h-80 overflow-hidden lg:absolute lg:inset-0 lg:h-auto">
        <div className="absolute top-[-295px] left-[calc(50%-815px)] h-[700px] w-[1120px] lg:inset-0 lg:h-full lg:w-full">
          {map}
          <svg
            viewBox="0 0 1600 1000"
            preserveAspectRatio="xMaxYMid slice"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M1440 816V624H1080"
              fill="none"
              stroke="var(--route)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray="1"
              style={{ strokeDashoffset: found ? 0 : 1 }}
              className="transition-[stroke-dashoffset] delay-300 duration-[1400ms] ease-settle"
            />
            <g transform="translate(1440 816)">
              <circle r="9" fill="var(--paper)" stroke="var(--route)" strokeWidth="3" />
              <text x="-18" y="5" textAnchor="end" className="text-[13px] font-semibold [paint-order:stroke] stroke-land [stroke-width:4px]" fill="var(--ink)">
                Someone nearby
              </text>
            </g>
            <Searchers ranksRef={ranksRef} />
            {PINS.map((p) => (
              <MapPin key={p.id} pin={p} rank={ranks[p.id]} />
            ))}
          </svg>
        </div>
        <div className="pointer-events-none absolute right-6 bottom-6 hidden items-center gap-3 text-xs font-semibold text-ink-2 lg:flex">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="13" className="fill-paper stroke-rule" />
            <path d="M14 4l4 11h-8z" className="fill-ink" />
            <path d="M14 24l-4-9h8z" className="fill-ink-3" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] lg:pointer-events-none lg:min-h-[max(100svh,760px)]">
        {/* The sheet */}
        <div className="panel pointer-events-auto relative -mt-8 rounded-[28px] bg-paper px-5 pt-7 pb-10 sm:px-8 lg:absolute lg:top-[88px] lg:bottom-6 lg:left-6 lg:mt-0 lg:flex lg:w-[min(44vw,600px)] lg:flex-col lg:px-12 lg:py-10">
          <div className="lg:my-auto">
            <div className="mb-7 flex items-center gap-3">
              <Image src="/gates.png" alt="Gates Jones" width={44} height={44} className="size-11 rounded-full object-cover" priority />
              <p className="text-[0.95rem] leading-tight">
                <span className="block font-bold text-ink">{site.owner}</span>
                <span className="text-ink-2">
                  Alpaca Digital<Sep />
                  {site.city}
                </span>
              </p>
            </div>

            <h1 className="font-display text-[clamp(3.1rem,14vw,4.25rem)] leading-[0.92] font-extrabold tracking-[-0.01em] text-ink uppercase lg:text-[clamp(3.6rem,6.2vw,6rem)]">
              Get more customers.
            </h1>

            <p className="mt-6 max-w-[30rem] text-[1.12rem] leading-relaxed text-ink-2 lg:text-[1.2rem]">
              I build your website and fix your Google listing so people nearby call you first.
            </p>

            <div className="mt-8 flex flex-col gap-x-6 gap-y-1 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-route px-7 py-4 text-[1.02rem] font-bold whitespace-nowrap text-route-ink shadow-[0_6px_18px_-6px_var(--route)] transition-[transform,box-shadow] duration-300 ease-settle hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_var(--route)]"
              >
                Get my free audit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              {site.phone ? (
                <a href={telHref(site.phone)} className="py-3 text-center font-semibold whitespace-nowrap text-ink underline decoration-rule underline-offset-4 hover:decoration-ink">
                  or call {site.phone}
                </a>
              ) : (
                <a href="#work" className="px-3 py-3 text-center font-semibold text-ink underline decoration-rule underline-offset-4 hover:decoration-ink">
                  See my work
                </a>
              )}
            </div>
          </div>

          {/* Proof before the ask */}
          <figure className="mt-9 flex gap-3.5 border-t border-rule pt-6 lg:mt-6">
            <svg width="22" height="17" viewBox="0 0 34 26" className="mt-1 shrink-0 text-ink-3" aria-hidden="true">
              <path
                fill="currentColor"
                d="M0 26V15.6C0 6.9 4.6 1.7 13.2 0l1.6 4.1C10.2 5.5 7.9 8.3 7.6 12.4H14V26H0Zm19.2 0V15.6C19.2 6.9 23.8 1.7 32.4 0L34 4.1c-4.6 1.4-6.9 4.2-7.2 8.3h6.4V26H19.2Z"
              />
            </svg>
            <div>
              <blockquote className="text-[1.02rem] leading-snug font-semibold text-ink">
                Gates gave us options and was patient with every change. So smooth from start to finish.
              </blockquote>
              <figcaption className="mt-1.5 text-sm text-ink-2">
                Exclusive Drywall Company<Sep />
                <a href="#work" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                  See their site
                </a>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Local results, floating over the map */}
        <div className="pointer-events-auto px-5 pt-6 pb-12 sm:px-8 lg:absolute lg:top-[88px] lg:right-6 lg:w-[360px] lg:p-0">
          <ResultsCard found={found} setFound={choose} ranks={ranks} />
        </div>
      </div>
    </section>
  );
}
