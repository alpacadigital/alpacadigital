export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/alpaca-logo.svg" alt="Alpaca Digital" width={32} height={32} className="shrink-0" />
              <p className="text-xl font-bold tracking-tight">
                Alpaca<span className="text-indigo-400">Digital</span>
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Boutique web design &amp; development for local businesses that want
              to stand out online.
            </p>
          </div>
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Industries
              </p>
              <ul className="space-y-2.5">
                {[
                  "Healthcare",
                  "Restaurants",
                  "Contractors",
                  "Non-Profits",
                  "Local Business",
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Contact
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@alpacadigital.co"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    hello@alpacadigital.co
                  </a>
                </li>
                <li>
                  <span className="text-sm text-slate-400">Rochester, MN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <p className="text-xs text-slate-500">
            © {year} Alpaca Digital. All rights reserved.
          </p>
          <a
            href="#contact"
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            Start a project →
          </a>
        </div>
      </div>
    </footer>
  );
}
