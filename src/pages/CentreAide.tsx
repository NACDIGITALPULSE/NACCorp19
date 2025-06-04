
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HelpCircle, Search, FileText, MessageCircle, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const CentreAide = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      question: "Comment créer mon NIF en ligne ?",
      answer: "Connectez-vous à votre compte, allez dans 'NIF & RCCM', remplissez le formulaire et soumettez les documents requis."
    },
    {
      question: "Quels documents sont nécessaires pour le RCCM ?",
      answer: "Vous avez besoin d'une pièce d'identité, d'un justificatif de domicile, et des statuts de votre entreprise."
    },
    {
      question: "Combien de temps pour obtenir mon NIF ?",
      answer: "Le traitement prend généralement 3-5 jours ouvrables une fois tous les documents validés."
    },
    {
      question: "Comment puis-je suivre l'avancement de ma demande ?",
      answer: "Connectez-vous à votre tableau de bord pour voir le statut en temps réel de toutes vos demandes."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Chat en direct",
      description: "Obtenez une aide immédiate via notre chat",
      action: "Démarrer le chat"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envoyez-nous vos questions détaillées",
      action: "support@nacentreprise.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Appelez-nous directement",
      action: "+227 98141675"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Centre d'Aide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher dans l'aide..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-niger-orange" />
                  <CardTitle className="dark:text-white">{option.title}</CardTitle>
                  <CardDescription className="dark:text-gray-400">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Questions Fréquentes</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center dark:text-white">
                      <FileText className="w-5 h-5 mr-3 text-niger-orange" />
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CentreAide;
