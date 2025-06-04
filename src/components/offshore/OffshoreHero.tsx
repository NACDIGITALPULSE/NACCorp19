
import { Globe, CheckCircle, Clock } from 'lucide-react';

const OffshoreHero = () => {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <Globe className="w-16 h-16 mx-auto mb-6" />
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Création d'Entreprise Offshore
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Créez votre entreprise au Niger depuis l'étranger avec notre accompagnement professionnel
        </p>
        <div className="flex justify-center items-center space-x-8 text-sm">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Processus 100% en ligne
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Délai 5-10 jours
          </div>
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Support diaspora
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreHero;
