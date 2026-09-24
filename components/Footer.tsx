import Logo from "@/components/Logo";
import { site, telHref } from "@/lib/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Free audit", href: "#audit" },
];

export default function Footer() {
  return (
    <footer className="dark bg-band text-on-band">
      <div className="mx-auto max-w-[1240px] px-5 pt-16 pb-10 sm:px-8">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="size-9" />
              <span className="font-display text-2xl font-extrabold tracking-[0.04em] uppercase">Alpaca Digital</span>
            </a>
            <p className="mt-4 leading-relaxed text-on-band-2">
              Websites, local SEO, and Google Business Profiles for businesses in and around {site.city}.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <nav aria-label="Footer">
              <ul className="grid gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-on-band-2 transition-colors hover:text-on-band">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="grid content-start gap-2.5">
              <li>
                <a href={`mailto:${site.email}`} className="text-on-band-2 transition-colors hover:text-on-band">
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a href={telHref(site.phone)} className="text-on-band-2 transition-colors hover:text-on-band">
                    {site.phone}
                  </a>
                </li>
              )}
              <li className="text-on-band-2">{site.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-band-rule pt-6 text-sm text-on-band-2 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Alpaca Digital<span className="mx-1.5">·</span>
            {site.owner}
          </p>
          <p className="tabular">44.02° N, 92.47° W</p>
        </div>
      </div>
    </footer>
  );
}
