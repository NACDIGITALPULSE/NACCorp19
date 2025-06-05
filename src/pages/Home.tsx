
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";
import AIAssistant from "@/components/AIAssistant";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Statistics />
      
      {/* Why Choose NACCORP Section */}
      <section id="why-choose" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi choisir NACCORP ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La plateforme de référence pour simplifier vos démarches administratives et créer une identité visuelle forte au Niger
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-niger-orange rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rapidité exceptionnelle</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Obtenez votre NIF en 24-48h et votre RCCM en moins d'une semaine grâce à notre processus 100% digitalisé
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Processus automatisé
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Suivi en temps réel
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-niger-green rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sécurité garantie</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vos données sont protégées par les plus hauts standards de sécurité et de confidentialité
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Chiffrement SSL
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Conformité RGPD
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-niger-orange rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Support expert 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Notre équipe d'experts vous accompagne à chaque étape de votre projet entrepreneurial
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Chat en direct
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Assistance personnalisée
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Tarifs Transparents
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des prix justes et transparents pour tous vos besoins entrepreneuriaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* NIF Package */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Création NIF</h3>
                <div className="text-3xl font-bold text-niger-orange mb-4">25 000 FCFA</div>
                <p className="text-gray-600 dark:text-gray-300">Obtenez votre Numéro d'Identification Fiscale</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Traitement en 24-48h
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Processus 100% digital
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Support inclus
                </li>
              </ul>
              <Link to="/inscription-nif-rccm">
                <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                  Commander maintenant
                </Button>
              </Link>
            </div>

            {/* Complete Package */}
            <div className="bg-niger-orange rounded-xl p-8 text-white relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-niger-green text-white px-4 py-1 rounded-full text-sm font-medium">
                  Plus populaire
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Pack Complet</h3>
                <div className="text-3xl font-bold mb-4">120 000 FCFA</div>
                <p className="text-white/90">NIF + RCCM + Logo professionnel</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Création NIF
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Enregistrement RCCM
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Logo professionnel
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Support prioritaire
                </li>
              </ul>
              <Link to="/inscription-nif-rccm">
                <Button className="w-full bg-white text-niger-orange hover:bg-gray-100">
                  Commander maintenant
                </Button>
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pack Premium</h3>
                <div className="text-3xl font-bold text-niger-green mb-4">200 000 FCFA</div>
                <p className="text-gray-600 dark:text-gray-300">Solution complète avec accompagnement</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Tout du pack complet
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Charte graphique
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Site web vitrine
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email professionnel
                </li>
              </ul>
              <Link to="/pack-entrepreneur">
                <Button className="w-full bg-niger-green hover:bg-green-700 text-white">
                  Commander maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-niger-orange to-niger-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Rejoignez les milliers d'entrepreneurs qui ont choisi NACCORP pour créer et développer leur entreprise au Niger
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/inscription-nif-rccm" className="flex-1">
              <Button size="lg" className="w-full bg-white text-niger-orange hover:bg-gray-100 shadow-lg">
                Créer mon entreprise
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact" className="flex-1">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-niger-orange shadow-lg"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Home;
