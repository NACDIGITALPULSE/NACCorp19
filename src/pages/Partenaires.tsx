
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Handshake, Building, Globe, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partenaires = () => {
  const partners = [
    {
      name: "Ministère du Commerce",
      type: "Institutionnel",
      description: "Partenariat pour la simplification des procédures administratives",
      logo: "🏛️"
    },
    {
      name: "Chambre de Commerce",
      type: "Institutionnel", 
      description: "Collaboration pour l'accompagnement des entrepreneurs",
      logo: "🏢"
    },
    {
      name: "Banque Atlantique",
      type: "Financier",
      description: "Solutions de financement pour les nouvelles entreprises",
      logo: "🏦"
    },
    {
      name: "Tech Hub Niger",
      type: "Technologique",
      description: "Accompagnement des startups technologiques",
      logo: "💻"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Réseau étendu",
      description: "Accès à un réseau de partenaires locaux et internationaux"
    },
    {
      icon: Users,
      title: "Expertise partagée",
      description: "Bénéficiez de l'expertise combinée de tous nos partenaires"
    },
    {
      icon: Building,
      title: "Solutions complètes",
      description: "Des services intégrés pour tous vos besoins entrepreneuriaux"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Handshake className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Nos Partenaires
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              NACCORP collabore avec un écosystème de partenaires de confiance pour offrir des services complets aux entrepreneurs
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 mx-auto text-niger-orange mb-4" />
                  <CardTitle className="dark:text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Nos Partenaires Stratégiques
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="dark:text-white">{partner.name}</CardTitle>
                          <Badge className="bg-niger-orange text-white">{partner.type}</Badge>
                        </div>
                        <CardDescription className="dark:text-gray-400">{partner.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnership Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Types de Partenariats
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-center dark:text-white">Partenaires Institutionnels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Administrations publiques</li>
                    <li>• Organismes consulaires</li>
                    <li>• Institutions de régulation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-center dark:text-white">Partenaires Financiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Banques et institutions financières</li>
                    <li>• Organismes de microfinance</li>
                    <li>• Fonds d'investissement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-center dark:text-white">Partenaires Technologiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Incubateurs et accélérateurs</li>
                    <li>• Hubs technologiques</li>
                    <li>• Fournisseurs de solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Become Partner CTA */}
          <Card className="bg-gradient-to-r from-niger-orange to-niger-green text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Devenez Partenaire NACCORP</CardTitle>
              <CardDescription className="text-white/90">
                Rejoignez notre écosystème et participez au développement de l'entrepreneuriat au Niger
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Avantages Partenaires</h3>
                  <ul className="text-white/90 text-sm">
                    <li>• Accès à notre base clients</li>
                    <li>• Co-marketing et communication</li>
                    <li>• Développement d'affaires mutuel</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Critères de Partenariat</h3>
                  <ul className="text-white/90 text-sm">
                    <li>• Expertise reconnue</li>
                    <li>• Valeurs partagées</li>
                    <li>• Engagement qualité</li>
                  </ul>
                </div>
              </div>
              <Button className="bg-white text-niger-orange hover:bg-gray-100">
                Proposer un Partenariat
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partenaires;
