import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Building, Globe, Palette, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Dummy 3D Illustration Component (Replace with your actual component)
const ThreeDIllustration = () => (
  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
    <span className="text-gray-500">3D Illustration</span>
  </div>
);

interface Slide {
  badge: string;
  title: string;
  description: string;
  primaryAction: {
    text: string;
    link: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
  secondaryAction: {
    text: string;
    link: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

const slidesData: Slide[] = [
  {
    badge: "NIF & RCCM",
    title: "Lancez votre entreprise en toute simplicité",
    description: "Obtenez votre Numéro d'Identification Fiscale et votre Registre de Commerce rapidement et facilement.",
    primaryAction: {
      text: "Créer mon NIF & RCCM",
      link: "/inscription-nif-rccm",
      icon: Building,
    },
    secondaryAction: {
      text: "En savoir plus",
      link: "/inscription-nif-rccm",
      icon: ArrowRight,
    },
  },
  {
    badge: "Site Web",
    title: "Développez votre présence en ligne",
    description: "Créez un site web professionnel et responsive pour attirer de nouveaux clients.",
    primaryAction: {
      text: "Créer mon site web",
      link: "/website-service",
      icon: Globe,
    },
    secondaryAction: {
      text: "Voir nos offres",
      link: "/website-service",
      icon: ArrowRight,
    },
  },
  {
    badge: "Identité Visuelle",
    title: "Créez un logo unique pour votre marque",
    description: "Concevez un logo professionnel qui reflète l'identité de votre entreprise.",
    primaryAction: {
      text: "Concevoir mon logo",
      link: "/logo-service",
      icon: Palette,
    },
    secondaryAction: {
      text: "Découvrir nos designs",
      link: "/logo-service",
      icon: ArrowRight,
    },
  },
  {
    badge: "Visibilité en ligne",
    title: "Boostez votre présence sur les réseaux sociaux",
    description: "Développez votre communauté et attirez de nouveaux prospects grâce à nos stratégies de marketing digital.",
    primaryAction: {
      text: "Développer ma visibilité",
      link: "/visibilite-en-ligne",
      icon: MessageSquare,
    },
    secondaryAction: {
      text: "Nos solutions",
      link: "/visibilite-en-ligne",
      icon: ArrowRight,
    },
  },
];

const HeroSlideCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidesData;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-niger-orange via-red-500 to-pink-600">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
            <div className="flex-1 text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                  {slides[currentSlide].badge}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to={slides[currentSlide].primaryAction.link}>
                  <Button size="lg" className="bg-white text-niger-orange hover:bg-gray-100 shadow-lg group transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    <slides[currentSlide].primaryAction.icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {slides[currentSlide].primaryAction.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to={slides[currentSlide].secondaryAction.link}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-niger-orange shadow-lg group transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    <slides[currentSlide].secondaryAction.icon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    {slides[currentSlide].secondaryAction.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-96 h-96"
              >
                <ThreeDIllustration />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroSlideCarousel;
