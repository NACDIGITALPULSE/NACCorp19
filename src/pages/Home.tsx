import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Building, Users, Globe, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AIAssistant from "@/components/AIAssistant";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Statistics />
      <Testimonials />
      
      {/* Call to Action Section - Correction du bouton "Nous contacter" */}
      <section className="py-20 bg-gradient-to-r from-niger-orange to-niger-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'entrepreneurs qui font confiance à NACCORP pour leurs démarches administratives et leur réussite business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/inscription-nif-rccm">
              <Button size="lg" className="bg-white text-niger-orange hover:bg-gray-100 shadow-lg">
                <Building className="w-5 h-5 mr-2" />
                Créer mon NIF & RCCM
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-niger-orange shadow-lg">
                <Headphones className="w-5 h-5 mr-2" />
                Nous contacter
              </Button>
            </Link>
          </div>
          
          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/80">Entreprises créées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5j</div>
              <div className="text-white/80">Délai moyen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support disponible</div>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Home;
