
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Globe, Palette, MessageSquare, FileText, Calculator, Ship, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "NIF & RCCM",
    description: "Création officielle de votre entreprise",
    price: "50,000 FCFA",
    icon: Building,
    link: "/inscription-nif-rccm",
    gradient: "from-niger-orange to-red-500"
  },
  {
    title: "Site Web",
    description: "Présence digitale professionnelle",
    price: "150,000 FCFA",
    icon: Globe,
    link: "/website-service",
    gradient: "from-niger-green to-teal-500"
  },
  {
    title: "Logo Design",
    description: "Identité visuelle unique",
    price: "25,000 FCFA",
    icon: Palette,
    link: "/logo-service",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Visibilité Online",
    description: "Marketing digital et réseaux sociaux",
    price: "75,000 FCFA",
    icon: MessageSquare,
    link: "/visibilite-en-ligne",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Déclaration Fiscale",
    description: "Gestion des obligations fiscales",
    price: "30,000 FCFA",
    icon: FileText,
    link: "/declaration-fiscale",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    title: "Comptabilité",
    description: "Tenue de livres professionnelle",
    price: "100,000 FCFA",
    icon: Calculator,
    link: "/comptabilite",
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    title: "Société Offshore",
    description: "Expansion internationale",
    price: "500,000 FCFA",
    icon: Ship,
    link: "/offshore",
    gradient: "from-emerald-500 to-green-600"
  }
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleServices = () => {
    const startIndex = currentIndex * 3;
    return services.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Nos Services Populaires
        </h3>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Découvrez notre gamme complète de services pour votre réussite entrepreneuriale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {getVisibleServices().map((service, index) => (
          <Card 
            key={`${currentIndex}-${index}`}
            className="bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-niger-orange mb-4">
                À partir de {service.price}
              </div>
              <Link to={service.link}>
                <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white group">
                  Choisir ce service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
