// Real client quotes only, with their permission. The section hides while this is empty.
const testimonials: { quote: string; name: string; business: string }[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
          What owners say.
        </h2>
        <ul className="mt-14 grid gap-x-14 gap-y-12 border-t-2 border-ink pt-12 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure>
                <blockquote className="text-[1.35rem] leading-snug font-semibold text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-ink-2">
                  <span className="font-bold text-ink">{t.name}</span>, {t.business}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
