
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Building, Users, Globe, Award, ArrowRight, CheckCircle, Calculator, BarChart3, FileText, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import WhatsAppButton from '@/components/WhatsAppButton';

const Home = () => {
  const features = [
    {
      icon: Building,
      title: "Création d'entreprise",
      description: "NIF & RCCM simplifiés avec suivi en temps réel"
    },
    {
      icon: Globe,
      title: "Présence digitale",
      description: "Sites web, logos et stratégie de visibilité en ligne"
    },
    {
      icon: Calculator,
      title: "Services fiscaux",
      description: "Déclarations fiscales et suivi comptable professionnel"
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Support expert et conseil personnalisé"
    }
  ];

  const services = [
    {
      title: "NIF & RCCM",
      description: "Création rapide de votre statut juridique",
      price: "À partir de 50 000 FCFA",
      link: "/inscription-nif-rccm",
      icon: Building
    },
    {
      title: "Site Web",
      description: "Vitrine, e-commerce ou landing page",
      price: "À partir de 150 000 FCFA",
      link: "/website-service",
      icon: Globe
    },
    {
      title: "Logo & Identité",
      description: "Design professionnel de votre marque",
      price: "À partir de 75 000 FCFA",
      link: "/logo-service",
      icon: Palette
    },
    {
      title: "Déclaration Fiscale",
      description: "TVA, IS et conformité fiscale",
      price: "À partir de 25 000 FCFA",
      link: "/declaration-fiscale",
      icon: FileText
    },
    {
      title: "Suivi Comptable",
      description: "Gestion comptable complète",
      price: "À partir de 50 000 FCFA",
      link: "/comptabilite",
      icon: BarChart3
    },
    {
      title: "Visibilité Online",
      description: "Stratégie digitale complète",
      price: "Sur devis",
      link: "/visibilite-en-ligne",
      icon: Award
    }
  ];

  const slides = [
    {
      title: "Créez votre entreprise en quelques clics",
      subtitle: "NIF & RCCM simplifiés",
      description: "Obtenez votre statut juridique rapidement avec notre processus 100% digital",
      image: "🏢",
      cta: "Commencer",
      link: "/inscription-nif-rccm",
      gradient: "from-niger-orange to-niger-orange-dark"
    },
    {
      title: "Développez votre présence digitale",
      subtitle: "Sites web et identité visuelle",
      description: "Créez un site web professionnel et une identité de marque forte",
      image: "🎨",
      cta: "Découvrir",
      link: "/website-service",
      gradient: "from-niger-green to-niger-green-dark"
    },
    {
      title: "Gérez vos obligations fiscales",
      subtitle: "Déclarations et comptabilité",
      description: "Restez en conformité avec nos services fiscaux et comptables",
      image: "📊",
      cta: "En savoir plus",
      link: "/declaration-fiscale",
      gradient: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Carousel Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className={`relative rounded-2xl bg-gradient-to-r ${slide.gradient} p-8 md:p-12 text-white overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-8xl opacity-20">{slide.image}</div>
                    <div className="relative z-10 max-w-2xl">
                      <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <h2 className="text-xl md:text-2xl mb-4 opacity-90">{slide.subtitle}</h2>
                      <p className="text-lg mb-8 opacity-80">{slide.description}</p>
                      <Link to={slide.link}>
                        <Button size="lg" variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
                          {slide.cta}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription-nif-rccm">
              <Button size="lg" className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8 py-3">
                Créer mon entreprise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/connexion">
              <Button size="lg" variant="outline" className="border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8 py-3">
                Mon tableau de bord
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Niger EntreprenderHub ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche moderne et efficace pour tous vos besoins entrepreneuriaux
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-niger-orange to-niger-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services complets
            </h2>
            <p className="text-gray-600">
              Des solutions sur mesure pour votre réussite entrepreneuriale
            </p>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-niger-orange font-semibold mb-4">{service.price}</p>
                      <Link to={service.link}>
                        <Button className="w-full bg-niger-green hover:bg-niger-green-dark text-white">
                          En savoir plus
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-niger-orange to-niger-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les centaines d'entrepreneurs qui nous font confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/creer-compte">
              <Button size="lg" variant="secondary" className="bg-white text-niger-orange hover:bg-gray-100 px-8 py-3">
                Créer un compte gratuit
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-niger-orange px-8 py-3">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-niger-green" />
              <span className="text-gray-700">Processus 100% légal</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-niger-green" />
              <span className="text-gray-700">Suivi en temps réel</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-niger-green" />
              <span className="text-gray-700">Support expert 24/7</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
