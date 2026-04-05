import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CategoryCards from "@/components/sections/CategoryCards";
import TrustBar from "@/components/sections/TrustBar";
import Benefits from "@/components/sections/Benefits";
import ModernHealthcare from "@/components/sections/ModernHealthcare";
import HowItWorks from "@/components/sections/HowItWorks";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import GuaranteeBanner from "@/components/sections/GuaranteeBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <TrustBar />
        <Benefits />
        <HowItWorks />
        <ModernHealthcare />
        <Doctors />
        <Testimonials />
        <FAQ />
        <GuaranteeBanner />
      </main>
      <Footer />
    </>
  );
}
