
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Statistics />
      <Testimonials />
      <FAQ />
      <ScrollToTop />
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Home;
