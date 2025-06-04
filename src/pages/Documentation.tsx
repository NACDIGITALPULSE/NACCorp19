
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, FileText, Download, Video, Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationSections = [
    {
      title: "Guide de démarrage",
      description: "Commencez rapidement avec nos services",
      icon: BookOpen,
      items: [
        "Comment créer votre compte",
        "Première demande de NIF",
        "Upload de documents",
        "Suivi de votre dossier"
      ]
    },
    {
      title: "API Documentation",
      description: "Intégrez nos services dans vos applications",
      icon: Code,
      items: [
        "Authentification API",
        "Endpoints disponibles",
        "Exemples de code",
        "Gestion des erreurs"
      ]
    },
    {
      title: "Guides détaillés",
      description: "Tutoriels complets pour chaque service",
      icon: FileText,
      items: [
        "Création d'entreprise complète",
        "Services de design",
        "Déclarations fiscales",
        "Comptabilité en ligne"
      ]
    },
    {
      title: "Ressources vidéo",
      description: "Tutoriels vidéo pas à pas",
      icon: Video,
      items: [
        "Démonstration plateforme",
        "Processus NIF & RCCM",
        "Gestion des documents",
        "FAQ en vidéo"
      ]
    }
  ];

  const downloads = [
    {
      title: "Guide utilisateur complet",
      description: "Manuel d'utilisation de la plateforme (PDF)",
      size: "2.5 MB"
    },
    {
      title: "Liste des documents requis",
      description: "Documents nécessaires pour chaque service (PDF)",
      size: "1.2 MB"
    },
    {
      title: "Modèles de documents",
      description: "Templates et exemples de documents (ZIP)",
      size: "5.8 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tout ce dont vous avez besoin pour utiliser nos services efficacement
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher dans la documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {documentationSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <section.icon className="w-8 h-8 text-niger-orange" />
                    <div>
                      <CardTitle className="dark:text-white">{section.title}</CardTitle>
                      <CardDescription className="dark:text-gray-400">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <FileText className="w-4 h-4 text-niger-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Downloads Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Téléchargements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {downloads.map((download, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <Download className="w-8 h-8 text-niger-orange mb-2" />
                    <CardTitle className="text-lg dark:text-white">{download.title}</CardTitle>
                    <CardDescription className="dark:text-gray-400">{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{download.size}</span>
                      <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                        Télécharger
                      </Button>
                    </div>
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

export default Documentation;
