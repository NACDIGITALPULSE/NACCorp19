
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Carrieres = () => {
  const jobs = [
    {
      title: "Développeur Full Stack",
      department: "Technique",
      location: "Niamey, Niger",
      type: "CDI",
      description: "Rejoignez notre équipe pour développer et maintenir notre plateforme digitale.",
      requirements: ["React", "Node.js", "PostgreSQL", "3+ ans d'expérience"]
    },
    {
      title: "Conseiller en Création d'Entreprise",
      department: "Commercial",
      location: "Niamey, Niger",
      type: "CDI",
      description: "Accompagnez nos clients dans leurs démarches de création d'entreprise.",
      requirements: ["Droit des affaires", "Relation client", "Expérience administrative"]
    },
    {
      title: "Designer Graphique",
      department: "Créatif",
      location: "Télétravail",
      type: "Freelance",
      description: "Créez des identités visuelles pour nos clients entrepreneurs.",
      requirements: ["Adobe Creative Suite", "Portfolio solide", "Créativité"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Rejoignez NACCORP
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Participez à la révolution entrepreneuriale au Niger en rejoignant une équipe passionnée
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-niger-orange mb-4" />
                <CardTitle className="dark:text-white">Équipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Travaillez avec des professionnels passionnés dans un environnement collaboratif
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto text-niger-green mb-4" />
                <CardTitle className="dark:text-white">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Contribuez au développement économique du Niger en aidant les entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto text-niger-orange mb-4" />
                <CardTitle className="dark:text-white">Flexibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Bénéficiez d'un équilibre vie professionnelle/personnelle avec des horaires flexibles
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Offres d'emploi
            </h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl dark:text-white">{job.title}</CardTitle>
                        <CardDescription className="dark:text-gray-400">{job.description}</CardDescription>
                      </div>
                      <Badge className="bg-niger-orange text-white">{job.department}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 dark:text-white">Compétences requises :</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <Badge key={idx} variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                      Postuler
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
                <CardTitle className="dark:text-white">Vous ne trouvez pas l'offre qui vous correspond ?</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Envoyez-nous votre candidature spontanée, nous serons ravis d'étudier votre profil
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-niger-green hover:bg-green-700 text-white">
                  Candidature spontanée
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

export default Carrieres;
