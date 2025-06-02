
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      icon: Users,
      title: "Accompagnement",
      description: "Support financier et déclarations administratives"
    },
    {
      icon: Award,
      title: "Expertise locale",
      description: "Connaissance approfondie du marché nigérien"
    }
  ];

  const services = [
    {
      title: "NIF & RCCM",
      description: "Création rapide de votre statut juridique",
      price: "À partir de 50 000 FCFA",
      link: "/inscription-nif-rccm"
    },
    {
      title: "Site Web",
      description: "Vitrine, e-commerce ou landing page",
      price: "À partir de 150 000 FCFA",
      link: "/website-service"
    },
    {
      title: "Logo & Identité",
      description: "Design professionnel de votre marque",
      price: "À partir de 75 000 FCFA",
      link: "/logo-service"
    },
    {
      title: "Visibilité Online",
      description: "Stratégie digitale complète",
      price: "Sur devis",
      link: "/visibilite-en-ligne"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre partenaire pour
            <span className="text-niger-orange"> créer</span> et
            <span className="text-niger-green"> développer</span> votre entreprise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            De la création de votre statut juridique à votre présence digitale, 
            nous vous accompagnons à chaque étape de votre aventure entrepreneuriale au Niger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription-nif-rccm">
              <Button size="lg" className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8 py-3">
                Créer mon entreprise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/connexion">
              <Button size="lg" variant="outline" className="border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8 py-3">
                Accéder à mon tableau de bord
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services principaux
            </h2>
            <p className="text-gray-600">
              Des solutions complètes pour votre réussite entrepreneuriale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
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
            ))}
          </div>
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
              <span className="text-gray-700">Support expert</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
