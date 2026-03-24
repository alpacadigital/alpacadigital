"use client";

import { useState, FormEvent, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white bg-white dark:bg-slate-900 text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition";

  const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — copy */}
          <div>
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Ready to build something great?
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              Tell us about your project and we&apos;ll get back to you within one
              business day with a free consultation and quote.
            </p>

            {/* Details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center shrink-0">
                  <span>📍</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Rochester, MN</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center shrink-0">
                  <span>✉️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                  <a
                    href="mailto:hello@alpacadigital.co"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    hello@alpacadigital.co
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center shrink-0">
                  <span>⏱</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Response Time</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Message received!
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6">
                  We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourcompany.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Business Name</label>
                  <input
                    name="business"
                    type="text"
                    placeholder="Your Company LLC"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Tell us about your project</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="I need a website for my business..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 dark:text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-70 transition-colors text-sm"
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

                <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
                  No spam. No commitments. Just a friendly conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

