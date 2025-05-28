
import { Button } from "@/components/ui/button";
import { ArrowDown, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-niger-sand via-white to-niger-orange/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-niger-orange/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-niger-green/10 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-niger-orange/10 text-niger-orange rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4 mr-2" />
              Plateforme certifiée et sécurisée
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Simplifiez vos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
                démarches administratives
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Créez votre NIF et RCCM en quelques clics. Bénéficiez en plus de nos services d'infographie 
              pour développer une identité visuelle forte et professionnelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8 py-4 text-lg font-medium"
              >
                Créer mon NIF & RCCM
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8 py-4 text-lg font-medium"
              >
                Découvrir nos services design
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-niger-green mr-2" />
                Processus 100% digital
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-niger-green mr-2" />
                Support expert inclus
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-niger-green mr-2" />
                Résultats garantis
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-niger-orange/5 rounded-lg">
                    <span className="font-medium">Création NIF</span>
                    <span className="text-niger-green font-bold">✓ Terminé</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-niger-orange/5 rounded-lg">
                    <span className="font-medium">Enregistrement RCCM</span>
                    <span className="text-niger-orange font-bold">⏳ En cours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-500">Création logo</span>
                    <span className="text-gray-400">⏳ En attente</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg text-white">
                  <p className="text-sm opacity-90 mb-1">Temps estimé restant</p>
                  <p className="text-lg font-bold">2-3 jours ouvrés</p>
                </div>
              </div>
              
              {/* Decorative background card */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-niger-orange/20 to-niger-green/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
