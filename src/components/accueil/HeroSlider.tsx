
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star, Users, Zap, Shield, Sparkles, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Créez votre entreprise en quelques clics",
    subtitle: "NIF & RCCM simplifiés",
    description: "Obtenez votre Numéro d'Identification Fiscale et votre Registre de Commerce en 24-48h grâce à notre processus 100% digitalisé.",
    image: "/lovable-uploads/4d7841ab-db59-4429-8ff2-fca10017244f.png",
    ctaText: "Créer mon entreprise",
    ctaLink: "/inscription-nif-rccm",
    bgGradient: "from-niger-orange to-niger-orange-dark",
    icon: Rocket,
    floatingIcons: [Sparkles, TrendingUp, Star]
  },
  {
    id: 2,
    title: "Services d'infographie professionnels",
    subtitle: "Logo & Identité visuelle",
    description: "Développez une identité visuelle forte avec nos services de création de logo, charte graphique et supports marketing.",
    image: "/lovable-uploads/4d7841ab-db59-4429-8ff2-fca10017244f.png",
    ctaText: "Découvrir nos services",
    ctaLink: "/visibilite-en-ligne",
    bgGradient: "from-niger-green to-green-700",
    icon: Star,
    floatingIcons: [Zap, Sparkles, Users]
  },
  {
    id: 3,
    title: "Accompagnement complet",
    subtitle: "De l'idée au succès",
    description: "Bénéficiez d'un accompagnement personnalisé avec nos experts pour concrétiser votre projet entrepreneurial au Niger.",
    image: "/lovable-uploads/4d7841ab-db59-4429-8ff2-fca10017244f.png",
    ctaText: "Nous contacter",
    ctaLink: "/contact",
    bgGradient: "from-niger-sand to-niger-orange",
    icon: Users,
    floatingIcons: [Shield, Rocket, TrendingUp]
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const SlideIcon = slide.icon;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 
                index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${slide.bgGradient} flex items-center relative overflow-hidden`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  {slide.floatingIcons.map((Icon, iconIndex) => (
                    <Icon
                      key={iconIndex}
                      className={`absolute text-white/10 animate-pulse ${
                        iconIndex === 0 ? 'w-32 h-32 top-20 right-20 animate-spin-slow' :
                        iconIndex === 1 ? 'w-24 h-24 bottom-32 left-20 animate-bounce' :
                        'w-20 h-20 top-1/2 right-1/3 animate-pulse'
                      }`}
                      style={{
                        animationDelay: `${iconIndex * 0.5}s`,
                        animationDuration: `${3 + iconIndex}s`
                      }}
                    />
                  ))}
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white animate-fade-in">
                      <div className="flex items-center mb-4 group">
                        <SlideIcon className="w-12 h-12 mr-4 animate-bounce group-hover:animate-spin transition-all duration-300" />
                        <div className="w-20 h-1 bg-white/50 group-hover:bg-white transition-all duration-300"></div>
                      </div>
                      
                      <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight animate-scale-in">
                        {slide.title.split(' ').map((word, i) => (
                          <span 
                            key={i} 
                            className="inline-block hover:animate-pulse transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {word}{' '}
                          </span>
                        ))}
                      </h1>
                      
                      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90 animate-slide-in-right">
                        {slide.subtitle}
                      </h2>
                      
                      <p className="text-xl mb-8 text-white/80 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {slide.description}
                      </p>
                      
                      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <Link to={slide.ctaLink}>
                          <Button 
                            size="lg" 
                            className="bg-white text-niger-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                          >
                            <SlideIcon className="w-5 h-5 mr-2 group-hover:animate-spin" />
                            {slide.ctaText}
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                      <div className="relative group">
                        <div className="w-96 h-96 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                          {/* Rotating border effect */}
                          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin-slow"></div>
                          <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-spin-reverse"></div>
                          
                          <img 
                            src={slide.image} 
                            alt="NACCORP"
                            className="w-80 h-80 object-contain relative z-10 group-hover:animate-pulse transition-all duration-300"
                          />
                          
                          {/* Floating sparkles around logo */}
                          <Sparkles className="absolute top-8 right-8 w-8 h-8 text-white animate-pulse" />
                          <Sparkles className="absolute bottom-12 left-12 w-6 h-6 text-white animate-bounce" />
                          <Sparkles className="absolute top-1/2 left-8 w-4 h-4 text-white animate-ping" />
                        </div>
                        
                        {/* Floating elements around the main circle */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full animate-bounce flex items-center justify-center">
                          <Star className="w-12 h-12 text-white animate-spin-slow" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full animate-pulse flex items-center justify-center">
                          <Zap className="w-16 h-16 text-white animate-bounce" />
                        </div>
                        <div className="absolute top-1/4 -left-12 w-16 h-16 bg-white/15 rounded-full animate-ping flex items-center justify-center">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                index === currentSlide ? 'bg-white animate-pulse' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110 group ${
            isPlaying ? 'animate-pulse' : ''
          }`}
        >
          <Play className={`w-6 h-6 ${isPlaying ? 'opacity-50' : 'opacity-100'} group-hover:animate-spin`} />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
