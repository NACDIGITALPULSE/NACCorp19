
import { Card, CardContent } from "@/components/ui/card";
import { Check, FileText, Image, User } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: User,
      title: "Inscription & Profil",
      description: "Créez votre compte et renseignez les informations de votre entreprise",
      color: "from-niger-orange to-niger-orange-light"
    },
    {
      number: "02", 
      icon: FileText,
      title: "Démarches administratives",
      description: "Nous traitons votre demande de NIF et RCCM avec les autorités compétentes",
      color: "from-niger-green to-niger-green-light"
    },
    {
      number: "03",
      icon: Image,
      title: "Création graphique",
      description: "Notre équipe design crée votre logo et identité visuelle professionnelle",
      color: "from-niger-orange to-niger-green"
    },
    {
      number: "04",
      icon: Check,
      title: "Livraison complète",
      description: "Recevez tous vos documents officiels et créatifs dans votre espace personnel",
      color: "from-niger-green to-niger-green-dark"
    }
  ];

  return (
    <section id="processus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
              ça marche
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et transparent en 4 étapes pour lancer votre entreprise 
            avec tous les documents nécessaires et une identité visuelle forte.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-niger-orange via-niger-green to-niger-green-dark transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Step number badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-20`}>
                  {step.number}
                </div>

                <CardContent className="pt-8 pb-6 text-center">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${step.color} rounded-xl mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à lancer votre entreprise ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Rejoignez les centaines d'entrepreneurs qui nous font confiance pour leurs démarches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inscription">
                <button className="bg-niger-orange hover:bg-niger-orange-dark text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Commencer maintenant
                </button>
              </Link>
              <Link to="/inscription">
                <button className="border-2 border-niger-green text-niger-green hover:bg-niger-green hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Planifier un appel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
