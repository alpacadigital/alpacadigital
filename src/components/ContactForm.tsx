"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

const interests = ["New website", "SEO", "Google Business Profile", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border-0 bg-white px-4 py-3.5 text-ink ring-1 ring-line placeholder:text-body/60 focus:outline-none focus:ring-2 focus:ring-teal-500";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name"),
      business: data.get("business"),
      phone: data.get("phone"),
      email: data.get("email"),
      website: data.get("website"),
      interests: data.getAll("interests"),
      message: data.get("message"),
      company_url: data.get("company_url"), // honeypot
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center rounded-2xl bg-white p-10 text-center">
        <CheckCircle2 className="size-12 text-teal-600" aria-hidden />
        <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">Got it. Thank you!</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-body">
          I&apos;ll take a look at your business and get back to you within one business day. If
          it&apos;s urgent, call or text me at{" "}
          <a href={site.phoneHref} className="font-semibold text-teal-700 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-mist p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="business" className={label}>Business name</label>
          <input id="business" name="business" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="website" className={label}>
            Current website <span className="font-normal text-body">(if you have one)</span>
          </label>
          <input id="website" name="website" placeholder="yourbusiness.com" className={field} />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={label}>What can I help with?</legend>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <label key={i} className="cursor-pointer">
                <input type="checkbox" name="interests" value={i} className="peer sr-only" />
                <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-ink ring-1 ring-line transition-colors peer-checked:bg-navy-900 peer-checked:text-white peer-checked:ring-navy-900 peer-focus-visible:ring-2 peer-focus-visible:ring-teal-500">
                  {i}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Anything else? <span className="font-normal text-body">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={4} className={`${field} resize-y`} />
        </div>

        {/* Honeypot: hidden from people, catches bots */}
        <div aria-hidden className="absolute -left-[9999px]">
          <label htmlFor="company_url">Leave this empty</label>
          <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 font-display font-bold text-navy-950 transition-colors hover:bg-teal-400 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Get my free audit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </>
        )}
      </button>

      <p role="status" className="mt-4 text-center text-sm text-body">
        {status === "error" ? (
          <span className="text-[#b42318]">
            Something went wrong sending your message. Please call or text{" "}
            <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a> or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a>.
          </span>
        ) : (
          "No spam, no pressure. Just an honest conversation about your business."
        )}
      </p>
    </form>
  );
}
