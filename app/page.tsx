import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RochesterMap from "@/components/RochesterMap";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Audit from "@/components/Audit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero map={<RochesterMap className="absolute inset-0 h-full w-full" />} />
        <Services />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Audit />
      </main>
      <Footer />
    </>
  );
}
