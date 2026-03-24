const values = [
  {
    title: "Local First",
    description:
      "We're based in Rochester, MN and focused on serving local businesses. We understand your market because we live here too.",
  },
  {
    title: "No Templates",
    description:
      "Every site is designed from scratch. Your business is unique — your website should be too.",
  },
  {
    title: "Copy Matters",
    description:
      "Great websites don't just look good, they speak well. We write the words that convert visitors into customers.",
  },
  {
    title: "Long-Term Partners",
    description:
      "We don't disappear after launch. We're your on-call web team whenever you need updates, changes, or new pages.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              We build sites for businesses that{" "}
              <span className="text-indigo-600 dark:text-indigo-400">can&apos;t afford to blend in.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Alpaca Digital is a boutique web design studio serving small and
              medium businesses across Rochester and beyond. We combine clean,
              modern design with strong copywriting to create sites that don&apos;t
              just look great — they actually generate business.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              We keep our client roster small on purpose. When you work with us,
              you get a dedicated team — not a ticket number.
            </p>
            <a
              href="#contact"
              className="inline-flex px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Right — values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
