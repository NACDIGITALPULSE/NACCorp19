
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Palette, 
  Calculator, 
  Globe, 
  FileText, 
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Simulez vos coûts et TVA",
      subtitle: "Calculateur intégré",
      description: "Estimez vos coûts et calculez votre TVA en temps réel",
      ctaText: "Simuler",
      ctaLink: "/simulateur",
      bgGradient: "from-purple-500 to-purple-700",
      icon: Calculator
    },
    {
      id: 2,
      title: "Créez votre entreprise",
      subtitle: "NIF & RCCM simplifiés",
      description: "Obtenez vos documents officiels rapidement",
      ctaText: "Commencer",
      ctaLink: "/inscription-nif-rccm",
      bgGradient: "from-blue-500 to-blue-700",
      icon: Building2
    },
    {
      id: 3,
      title: "Services d'infographie",
      subtitle: "Logo & Identité visuelle",
      description: "Créez une identité forte pour votre entreprise",
      ctaText: "Découvrir",
      ctaLink: "/visibilite-en-ligne",
      bgGradient: "from-green-500 to-green-700",
      icon: Palette
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Slider */}
        <div className="relative mb-16 overflow-hidden rounded-3xl shadow-2xl">
          <div className={`bg-gradient-to-r ${currentSlideData.bgGradient} p-12 text-white min-h-[400px] flex items-center`}>
            <div className="max-w-4xl mx-auto flex items-center justify-between w-full">
              <div className="flex-1">
                <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
                  {currentSlideData.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white/90">
                  {currentSlideData.subtitle}
                </h2>
                <p className="text-lg mb-8 text-white/80 max-w-2xl">
                  {currentSlideData.description}
                </p>
                <Link to={currentSlideData.ctaLink}>
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    {currentSlideData.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="hidden lg:block">
                <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <IconComponent className="w-24 h-24 text-white animate-bounce" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Services Tabs */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Une approche moderne et efficace pour tous vos besoins entrepreneuriaux
          </p>
        </div>

        <Tabs defaultValue="creation" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-2">
            <TabsTrigger 
              value="creation" 
              className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all hover:scale-105"
            >
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Créer mon entreprise</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tarifs"
              className="flex items-center space-x-2 data-[state=active]:bg-green-500 data-[state=active]:text-white transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Voir nos tarifs</span>
            </TabsTrigger>
            <TabsTrigger 
              value="simulateur"
              className="flex items-center space-x-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all hover:scale-105"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Simulateur TVA</span>
            </TabsTrigger>
            <TabsTrigger 
              value="actualites"
              className="flex items-center space-x-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-white transition-all hover:scale-105"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Actualités</span>
            </TabsTrigger>
            <TabsTrigger 
              value="compte"
              className="flex items-center space-x-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all hover:scale-105"
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Mon compte</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="creation">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Créer mon entreprise</h3>
                    <p className="text-gray-600 dark:text-gray-300">Démarches administratives simplifiées</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Obtenez votre NIF et RCCM en quelques clics. Notre processus digitalisé vous permet de créer votre entreprise rapidement et en toute sécurité.
                </p>
                <Link to="/inscription-nif-rccm">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                    <Building2 className="w-4 h-4 mr-2" />
                    Commencer mes démarches
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tarifs">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Voir nos tarifs</h3>
                    <p className="text-gray-600 dark:text-gray-300">Tarification transparente et competitive</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Découvrez nos tarifs transparents pour tous nos services. Des prix fixes sans surprise pour votre tranquillité d'esprit.
                </p>
                <Link to="/tarifs">
                  <Button className="bg-green-600 hover:bg-green-700 text-white group">
                    <FileText className="w-4 h-4 mr-2" />
                    Consulter les tarifs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simulateur">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Simulateur TVA</h3>
                    <p className="text-gray-600 dark:text-gray-300">Calculez vos impôts et taxes</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Estimez vos coûts fiscaux et calculez votre TVA en temps réel. Un outil gratuit pour planifier vos finances d'entreprise.
                </p>
                <Link to="/simulateur">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white group">
                    <Calculator className="w-4 h-4 mr-2" />
                    Utiliser le simulateur
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actualites">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Actualités</h3>
                    <p className="text-gray-600 dark:text-gray-300">Restez informé des dernières nouvelles</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Suivez les dernières actualités sur l'entrepreneuriat au Niger, les changements réglementaires et nos nouveautés.
                </p>
                <Link to="/journal">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white group">
                    <Globe className="w-4 h-4 mr-2" />
                    Lire les actualités
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compte">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mon compte</h3>
                    <p className="text-gray-600 dark:text-gray-300">Gérez votre profil et vos services</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Accédez à votre tableau de bord personnel pour suivre vos démarches et gérer vos services.
                </p>
                <Link to="/tableau-de-bord">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white group">
                    <Users className="w-4 h-4 mr-2" />
                    Accéder à mon compte
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSlider;
