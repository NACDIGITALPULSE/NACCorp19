
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDIllustration from './ThreeDIllustration';

const slides = [
  {
    id: 1,
    title: "Créez votre entreprise au Niger",
    subtitle: "En quelques clics",
    description: "Obtenez votre NIF et RCCM rapidement avec notre plateforme digitale sécurisée.",
    cta: "Commencer maintenant",
    link: "/inscription-nif-rccm",
    gradient: "from-niger-orange via-red-500 to-pink-600",
    illustration: "business"
  },
  {
    id: 2,
    title: "Développez votre présence digitale",
    subtitle: "Sites web & Marketing",
    description: "Des solutions complètes pour votre visibilité en ligne et votre croissance business.",
    cta: "Découvrir nos services",
    link: "/website-service",
    gradient: "from-niger-green via-teal-500 to-blue-600",
    illustration: "website"
  },
  {
    id: 3,
    title: "Gestion comptable simplifiée",
    subtitle: "Conformité & Fiscalité",
    description: "Laissez nos experts gérer votre comptabilité et vos obligations fiscales.",
    cta: "En savoir plus",
    link: "/comptabilite",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    illustration: "finance"
  }
];

const HeroSlideCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}>
            {/* Éléments décoratifs animés */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
            
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Contenu textuel */}
                  <div className="text-white space-y-6 order-2 lg:order-1">
                    <div className="space-y-4">
                      <p className="text-lg md:text-xl font-medium opacity-90 animate-fade-in">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl opacity-90 max-w-lg animate-fade-in-delay">
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                      <Button 
                        size="lg" 
                        className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg group transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={slide.link}>
                          {slide.cta}
                          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href="/contact">
                          Nous contacter
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Illustration 3D */}
                  <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="w-full max-w-lg">
                      <ThreeDIllustration type={slide.illustration as any} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Contrôles de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlideCarousel;
