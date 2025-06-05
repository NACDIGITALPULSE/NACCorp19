
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Image, Check, ArrowRight, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
              Complets
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution intégrée pour toutes vos démarches administratives et créatives. 
            Lancez votre entreprise avec une identité forte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Service 1: Démarches administratives */}
          <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-niger-orange to-niger-orange-light"></div>
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-niger-orange/10 rounded-lg group-hover:bg-niger-orange/20 transition-colors">
                  <FileText className="w-6 h-6 text-niger-orange" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Démarches Administratives
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-gray-600">
                Obtenez votre NIF et RCCM rapidement et en toute sécurité
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Numéro d'Identification Fiscal (NIF)</h4>
                    <p className="text-gray-600">Création et obtention rapide de votre NIF officiel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">RCCM (Registre du Commerce)</h4>
                    <p className="text-gray-600">Enregistrement complet au registre du commerce</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Suivi en temps réel</h4>
                    <p className="text-gray-600">Tableau de bord pour suivre l'avancement de vos dossiers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Support expert</h4>
                    <p className="text-gray-600">Accompagnement par nos experts légaux</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-niger-orange/5 p-4 rounded-lg border border-niger-orange/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-niger-orange font-medium mb-1 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Délai moyen
                    </p>
                    <p className="text-2xl font-bold text-gray-900">3-5 jours ouvrés</p>
                  </div>
                  <div className="text-3xl">⚡</div>
                </div>
              </div>

              <Link to="/inscription-nif-rccm" className="block group">
                <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white group-hover:scale-105 transition-transform shadow-lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Commencer mes démarches
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Service 2: Services d'infographie */}
          <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-niger-green to-niger-green-light"></div>
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-niger-green/10 rounded-lg group-hover:bg-niger-green/20 transition-colors">
                  <Image className="w-6 h-6 text-niger-green" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Services d'Infographie
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-gray-600">
                Créez une identité visuelle forte et professionnelle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Création de logo professionnel</h4>
                    <p className="text-gray-600">Logo unique adapté à votre secteur d'activité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Charte graphique complète</h4>
                    <p className="text-gray-600">Guide d'utilisation de votre identité visuelle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Supports marketing</h4>
                    <p className="text-gray-600">Cartes de visite, flyers, brochures, réseaux sociaux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                  <Check className="w-5 h-5 text-niger-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Révisions illimitées</h4>
                    <p className="text-gray-600">Ajustements jusqu'à satisfaction complète</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-niger-green/5 p-4 rounded-lg border border-niger-green/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-niger-green font-medium mb-1 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Délai moyen
                    </p>
                    <p className="text-2xl font-bold text-gray-900">5-7 jours ouvrés</p>
                  </div>
                  <div className="text-3xl">🎨</div>
                </div>
              </div>

              <Link to="/visibilite-en-ligne" className="block group">
                <Button className="w-full bg-niger-green hover:bg-niger-green-dark text-white group-hover:scale-105 transition-transform shadow-lg">
                  <Image className="w-4 h-4 mr-2" />
                  Créer mon identité visuelle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Pack combiné */}
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-niger-orange via-niger-orange-light to-niger-green group hover:scale-105 transition-transform duration-300">
          <CardContent className="p-8 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-300 mr-2" />
              <h3 className="font-playfair text-3xl font-bold">Pack Entrepreneur Complet</h3>
              <Star className="w-8 h-8 text-yellow-300 ml-2" />
            </div>
            <p className="text-lg mb-6 opacity-90">
              Démarches administratives + Identité visuelle complète à prix préférentiel
            </p>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="bg-white/20 rounded-full px-4 py-2">
                <span className="text-3xl font-bold">-25%</span>
              </div>
              <span className="text-lg opacity-75">sur le pack combiné</span>
            </div>
            <Link to="/inscription-nif-rccm" className="group">
              <Button size="lg" className="bg-white text-niger-orange hover:bg-gray-100 font-bold px-8 shadow-lg group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5 mr-2" />
                Découvrir le pack complet
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
