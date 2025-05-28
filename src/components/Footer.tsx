
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NE</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                Niger EntreprenderHub
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La plateforme de référence pour simplifier vos démarches administratives 
              et créer une identité visuelle forte au Niger.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-niger-orange">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-niger-orange">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="text-gray-400 border-gray-600 hover:text-white hover:border-niger-orange">
                Twitter
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-niger-orange">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Création NIF</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enregistrement RCCM</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Création de logo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Charte graphique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supports marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pack entrepreneur</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-niger-green">Entreprise</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notre équipe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-niger-orange">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status système</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Restez informé des actualités entrepreneuriales</h3>
              <p className="text-gray-400">
                Recevez nos conseils, actualités et offres spéciales directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-niger-orange focus:outline-none"
              />
              <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Niger EntreprenderHub. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇳🇪 Fait avec ❤️ au Niger</span>
              <span>•</span>
              <span>Certifié et sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
