import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-white/60">
            Websites, local SEO, and Google Business Profiles for local businesses that want more
            leads.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white/75 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li>
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li>{site.city}, {site.region}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.tagline}.
          </p>
          <p>
            Made in {site.city}, {site.region}.
          </p>
        </div>
      </div>
    </footer>
  );
}
