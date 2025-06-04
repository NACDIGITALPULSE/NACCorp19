
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Target, Users, Award, Heart, Zap } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous nous engageons à fournir des services de la plus haute qualité pour garantir votre succès."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Nous vous accompagnons à chaque étape de votre parcours entrepreneurial avec expertise et bienveillance."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour simplifier et accélérer vos démarches administratives."
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Nous sommes profondément engagés dans le développement de l'écosystème entrepreneurial nigérien."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-niger-orange to-niger-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            À Propos de NACCORP
          </h1>
          <p className="text-xl opacity-90">
            Un projet NAC ENTREPRISE en collaboration avec NAC DIGITAL PULSE
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission */}
        <div className="mb-16">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-4 dark:text-white">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                NACCORP a pour mission de démocratiser l'entrepreneuriat au Niger en simplifiant 
                toutes les démarches administratives et en offrant des services digitaux de qualité. 
                Nous croyons que chaque idée d'entreprise mérite d'être concrétisée facilement et rapidement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About NAC */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center dark:text-white">
                  <Building2 className="w-6 h-6 mr-3 text-niger-orange" />
                  NAC ENTREPRISE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  NAC ENTREPRISE est une société spécialisée dans l'accompagnement entrepreneurial 
                  et les services aux entreprises. Forte de son expertise locale, elle comprend 
                  parfaitement les défis et opportunités du marché nigérien.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center dark:text-white">
                  <Zap className="w-6 h-6 mr-3 text-niger-green" />
                  NAC DIGITAL PULSE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  NAC DIGITAL PULSE apporte son expertise technologique et digitale pour créer 
                  des solutions innovantes. Cette synergie permet d'offrir une expérience 
                  utilisateur exceptionnelle et des outils modernes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-niger-orange" />
                  <CardTitle className="text-lg dark:text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-niger-orange/10 to-niger-green/10 border-niger-orange/20 dark:bg-gradient-to-r dark:from-niger-orange/20 dark:to-niger-green/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-4 dark:text-white">Notre Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Devenir la plateforme de référence pour tous les entrepreneurs du Niger et de la diaspora, 
                en offrant un écosystème complet de services digitaux qui transforme l'idée en entreprise prospère. 
                Nous aspirons à contribuer significativement au développement économique du Niger.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-niger-orange mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-300">Entreprises créées</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-niger-green mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-300">Satisfaction client</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-niger-orange mb-2">24h</div>
              <p className="text-gray-600 dark:text-gray-300">Support disponible</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-niger-green mb-2">3ans</div>
              <p className="text-gray-600 dark:text-gray-300">D'expérience</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
