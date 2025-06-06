
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Palette, Globe } from "lucide-react";

const ServicesCarousel = () => {
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

  return (
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
  );
};

export default ServicesCarousel;
