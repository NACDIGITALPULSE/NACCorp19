
import { Button } from "@/components/ui/button";
import { ArrowDown, Check, FileText, Palette, ArrowRight, Users, Globe, Shield, Clock, Star, Zap } from "lucide-react";
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
      gradient: "from-orange-400 via-red-500 to-pink-600",
      iconColor: "text-orange-500",
      price: "À partir de 75 000 FCFA",
      features: ["NIF en 24h", "RCCM garanti", "Support inclus"]
    },
    {
      id: 2,
      title: "Identité visuelle professionnelle",
      subtitle: "Design & branding complets",
      description: "Logo, charte graphique et supports marketing pour une image de marque percutante.",
      icon: Palette,
      gradient: "from-purple-400 via-pink-500 to-red-500",
      iconColor: "text-purple-500",
      price: "À partir de 50 000 FCFA",
      features: ["Logo professionnel", "Charte graphique", "Supports marketing"]
    },
    {
      id: 3,
      title: "Présence digitale optimisée",
      subtitle: "Sites web & visibilité en ligne",
      description: "Développez votre présence sur le web avec nos solutions complètes de marketing digital.",
      icon: Globe,
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      iconColor: "text-blue-500",
      price: "À partir de 150 000 FCFA",
      features: ["Site web responsive", "SEO optimisé", "Hébergement inclus"]
    },
    {
      id: 4,
      title: "Support expert dédié",
      subtitle: "Accompagnement personnalisé",
      description: "Notre équipe d'experts vous accompagne à chaque étape de votre projet entrepreneurial.",
      icon: Users,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      iconColor: "text-green-500",
      price: "Support 24/7 inclus",
      features: ["Experts dédiés", "Suivi personnalisé", "Garantie satisfait"]
    }
  ];

  const servicesCarousel = [
    {
      title: "Pack Entrepreneur Complet",
      description: "NIF + RCCM + Logo + Site web",
      price: "250 000 FCFA",
      originalPrice: "350 000 FCFA",
      icon: Star,
      color: "from-amber-400 to-orange-600",
      features: ["Toutes démarches incluses", "Identité visuelle complète", "Site web professionnel", "Support prioritaire"]
    },
    {
      title: "Démarches Express",
      description: "NIF et RCCM rapidement",
      price: "75 000 FCFA",
      originalPrice: null,
      icon: Zap,
      color: "from-niger-orange to-red-500",
      features: ["NIF en 24h", "RCCM en 3 jours", "Documents officiels", "Suivi en temps réel"]
    },
    {
      title: "Design Professionnel",
      description: "Logo et charte graphique",
      price: "50 000 FCFA",
      originalPrice: "80 000 FCFA",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      features: ["Logo unique", "Charte graphique", "Cartes de visite", "Révisions illimitées"]
    },
    {
      title: "Présence Web",
      description: "Site web moderne et optimisé",
      price: "150 000 FCFA",
      originalPrice: "200 000 FCFA",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
      features: ["Site responsive", "SEO inclus", "Hébergement 1 an", "Formation incluse"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background animé en full width */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-niger-sand via-white to-niger-orange/5"></div>
        
        {/* Éléments décoratifs animés en couleurs */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl animate-bounce opacity-20"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl animate-pulse opacity-15"></div>
        <div className="absolute top-10 left-1/2 w-36 h-36 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-2xl opacity-15 animate-bounce"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-none px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Carrousel principal animé */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-niger-orange/20 to-niger-green/20 text-niger-orange rounded-full text-sm font-medium mb-8 border border-niger-orange/30 backdrop-blur-sm">
              <Check className="w-5 h-5 mr-2 animate-bounce" />
              Plateforme certifiée et sécurisée
            </div>
            
            {/* Carrousel des slides principal */}
            <div className="relative h-96 mb-8 overflow-hidden">
              {slides.map((slide, index) => {
                const IconComponent = slide.icon;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 translate-x-0 scale-100' : 
                      index < currentSlide ? 'opacity-0 -translate-x-full scale-95' : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    <div className={`h-full rounded-3xl bg-gradient-to-br ${slide.gradient} border-0 backdrop-blur-sm p-8 relative overflow-hidden shadow-2xl`}>
                      {/* Éléments décoratifs animés */}
                      <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce"></div>
                      <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse"></div>
                      
                      <div className="relative z-10 h-full flex flex-col justify-center text-white">
                        <div className="mb-6 transform hover:scale-125 hover:rotate-12 transition-all duration-500">
                          <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-sm inline-block shadow-xl">
                            <IconComponent className={`w-16 h-16 ${slide.iconColor} animate-pulse hover:animate-bounce transition-all duration-300`} />
                          </div>
                        </div>
                        
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in">
                          {slide.title}
                        </h1>
                        
                        <p className="text-xl font-semibold mb-4 text-white/95">
                          {slide.subtitle}
                        </p>
                        
                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                          {slide.description}
                        </p>

                        {/* Prix et fonctionnalités */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                          <div className="text-2xl font-bold text-white mb-2">{slide.price}</div>
                          <div className="space-y-1">
                            {slide.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-white/90">
                                <Check className="w-4 h-4 mr-2 text-white" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Indicateurs avec animations */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'bg-white scale-150 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75 hover:scale-125'
                    }`}
                  />
                ))}
              </div>

              {/* Barre de progression colorée */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 rounded-full overflow-hidden z-20">
                <div 
                  className="h-full bg-gradient-to-r from-white via-yellow-200 to-white transition-all duration-[4000ms] ease-linear shadow-lg"
                  style={{ 
                    width: `${((currentSlide + 1) / slides.length) * 100}%` 
                  }}
                />
              </div>
            </div>

            {/* Boutons d'action améliorés */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/inscription-nif-rccm" className="group">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-niger-orange to-red-500 hover:from-niger-orange-dark hover:to-red-600 text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                >
                  <FileText className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Créer mon NIF & RCCM
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/visibilite-en-ligne" className="group">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-niger-green text-niger-green hover:bg-gradient-to-r hover:from-niger-green hover:to-teal-500 hover:text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110"
                >
                  <Palette className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Services design
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Carrousel des services avec prix */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 relative z-10 border border-gray-200/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nos Services & Tarifs</h3>
                  <p className="text-gray-600">Solutions complètes pour votre réussite</p>
                </div>

                {/* Carrousel des services */}
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {servicesCarousel.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer group`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                              <ServiceIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{service.title}</h4>
                              <p className="text-sm text-white/90">{service.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">{service.price}</div>
                            {service.originalPrice && (
                              <div className="text-sm line-through text-white/70">{service.originalPrice}</div>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <Check className="w-3 h-3 mr-1" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 text-center">
                  <Link to="/pricing">
                    <Button className="bg-gradient-to-r from-niger-orange to-niger-green text-white hover:scale-105 transition-transform duration-300">
                      <Star className="w-4 h-4 mr-2" />
                      Voir tous les tarifs
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Fond décoratif animé */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator animé */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce bg-gradient-to-r from-niger-orange to-niger-green rounded-full p-4 shadow-xl">
            <ArrowDown className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
