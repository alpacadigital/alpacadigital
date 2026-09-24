import { About } from "@/components/About";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { FAQ, faqs } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Included } from "@/components/Included";
import { LeadPath } from "@/components/LeadPath";
import { LeadSystem } from "@/components/LeadSystem";
import { Process } from "@/components/Process";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <LeadSystem />
        <LeadPath />
        <CaseStudy />
        <About />
        <Included />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
