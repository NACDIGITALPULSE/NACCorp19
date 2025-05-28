
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
