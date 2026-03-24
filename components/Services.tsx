const services = [
  {
    icon: "✦",
    title: "Custom Web Design",
    description:
      "Every site is designed from scratch to match your brand. No templates, no shortcuts — just a site built specifically for you and your customers.",
  },
  {
    icon: "⚡",
    title: "Development & Deployment",
    description:
      "We build with modern frameworks (Next.js, React) for lightning-fast performance, then handle deployment and hosting from start to finish.",
  },
  {
    icon: "✍️",
    title: "Copywriting & Content",
    description:
      "Great design needs great words. We craft compelling copy that tells your story, builds trust, and turns visitors into customers.",
  },
  {
    icon: "🔍",
    title: "SEO & Performance",
    description:
      "Every site is built with search engines in mind — clean code, fast load times, and on-page SEO so customers can find you on Google.",
  },
  {
    icon: "📱",
    title: "Mobile-First",
    description:
      "More than half of your visitors are on their phone. Every site we build looks and performs flawlessly on all screen sizes.",
  },
  {
    icon: "🛠",
    title: "Ongoing Support",
    description:
      "After launch, we're still here. Updates, bug fixes, new sections — we offer ongoing maintenance so your site always stays current.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Everything your website needs.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            From the first pixel to the final launch — and everything after.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-900 hover:shadow-sm transition-all duration-200 group"
            >
              <span className="text-2xl block mb-5">{service.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
