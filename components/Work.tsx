import Image from "next/image";

const project = {
  name: "Exclusive Drywall Company",
  category: "Contractor",
  description:
    "A story-driven site for a family-owned drywall business, with a project gallery and a free estimate form. Now getting found for local drywall searches.",
  url: "https://www.exclusivedrywallcompany.com/",
  screenshot: "/www.exclusivedrywallcompany.com_.png",
};

const domain = new URL(project.url).hostname.replace(/^www\./, "");

export default function Work() {
  return (
    <section id="work" className="bg-land">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-36">
        <h2 className="max-w-[16ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
          Built for businesses right here.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="border-t-2 border-ink">
            <div className="border-b border-rule py-5">
              <span className="block text-xl leading-tight font-bold text-ink">{project.name}</span>
              <span className="text-[0.95rem] text-ink-2">
                {project.category}
                <span aria-hidden="true" className="mr-2 ml-1">
                  ·
                </span>
                <span className="font-bold text-ink">Client</span>
              </span>
            </div>
            <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-relaxed text-ink-2">{project.description}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="panel group block overflow-hidden rounded-2xl bg-paper"
          >
            <span className="flex items-center gap-3 border-b border-rule px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-rule" />
                <span className="size-2.5 rounded-full bg-rule" />
                <span className="size-2.5 rounded-full bg-rule" />
              </span>
              <span className="min-w-0 flex-1 truncate rounded-full bg-land px-3 py-1 text-sm text-ink-2">{domain}</span>
              <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-ink">
                Visit
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </span>
            <span className="relative block aspect-[16/10] overflow-hidden bg-land">
              <Image
                src={project.screenshot}
                alt={`${project.name} website`}
                fill
                sizes="(min-width: 1024px) 680px, 92vw"
                className="object-cover object-top transition-transform duration-[1200ms] ease-settle group-hover:scale-[1.02]"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
