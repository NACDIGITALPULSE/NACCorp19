
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Linkedin, Twitter, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotreEquipe = () => {
  const teamMembers = [
    {
      name: "Amadou HASSAN",
      role: "Directeur Général",
      description: "Expert en entrepreneuriat avec plus de 10 ans d'expérience dans l'accompagnement des entreprises au Niger.",
      image: "👨‍💼"
    },
    {
      name: "Aicha IBRAHIM",
      role: "Directrice des Opérations",
      description: "Spécialisée dans l'optimisation des processus administratifs et la relation client.",
      image: "👩‍💼"
    },
    {
      name: "Moussa ABDOU",
      role: "Responsable Juridique",
      description: "Juriste d'entreprise expert en droit des affaires et réglementation nigérienne.",
      image: "👨‍⚖️"
    },
    {
      name: "Fatima OUSMANE",
      role: "Designer Graphique",
      description: "Créatrice d'identités visuelles et spécialiste en design digital.",
      image: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Notre Équipe
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une équipe passionnée et experte au service de votre réussite entrepreneuriale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="dark:text-white">{member.name}</CardTitle>
                  <CardDescription className="text-niger-orange font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-niger-orange cursor-pointer transition-colors" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-niger-orange cursor-pointer transition-colors" />
                    <Mail className="w-5 h-5 text-gray-400 hover:text-niger-orange cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">Rejoignez Notre Équipe</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Nous recherchons toujours des talents passionnés pour renforcer notre équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Si vous souhaitez contribuer à l'écosystème entrepreneurial nigérien et faire partie d'une équipe dynamique, 
                  nous serions ravis de vous rencontrer.
                </p>
                <div className="text-niger-orange font-semibold">
                  📧 carrieres@nacentreprise.com
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotreEquipe;
