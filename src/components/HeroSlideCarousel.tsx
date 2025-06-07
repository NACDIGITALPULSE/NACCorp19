
import { useState, useEffect } from "react";
import { Check, FileText, Palette, Globe, Users } from "lucide-react";
import ThreeDIllustration from "./ThreeDIllustration";

const HeroSlideCarousel = () => {
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
    <div className="w-full animate-fade-in">
      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-niger-orange/20 to-niger-green/20 text-niger-orange rounded-full text-sm font-medium mb-8 border border-niger-orange/30 backdrop-blur-sm">
        <Check className="w-5 h-5 mr-2 animate-bounce" />
        Plateforme certifiée et sécurisée
      </div>
      
      {/* Carrousel des slides principal - Full Width */}
      <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] mb-8 overflow-hidden rounded-3xl">
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
              <div className={`h-full w-full rounded-3xl bg-gradient-to-br ${slide.gradient} border-0 backdrop-blur-sm relative overflow-hidden shadow-2xl`}>
                {/* Grille responsive */}
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-8 lg:p-12">
                  {/* Contenu textuel */}
                  <div className="relative z-10 flex flex-col justify-center text-white order-2 lg:order-1">
                    <div className="mb-6 transform hover:scale-125 hover:rotate-12 transition-all duration-500">
                      <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-sm inline-block shadow-xl">
                        <IconComponent className={`w-12 h-12 lg:w-16 lg:h-16 ${slide.iconColor} animate-pulse hover:animate-bounce transition-all duration-300`} />
                      </div>
                    </div>
                    
                    <h1 className="font-playfair text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg sm:text-xl font-semibold mb-4 text-white/95">
                      {slide.subtitle}
                    </p>
                    
                    <p className="text-white/90 leading-relaxed mb-6 text-base sm:text-lg max-w-2xl">
                      {slide.description}
                    </p>

                    {/* Prix et fonctionnalités */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4 max-w-md">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-2">{slide.price}</div>
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

                  {/* Illustration 3D */}
                  <div className="relative z-10 flex items-center justify-center order-1 lg:order-2">
                    <ThreeDIllustration />
                  </div>
                </div>

                {/* Éléments décoratifs animés - positionnés en arrière-plan */}
                <div className="absolute top-4 right-4 w-24 h-24 lg:w-32 lg:h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 lg:w-28 lg:h-28 bg-white/15 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute top-1/2 right-8 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-md animate-pulse"></div>
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
    </div>
  );
};

export default HeroSlideCarousel;
