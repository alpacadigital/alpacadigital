import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Arcs } from "./Arcs";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

const details = [
  { icon: Phone, label: "Call or text", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Based in", value: `${site.city}, ${site.region}` },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <Arcs />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-teal-400">Free audit</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
            Let&apos;s get your phone ringing.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            Tell me a little about your business and I&apos;ll put together a free audit of your
            website, Google profile, and local search rankings, with clear next steps whether you
            hire me or not.
          </p>

          <ul className="mt-10 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
                  <d.icon className="size-5 text-teal-400" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-white/55">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="font-semibold text-white hover:text-teal-300">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-semibold">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
