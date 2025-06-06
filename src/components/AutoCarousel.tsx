
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Palette, Globe, Users, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Créez votre entreprise en quelques clics",
      subtitle: "NIF & RCCM simplifiés",
      description: "Obtenez votre Numéro d'Identification Fiscale et votre inscription au Registre de Commerce et de Crédit Mobilier rapidement et facilement.",
      icon: FileText,
      color: "from-niger-orange to-niger-orange-dark",
      link: "/inscription-nif-rccm"
    },
    {
      id: 2,
      title: "Services de design professionnel",
      subtitle: "Identité visuelle complète",
      description: "Logo, charte graphique, supports marketing - tout ce dont vous avez besoin pour une image de marque percutante.",
      icon: Palette,
      color: "from-niger-green to-niger-green-dark",
      link: "/visibilite-en-ligne"
    },
    {
      id: 3,
      title: "Présence digitale optimisée",
      subtitle: "Site web & visibilité en ligne",
      description: "Développez votre présence sur le web avec nos solutions complètes de création de sites et de marketing digital.",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      link: "/website-service"
    },
    {
      id: 4,
      title: "Support expert dédié",
      subtitle: "Accompagnement personnalisé",
      description: "Notre équipe d'experts vous accompagne à chaque étape de votre projet entrepreneurial.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      link: "/contact"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => {
        const IconComponent = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <Card className="h-full border-0">
              <CardContent className={`h-full p-8 bg-gradient-to-br ${slide.color} text-white relative overflow-hidden`}>
                {/* Éléments décoratifs animés */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-16 h-16 text-white/90 animate-pulse" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2 animate-fade-in">
                    {slide.title}
                  </h3>
                  
                  <p className="text-xl mb-4 text-white/90 font-medium">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                    {slide.description}
                  </p>
                  
                  <Link to={slide.link}>
                    <Button 
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      size="lg"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}

      {/* Indicateurs de slides */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-[5000ms] ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default AutoCarousel;
