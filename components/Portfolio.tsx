const projects = [
  {
    name: "Rochester Family Eye Clinic",
    category: "Healthcare",
    description:
      "A comprehensive, conversion-focused site for a 30-year Rochester optometry practice. Features service showcases, doctor bios, insurance info, and an appointment request form.",
    tags: ["Next.js", "Tailwind", "Copywriting"],
    url: "https://rochester-family-eye-clinic.vercel.app/",
    gradient: "from-sky-500 to-indigo-600",
    letter: "R",
  },
  {
    name: "12th Street Dental",
    category: "Healthcare",
    description:
      "Polished dental practice site featuring before/after galleries, service pages, Google Reviews integration, and a new patient onboarding flow.",
    tags: ["Next.js", "Tailwind", "Copywriting"],
    url: "https://12streetdental.alpacadigital.co/",
    gradient: "from-teal-500 to-emerald-600",
    letter: "D",
  },
  {
    name: "Exclusive Drywall Company",
    category: "Contractor",
    description:
      "A heartfelt, story-driven site for a family-owned drywall business. Project gallery, testimonials, and a free estimate request form that drives real leads.",
    tags: ["Next.js", "Tailwind", "Copywriting"],
    url: "https://www.exclusivedrywallcompany.com/",
    gradient: "from-orange-500 to-red-600",
    letter: "E",
  },
  {
    name: "Fat Willy's Bar & Grill",
    category: "Restaurant",
    description:
      "Vibrant restaurant site with menu highlights, weekly specials, event pages, online ordering integration, and an email capture for promotions.",
    tags: ["Next.js", "Tailwind", "Toast Integration"],
    url: "https://fatwillys.alpacadigital.co/",
    gradient: "from-amber-500 to-orange-600",
    letter: "F",
  },
  {
    name: "Kiwanis Rochester Day Makers",
    category: "Non-Profit",
    description:
      "A clean, mission-driven site for a local Kiwanis chapter. Features event calendar, impact stats, membership sign-ups, and community storytelling.",
    tags: ["Next.js", "Tailwind", "Copywriting"],
    url: "https://kiwanis.alpacadigital.co/",
    gradient: "from-blue-500 to-violet-600",
    letter: "K",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Sites we&apos;re proud to ship.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            From local restaurants to healthcare practices — every project gets
            our full attention.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-lg dark:hover:shadow-slate-900 transition-all duration-300 overflow-hidden"
            >
              {/* Color block header */}
              <div
                className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-5xl font-black text-white/30 select-none">
                  {project.letter}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {project.name}
                    </h3>
                  </div>
                  <span className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-colors mt-0.5 text-lg shrink-0 ml-2">
                    →
                  </span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-100 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-center min-h-[280px]">
            <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-wide">
              Your Business
            </p>
            <p className="text-3xl font-bold text-white mb-4 leading-tight">
              Could be next.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
