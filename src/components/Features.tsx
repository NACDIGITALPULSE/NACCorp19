
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, HeadphonesIcon, Award, FileCheck, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurisé et Conforme",
      description: "Nos procédures respectent toutes les réglementations nigériennes en vigueur"
    },
    {
      icon: Clock,
      title: "Traitement Rapide",
      description: "Obtenez vos documents en 48-72h au lieu de plusieurs semaines"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Expert",
      description: "Notre équipe vous accompagne à chaque étape du processus"
    },
    {
      icon: Award,
      title: "Qualité Garantie",
      description: "99% de taux de réussite sur les demandes traitées"
    },
    {
      icon: FileCheck,
      title: "Documents Officiels",
      description: "Tous vos documents sont authentiques et reconnus par l'État"
    },
    {
      icon: Palette,
      title: "Design Professionnel",
      description: "Créez une identité visuelle forte avec nos services graphiques"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi nous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
              choisir ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avantages qui font de nous le partenaire idéal pour vos démarches administratives et créatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex p-4 bg-gradient-to-r from-niger-orange/10 to-niger-green/10 rounded-xl mb-4">
                  <feature.icon className="w-8 h-8 text-niger-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
