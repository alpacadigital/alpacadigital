const values = [
  {
    title: "Local First",
    description:
      "I'm based in Rochester, MN and focused on serving local businesses. I understand your market because I live here too.",
  },
  {
    title: "No Templates",
    description:
      "Every site is designed from scratch. Your business is unique — your website should be too.",
  },
  {
    title: "Copy Matters",
    description:
      "Great websites don't just look good, they speak well. I write the words that convert visitors into customers.",
  },
  {
    title: "Still Here After Launch",
    description:
      "I don't disappear after launch. I'm your go-to whenever you need updates, new pages, or just have a question.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Founder photo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-2xl shrink-0 border-2 border-indigo-200 dark:border-indigo-800">
                S
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Shawn</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Founder, Alpaca Digital</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              I build sites for businesses that{" "}
              <span className="text-indigo-600 dark:text-indigo-400">can&apos;t afford to blend in.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              I started Alpaca Digital because I kept seeing great local businesses
              stuck with outdated websites that didn&apos;t do them justice. I combine
              clean design with strong copywriting to build sites that don&apos;t just
              look great — they actually bring in customers.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              I keep my client list small on purpose. When you work with me, you&apos;re
              not getting handed off to a junior designer or lost in a queue —
              you&apos;re working directly with me, start to finish.
            </p>
            <a
              href="#contact"
              className="inline-flex px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Let&apos;s Work Together
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
