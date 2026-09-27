"use client";

import { useState, type FormEvent } from "react";
import { site, telHref } from "@/lib/site";

const checks = [
  "Where you rank on the map for your most important searches",
  "A checkup of your Google Business Profile",
  "How you compare to the competitors showing up ahead of you",
  "What your website could fix to turn more visits into calls",
];

const inputClass =
  "w-full rounded-xl border-2 border-rule bg-paper px-4 py-3.5 text-[1.02rem] text-ink placeholder:text-ink-3 transition-colors hover:border-ink-3 focus:border-route focus:outline-none";
const labelClass = "mb-2 block text-[0.95rem] font-bold text-ink";

export default function Audit() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : `Your request didn't go through. Try again, or email me at ${site.email}.`,
      );
    }
  };

  return (
    <section id="audit" className="bg-route text-route-ink">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 lg:py-36">
        <div>
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold uppercase">
            Someone nearby is searching for what you do today.
          </h2>
          <p className="mt-6 max-w-[32rem] text-lg leading-relaxed opacity-90">
            Find out if they can find you. Send me your business and I&apos;ll put together a free visibility audit.
            You&apos;ll hear back from me within one business day.
          </p>
          <ul className="mt-9 grid max-w-[32rem] gap-4">
            {checks.map((c) => (
              <li key={c} className="flex gap-3.5 text-[1.05rem] leading-snug font-semibold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-px shrink-0" aria-hidden="true">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[32rem] leading-relaxed opacity-90">
            Rather talk?{" "}
            {site.phone && (
              <>
                Call or text{" "}
                <a href={telHref(site.phone)} className="font-bold underline underline-offset-4">
                  {site.phone}
                </a>{" "}
                or email{" "}
              </>
            )}
            {!site.phone && "Email "}
            <a href={`mailto:${site.email}`} className="font-bold underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>

        <div className="panel rounded-[28px] bg-paper p-6 text-ink sm:p-9 lg:self-start">
          {status === "sent" ? (
            <div className="flex min-h-[26rem] flex-col justify-center" role="status">
              <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
                <path d="M28 54C22 43 8 34 8 22A20 20 0 1 1 48 22C48 34 34 43 28 54Z" className="fill-route" />
                <path d="m19 22 6 6 12-12" fill="none" className="stroke-route-ink" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-6 font-display text-4xl font-extrabold uppercase">Got it. You&apos;re on my map.</h3>
              <p className="mt-3 max-w-[26rem] text-lg leading-relaxed text-ink-2">
                I&apos;ll look at how your business shows up and get back to you within one business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 self-start font-semibold underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div className="flex items-center gap-3 border-b border-rule pb-5">
                <svg width="26" height="34" viewBox="-13 -34 26 36" className="shrink-0" aria-hidden="true">
                  <path d="M0 0C-3 -9 -12 -13 -12 -22A12 12 0 1 1 12 -22C12 -13 3 -9 0 0Z" className="fill-route" />
                  <circle cy="-22" r="4.5" className="fill-route-ink" />
                </svg>
                <h3 className="font-display text-[1.7rem] leading-none font-extrabold uppercase">Your free visibility audit</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="a-name" className={labelClass}>Your name</label>
                  <input id="a-name" name="name" required autoComplete="name" maxLength={100} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="a-business" className={labelClass}>Business name</label>
                  <input id="a-business" name="business" required autoComplete="organization" maxLength={150} className={inputClass} />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="a-email" className={labelClass}>Email</label>
                  <input id="a-email" name="email" type="email" required autoComplete="email" maxLength={200} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="a-phone" className={labelClass}>
                    Phone <span className="font-normal text-ink-2">(optional)</span>
                  </label>
                  <input id="a-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="a-website" className={labelClass}>
                  Website or Google listing <span className="font-normal text-ink-2">(optional)</span>
                </label>
                <input id="a-website" name="website" inputMode="url" placeholder="yourbusiness.com or Maps link" maxLength={200} className={inputClass} />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-xl bg-land px-4 py-3 text-[0.98rem] font-semibold text-ink">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-route px-7 py-4 text-[1.05rem] font-bold text-route-ink transition-[transform,opacity] duration-300 ease-settle hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Get my free visibility audit"}
              </button>
              <p className="text-center text-sm text-ink-2">
                It&apos;s free, and you&apos;re not signing up for anything.{" "}
                <a href="/privacy" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                  How I handle your info
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
