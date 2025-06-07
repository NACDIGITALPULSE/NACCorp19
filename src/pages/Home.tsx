
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Building, Users, Globe, Headphones, FileText, Shield, Clock, Zap, Award, Heart } from "lucide-react";
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
import AutoCarousel from "@/components/AutoCarousel";
import AnimatedFeatureCard from "@/components/AnimatedFeatureCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import AppointmentBooking from "@/components/AppointmentBooking";

const Home = () => {
  const featuresData = [
    {
      icon: FileText,
      title: "Démarches Simplifiées",
      description: "Création de NIF et RCCM en quelques clics avec un processus 100% digital et sécurisé.",
      gradient: "from-niger-orange to-red-500"
    },
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Plateforme certifiée avec protection des données et respect de la confidentialité.",
      gradient: "from-niger-green to-green-600"
    },
    {
      icon: Clock,
      title: "Rapidité d'Exécution",
      description: "Traitement express de vos dossiers avec des délais raccourcis pour votre réussite.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Support Expert",
      description: "Équipe dédiée d'experts pour vous accompagner dans toutes vos démarches.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Visibilité Digitale",
      description: "Solutions complètes pour votre présence en ligne et votre identité visuelle.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Award,
      title: "Excellence Reconnue",
      description: "Plus de 2000 entreprises créées avec un taux de satisfaction de 98%.",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Section Carousel automatique */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Découvrez nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">solutions innovantes</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Des services complets pour accompagner votre réussite entrepreneuriale
            </p>
          </div>
          
          <AutoCarousel />
        </div>
      </section>

      {/* Section Features améliorée avec animations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-niger-orange/10 text-niger-orange rounded-full text-sm font-medium mb-6 border border-niger-orange/20">
              <Zap className="w-4 h-4 mr-2" />
              Pourquoi choisir NACCORP ?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Une plateforme <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">révolutionnaire</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Bénéficiez d'une technologie de pointe et d'un accompagnement personnalisé pour réussir vos projets
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AnimatedFeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <Process />
      <Statistics />
      <Testimonials />
      
      {/* Section Planifier un appel */}
      <section id="appointment" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Planifiez une <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">consultation gratuite</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discutez de votre projet avec nos experts et obtenez des conseils personnalisés
            </p>
          </div>
          
          <AppointmentBooking />
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-niger-orange to-niger-green relative overflow-hidden">
        {/* Éléments décoratifs animés */}
        <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-full blur-xl animate-bounce"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-white/20 rounded-full animate-pulse">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 animate-fade-in">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Rejoignez des milliers d'entrepreneurs qui font confiance à NACCORP pour leurs démarches administratives et leur réussite business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/inscription-nif-rccm">
              <Button size="lg" className="bg-white text-niger-orange hover:bg-gray-100 shadow-lg group transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Building className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Créer mon NIF & RCCM
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-niger-orange shadow-lg group transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Headphones className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Statistiques rapides avec animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2000+</div>
              <div className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">Entreprises créées</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">Taux de satisfaction</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">5j</div>
              <div className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">Délai moyen</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">Support disponible</div>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
