
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, ExternalLink, Newspaper } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Presse = () => {
  const pressReleases = [
    {
      title: "NACCORP lance sa plateforme de création d'entreprise 100% digitale",
      date: "2024-03-15",
      category: "Lancement",
      excerpt: "La nouvelle plateforme révolutionne les démarches administratives au Niger avec des processus entièrement dématérialisés.",
      downloadUrl: "#"
    },
    {
      title: "Partenariat stratégique avec les autorités nigériennes",
      date: "2024-02-28",
      category: "Partenariat",
      excerpt: "NACCORP signe un accord de collaboration avec les administrations pour simplifier les procédures.",
      downloadUrl: "#"
    },
    {
      title: "Plus de 1000 entreprises créées en 6 mois",
      date: "2024-02-15",
      category: "Résultats",
      excerpt: "Un succès qui confirme l'impact positif de NACCORP sur l'écosystème entrepreneurial nigérien.",
      downloadUrl: "#"
    }
  ];

  const mediaAssets = [
    {
      title: "Kit de presse NACCORP 2024",
      description: "Logos, images haute résolution et informations sur l'entreprise",
      type: "ZIP",
      size: "12 MB"
    },
    {
      title: "Présentation corporate",
      description: "Présentation officielle de NACCORP et de ses services",
      type: "PDF",
      size: "5 MB"
    },
    {
      title: "Statistiques et chiffres clés",
      description: "Données sur l'impact de NACCORP sur l'entrepreneuriat au Niger",
      type: "PDF",
      size: "2 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Espace Presse
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Retrouvez toutes les actualités, communiqués de presse et ressources médias de NACCORP
            </p>
          </div>

          {/* Contact Presse */}
          <Card className="mb-12 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Contact Presse</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Pour toute demande d'interview ou d'information complémentaire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Relations Presse</h3>
                  <p className="text-gray-600 dark:text-gray-300">Email : presse@nacentreprise.com</p>
                  <p className="text-gray-600 dark:text-gray-300">Téléphone : +227 98141675</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">Direction Générale</h3>
                  <p className="text-gray-600 dark:text-gray-300">Email : direction@nacentreprise.com</p>
                  <p className="text-gray-600 dark:text-gray-300">Disponibilité : Lundi-Vendredi 9h-17h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communiqués de Presse */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Communiqués de Presse
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-niger-orange text-white">{release.category}</Badge>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(release.date).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                        <CardTitle className="text-xl dark:text-white">{release.title}</CardTitle>
                        <CardDescription className="dark:text-gray-400">{release.excerpt}</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4 dark:border-gray-600 dark:text-gray-300">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Ressources Médias */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Ressources Médias
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mediaAssets.map((asset, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg dark:text-white">{asset.title}</CardTitle>
                    <CardDescription className="dark:text-gray-400">{asset.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {asset.type}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{asset.size}</span>
                    </div>
                    <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Vous êtes journaliste ?</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Contactez notre service presse pour organiser une interview ou obtenir des informations exclusives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-niger-green hover:bg-green-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contacter la presse
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Presse;
