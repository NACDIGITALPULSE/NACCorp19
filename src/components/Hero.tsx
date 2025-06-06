
import { Button } from "@/components/ui/button";
import { ArrowDown, Check, FileText, Palette, ArrowRight, Users, Globe, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Simplifiez vos démarches administratives",
      subtitle: "NIF & RCCM en quelques clics",
      description: "Créez votre entreprise rapidement avec notre processus 100% digital et sécurisé.",
      icon: FileText,
      gradient: "from-niger-orange/20 to-niger-green/20"
    },
    {
      id: 2,
      title: "Identité visuelle professionnelle",
      subtitle: "Design & branding complets",
      description: "Logo, charte graphique et supports marketing pour une image de marque percutante.",
      icon: Palette,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Présence digitale optimisée",
      subtitle: "Sites web & visibilité en ligne",
      description: "Développez votre présence sur le web avec nos solutions complètes de marketing digital.",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 4,
      title: "Support expert dédié",
      subtitle: "Accompagnement personnalisé",
      description: "Notre équipe d'experts vous accompagne à chaque étape de votre projet entrepreneurial.",
      icon: Users,
      gradient: "from-green-500/20 to-teal-500/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change de slide toutes les 4 secondes

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-niger-sand via-white to-niger-orange/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-niger-orange/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-niger-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-niger-green/5 rounded-full blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Animated Slides Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-niger-orange/10 text-niger-orange rounded-full text-sm font-medium mb-6 border border-niger-orange/20">
              <Check className="w-4 h-4 mr-2" />
              Plateforme certifiée et sécurisée
            </div>
            
            {/* Carrousel de slides */}
            <div className="relative h-80 mb-8 overflow-hidden">
              {slides.map((slide, index) => {
                const IconComponent = slide.icon;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 translate-x-0' : 
                      index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${slide.gradient} border border-gray-200/50 backdrop-blur-sm p-8 relative overflow-hidden`}>
                      {/* Éléments décoratifs animés */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-md animate-bounce"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                          <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm inline-block">
                            <IconComponent className="w-12 h-12 text-gray-700 animate-pulse" />
                          </div>
                        </div>
                        
                        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                          {slide.title}
                        </h1>
                        
                        <p className="text-lg font-medium text-niger-orange mb-3">
                          {slide.subtitle}
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Indicateurs de slides */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-niger-orange scale-125' 
                        : 'bg-gray-400 hover:bg-niger-orange/50'
                    }`}
                  />
                ))}
              </div>

              {/* Barre de progression */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden z-20">
                <div 
                  className="h-full bg-niger-orange transition-all duration-[4000ms] ease-linear"
                  style={{ 
                    width: `${((currentSlide + 1) / slides.length) * 100}%` 
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/inscription-nif-rccm" className="group">
                <Button 
                  size="lg" 
                  className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Créer mon NIF & RCCM
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/visibilite-en-ligne" className="group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Services design
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-2 h-2 bg-niger-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-medium">Processus 100% digital</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-2 h-2 bg-niger-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-medium">Support expert inclus</span>
              </div>
              <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-2 h-2 bg-niger-green rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-medium">Résultats garantis</span>
              </div>
            </div>

            {/* CTA for account creation */}
            <div className="mt-8 p-4 bg-gradient-to-r from-niger-orange/5 to-niger-green/5 rounded-xl border border-niger-orange/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nouveau sur la plateforme ?</p>
                  <p className="font-medium text-gray-900">Créez votre compte gratuitement</p>
                </div>
                <Link to="/creer-compte">
                  <Button variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white">
                    <Users className="w-4 h-4 mr-2" />
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-niger-orange/5 to-niger-orange/10 rounded-lg border border-niger-orange/20">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-niger-orange mr-3" />
                      <span className="font-medium">Création NIF</span>
                    </div>
                    <span className="text-niger-green font-bold flex items-center">
                      <Check className="w-4 h-4 mr-1" />
                      Terminé
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-niger-orange/5 to-niger-orange/10 rounded-lg border border-niger-orange/20">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-niger-orange mr-3" />
                      <span className="font-medium">Enregistrement RCCM</span>
                    </div>
                    <span className="text-niger-orange font-bold">⏳ En cours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Palette className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="font-medium text-gray-500">Création logo</span>
                    </div>
                    <span className="text-gray-400">⏳ En attente</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Temps estimé restant</p>
                      <p className="text-lg font-bold">2-3 jours ouvrés</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background card */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-niger-orange/20 to-niger-green/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ArrowDown className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
