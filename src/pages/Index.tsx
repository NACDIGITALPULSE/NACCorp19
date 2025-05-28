
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
