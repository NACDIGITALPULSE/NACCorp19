
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, FileText, Palette, DollarSign, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const nifPricing = [
    {
      type: 'NIF-P',
      title: 'NIF Personne Physique',
      description: 'Pour entrepreneurs individuels et professionnels libéraux',
      price: '15,000',
      features: [
        'Création du NIF personnel',
        'Dossier complet',
        'Suivi en temps réel',
        'Support client inclus',
        'Délai: 2-3 jours'
      ]
    },
    {
      type: 'NIF-R',
      title: 'NIF Personne Morale',
      description: 'Pour sociétés, associations et coopératives',
      price: '25,000',
      features: [
        'Création du NIF entreprise',
        'RCCM inclus',
        'Dossier administratif complet',
        'Support expert',
        'Délai: 3-5 jours'
      ],
      popular: true
    },
    {
      type: 'NIF-S',
      title: 'NIF Structure Spéciale',
      description: 'Pour ONG et organisations internationales',
      price: 'Sur devis',
      features: [
        'Étude personnalisée',
        'Accompagnement spécialisé',
        'Dossier sur mesure',
        'Support premium',
        'Délai: 5-7 jours'
      ]
    }
  ];

  const designServices = [
    {
      title: 'Logo Professionnel',
      price: '35,000',
      features: [
        '3 propositions de design',
        'Révisions illimitées',
        'Fichiers haute résolution',
        'Formats vectoriels inclus',
        'Délai: 3-5 jours'
      ]
    },
    {
      title: 'Site Web Vitrine',
      price: '150,000',
      features: [
        'Design responsive',
        'Jusqu\'à 5 pages',
        'Optimisation SEO',
        'Formulaire de contact',
        'Hébergement 1 an inclus'
      ]
    },
    {
      title: 'Site E-commerce',
      price: '350,000',
      features: [
        'Boutique complète',
        'Paiement en ligne',
        'Gestion des stocks',
        'Panel d\'administration',
        'Formation incluse'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Accompagnement Financier',
      price: '50,000',
      description: 'Aide aux déclarations et gestion comptable',
      features: ['Déclarations fiscales', 'Conseils comptables', 'Suivi personnalisé']
    },
    {
      title: 'Gestion Réseaux Sociaux',
      price: '75,000/mois',
      description: 'Gestion complète de votre présence digitale',
      features: ['Création de contenu', 'Publication régulière', 'Analyse des performances']
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-niger-sand via-white to-niger-orange/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tarifs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
                Transparents
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prix fixes et transparents pour tous nos services. Aucune surprise, aucun frais caché.
            </p>
          </div>
        </section>

        {/* NIF Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Création NIF & RCCM
              </h2>
              <p className="text-lg text-gray-600">
                Choisissez le type de NIF adapté à votre situation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {nifPricing.map((plan) => (
                <Card key={plan.type} className={`relative ${plan.popular ? 'border-niger-orange shadow-xl scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-niger-orange text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Plus populaire
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-niger-orange">{plan.price}</span>
                      {plan.price !== 'Sur devis' && <span className="text-gray-600"> FCFA</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-niger-green mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/inscription-nif-rccm" className="block">
                      <Button className={`w-full mt-6 ${plan.popular ? 'bg-niger-orange hover:bg-niger-orange-dark' : 'bg-niger-green hover:bg-niger-green-dark'} text-white`}>
                        <FileText className="w-4 h-4 mr-2" />
                        Commencer
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services de Design
              </h2>
              <p className="text-lg text-gray-600">
                Créez une identité visuelle forte pour votre entreprise
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-niger-green">{service.price}</span>
                      <span className="text-gray-600"> FCFA</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-niger-green mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.title === 'Logo Professionnel' ? '/logo-service' : '/website-service'} className="block">
                      <Button className="w-full mt-6 bg-niger-green hover:bg-niger-green-dark text-white">
                        <Palette className="w-4 h-4 mr-2" />
                        Commander
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services Additionnels
              </h2>
              <p className="text-lg text-gray-600">
                Accompagnement complet pour votre développement
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <DollarSign className="w-6 h-6 text-niger-orange mr-2" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-niger-orange">{service.price}</span>
                      <span className="text-gray-600"> FCFA</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-niger-green mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-niger-orange hover:bg-niger-orange-dark text-white">
                      <Users className="w-4 h-4 mr-2" />
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pack Complet */}
        <section className="py-20 bg-gradient-to-r from-niger-orange to-niger-green">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Pack Entrepreneur Complet
            </h2>
            <p className="text-xl mb-8 opacity-90">
              NIF + RCCM + Logo + Site vitrine à prix préférentiel
            </p>
            <div className="bg-white/10 rounded-xl p-8 mb-8">
              <div className="text-5xl font-bold mb-2">199,000 FCFA</div>
              <div className="text-lg opacity-75 line-through">Au lieu de 225,000 FCFA</div>
              <div className="text-2xl font-bold mt-2">Économisez 26,000 FCFA !</div>
            </div>
            <Link to="/inscription-nif-rccm">
              <Button size="lg" className="bg-white text-niger-orange hover:bg-gray-100 font-bold px-8">
                <Star className="w-5 h-5 mr-2" />
                Commander le pack complet
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
