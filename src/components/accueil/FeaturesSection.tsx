
import { Zap, Shield, Users, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green animate-pulse">
              NACCORP
            </span>{' '}
            ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            La plateforme de référence pour simplifier vos démarches administratives au Niger
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: "Rapidité exceptionnelle", 
              desc: "Obtenez votre NIF en 24-48h et votre RCCM en moins d'une semaine", 
              color: "bg-niger-orange", 
              features: ["Processus automatisé", "Suivi en temps réel"] 
            },
            { 
              icon: Shield, 
              title: "Sécurité garantie", 
              desc: "Vos données sont protégées par les plus hauts standards de sécurité", 
              color: "bg-niger-green", 
              features: ["Chiffrement SSL", "Conformité RGPD"] 
            },
            { 
              icon: Users, 
              title: "Support expert 24/7", 
              desc: "Notre équipe d'experts vous accompagne à chaque étape", 
              color: "bg-niger-orange", 
              features: ["Chat en direct", "Assistance personnalisée"] 
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:animate-bounce`}>
                <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-niger-orange transition-colors">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
