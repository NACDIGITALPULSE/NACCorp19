
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Globe, Heart, Lightbulb, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous sommes passionnés par l'entrepreneuriat et le développement économique du Niger"
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Transparence et intégrité dans toutes nos interactions avec nos clients"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Solutions technologiques modernes pour simplifier vos démarches administratives"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Engagement à fournir des services de qualité supérieure à chaque étape"
    }
  ];

  const team = [
    {
      name: "Amadou Diallo",
      role: "Directeur Général",
      image: "👨‍💼",
      description: "Expert en développement économique avec 15 ans d'expérience"
    },
    {
      name: "Fatima Ousmane",
      role: "Responsable Juridique",
      image: "👩‍⚖️",
      description: "Spécialiste en droit des affaires et procédures administratives"
    },
    {
      name: "Ibrahim Moussa",
      role: "Chef de Projet Digital",
      image: "👨‍💻",
      description: "Expert en transformation digitale et solutions technologiques"
    },
    {
      name: "Aïcha Abdou",
      role: "Conseillère Clientèle",
      image: "👩‍💼",
      description: "Accompagnement personnalisé des entrepreneurs dans leurs projets"
    }
  ];

  const stats = [
    { number: "500+", label: "Entreprises créées", icon: "🏢" },
    { number: "1000+", label: "Clients satisfaits", icon: "😊" },
    { number: "50+", label: "Logos créés", icon: "🎨" },
    { number: "24/7", label: "Support disponible", icon: "📞" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-niger-orange to-niger-green relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            À propos de Niger EntreprenderHub
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nous sommes la plateforme de référence pour simplifier l'entrepreneuriat au Niger. 
            Notre mission est d'accompagner chaque entrepreneur dans la réalisation de ses projets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Mission claire
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Équipe experte
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Résultats prouvés
            </Badge>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl font-bold text-niger-orange mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Niger EntreprenderHub est née de la volonté de simplifier l'écosystème entrepreneurial nigérien. 
                  Conscients des défis que rencontrent les entrepreneurs dans leurs démarches administratives, 
                  nous avons créé une plateforme digitale innovante.
                </p>
                <p>
                  Depuis notre création, nous avons accompagné plus de 1000 entrepreneurs dans la concrétisation 
                  de leurs projets, de la création de leur statut juridique jusqu'au développement de leur 
                  identité visuelle.
                </p>
                <p>
                  Notre expertise couvre tous les aspects de l'entrepreneuriat : démarches administratives, 
                  services fiscaux, création d'identité visuelle, et développement de présence digitale.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-niger-orange to-niger-green rounded-2xl p-8 text-white text-center">
                <Globe className="w-24 h-24 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="text-lg opacity-90">
                  Faire du Niger un hub entrepreneurial dynamique où chaque idée peut devenir réalité 
                  grâce à des outils digitaux accessibles et efficaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne et notre engagement envers nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-niger-orange to-niger-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-niger-orange transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés qui mettent leur savoir-faire au service de votre réussite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{member.image}</div>
                  <CardTitle className="text-xl group-hover:text-niger-orange transition-colors">
                    {member.name}
                  </CardTitle>
                  <Badge variant="outline" className="border-niger-green text-niger-green mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-niger-green to-niger-green-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre idée en entreprise ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les centaines d'entrepreneurs qui nous font confiance pour leur réussite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inscription-nif-rccm">
              <Button size="lg" variant="secondary" className="bg-white text-niger-green hover:bg-gray-100 px-8 py-3">
                Commencer maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-niger-green px-8 py-3">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
