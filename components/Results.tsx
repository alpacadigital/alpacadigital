// Google Search Console, exclusivedrywallcompany.com, last 28 days, shared by Gates on Sept 24, 2026.
const queries = [
  { q: "drywall rochester mn", clicks: 3, change: "+200%" },
  { q: "drywall contractor near me", clicks: 1, change: "New" },
  { q: "drywall company", clicks: 1, change: "New" },
  { q: "drywall finishing near me", clicks: 1, change: "New" },
];

export default function Results() {
  return (
    <section id="results" className="bg-band text-on-band">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:py-36">
        <div>
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold uppercase">
            Now found for &ldquo;drywall contractor near me.&rdquo;
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-on-band-2">
            Exclusive Drywall Company is a family-owned drywall business in Rochester. These are real numbers from their
            Google Search Console. Over the last 3 months they averaged a page-one spot on Google, and three of these
            searches that sent them zero clicks before now send people to their site.
          </p>
          <a
            href="https://www.exclusivedrywallcompany.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-semibold underline decoration-band-rule underline-offset-4 hover:decoration-on-band"
          >
            See their site
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <div className="lg:pt-3">
          <table className="w-full border-collapse text-left">
            <caption className="pb-5 text-left text-sm text-on-band-2">
              Exclusive Drywall Company, Google Search Console, last 28 days as of late September 2026
            </caption>
            <thead>
              <tr className="border-b-2 border-on-band text-sm text-on-band-2">
                <th scope="col" className="pb-3 font-semibold">What people searched</th>
                <th scope="col" className="pb-3 text-right font-semibold">Clicks</th>
                <th scope="col" className="pb-3 pl-4 text-right font-semibold">Change</th>
              </tr>
            </thead>
            <tbody>
              {queries.map(({ q, clicks, change }) => (
                <tr key={q} className="border-b border-band-rule">
                  <th scope="row" className="py-5 pr-3 font-normal">
                    <span className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="shrink-0 text-on-band-2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                      </svg>
                      <span className="text-[1.1rem] font-semibold sm:text-xl">{q}</span>
                    </span>
                  </th>
                  <td className="py-5 text-right text-xl font-bold tabular">{clicks}</td>
                  <td className="py-5 pl-4 text-right">
                    <span className="inline-block rounded-full border border-up px-2.5 py-0.5 text-sm font-bold text-up tabular">
                      {change === "New" ? (
                        <>
                          New<span className="sr-only">, previously 0 clicks</span>
                        </>
                      ) : (
                        change
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-on-band">
                <th scope="row" className="py-5 pr-3 text-left text-[1.1rem] font-bold sm:text-xl">All searches</th>
                <td className="py-5 text-right font-display text-4xl font-extrabold tabular">30</td>
                <td className="py-5 pl-4 text-right">
                  <span className="inline-block rounded-full bg-up px-2.5 py-0.5 text-sm font-bold text-band tabular">+11%</span>
                </td>
              </tr>
            </tfoot>
          </table>

          <p className="mt-6 text-on-band-2">
            They showed up in Google search <span className="font-bold text-on-band tabular">865</span> times in the same
            28 days, <span className="font-bold text-up">up 2%</span>.
          </p>

          {/* Search Console performance, 3 months (Jun 22 to Sep 21, 2026), confirmed by Gates as Exclusive Drywall. */}
          <dl className="mt-12 border-t-2 border-on-band">
            <div className="flex items-baseline justify-between gap-4 border-b border-band-rule py-5">
              <dt className="text-[1.1rem] font-semibold sm:text-xl">Average spot on Google, last 3 months</dt>
              <dd className="flex shrink-0 items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold tabular">7.1</span>
                <span className="rounded-full bg-up px-2.5 py-0.5 text-sm font-bold text-band">Page one</span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-band-rule py-5">
              <dt className="text-[1.1rem] font-semibold sm:text-xl">Clicks from Google, last 3 months</dt>
              <dd className="font-display text-4xl font-extrabold tabular">85</dd>
            </div>
          </dl>
          <p className="mt-6 text-on-band-2">
            Over those 3 months they showed up in Google search more than{" "}
            <span className="font-bold text-on-band tabular">3,000</span> times.
          </p>
        </div>
      </div>
    </section>
  );
}
