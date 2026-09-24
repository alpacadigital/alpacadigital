import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Alpaca Digital",
  description: "What Alpaca Digital collects through the free audit form and what happens to it.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main id="top" className="bg-paper pt-28">
        <article className="mx-auto max-w-[44rem] px-5 pb-24 sm:px-8 lg:pb-32">
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[0.95] font-extrabold text-ink uppercase">
            Privacy
          </h1>
          <p className="mt-4 text-ink-2">Last updated September 2026</p>

          <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-ink-2 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
            <section>
              <h2>What I collect</h2>
              <p>
                When you request a free audit, the form sends me the name, business name, email, phone number, and
                website you type in. The form doesn&apos;t collect anything else.
              </p>
            </section>
            <section>
              <h2>How I use it</h2>
              <p>
                I use it to put together your audit and to reply to you. I don&apos;t sell it, share it with other
                businesses, or add you to a mailing list.
              </p>
            </section>
            <section>
              <h2>Where it goes</h2>
              <p>
                The form emails your details to me through Resend, an email delivery service. The site is hosted on
                Vercel, which keeps standard server logs, such as IP addresses, to run the site.
              </p>
            </section>
            <section>
              <h2>Cookies and tracking</h2>
              <p>
                This site doesn&apos;t use analytics or tracking cookies. The only thing it saves in your browser is
                whether you picked the day or night map.
              </p>
            </section>
            <section>
              <h2>Deleting your info</h2>
              <p>
                Email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-ink underline decoration-rule underline-offset-4 hover:decoration-ink">
                  {site.email}
                </a>{" "}
                and I&apos;ll delete anything you sent me.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
