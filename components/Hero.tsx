export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-slate-950 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Personal greeting */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm shrink-0">
              S
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950 rounded-full">
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Hey, I&apos;m Shawn &mdash; web designer based in Rochester, MN 👋
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Websites that{" "}
            <span className="text-indigo-600 dark:text-indigo-400">work as hard</span> as you do.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
            I design and build fast, modern websites for local businesses —
            helping you attract more customers and stand out online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-center"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors text-center"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Social proof bar */}
          <div className="mt-16 flex flex-wrap gap-8 items-center">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Projects Launched</p>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Client Satisfaction</p>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Fast</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Core Web Vitals</p>
            </div>
            <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Rochester, MN</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Based Locally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
