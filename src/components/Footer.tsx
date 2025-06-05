
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AIAssistant from "@/components/AIAssistant";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envoi d'email à youtube@nacdigitalpulse.com
    try {
      // Ici vous pourriez intégrer un service d'email
      console.log(`Envoi newsletter vers youtube@nacdigitalpulse.com pour: ${email}`);
      
      toast({
        title: "Inscription réussie !",
        description: "Merci de vous être abonné à notre newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                NACCORP
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La plateforme de référence pour simplifier vos démarches administratives 
              et créer une identité visuelle forte au Niger.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Téléphone:</span> +227 98141675
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> support@nacentreprise.com
              </p>
            </div>
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
              <li><Link to="/inscription-nif-rccm" className="hover:text-white transition-colors">Création NIF</Link></li>
              <li><Link to="/inscription-nif-rccm" className="hover:text-white transition-colors">Enregistrement RCCM</Link></li>
              <li><Link to="/logo-service" className="hover:text-white transition-colors">Création de logo</Link></li>
              <li><Link to="/charte-graphique" className="hover:text-white transition-colors">Charte graphique</Link></li>
              <li><Link to="/supports-marketing" className="hover:text-white transition-colors">Supports marketing</Link></li>
              <li><Link to="/pack-entrepreneur" className="hover:text-white transition-colors">Pack entrepreneur</Link></li>
              <li><Link to="/email-professionnel" className="hover:text-white transition-colors">Email professionnel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-niger-green">Entreprise</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/notre-equipe" className="hover:text-white transition-colors">Notre équipe</Link></li>
              <li><Link to="/carrieres" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link to="/presse" className="hover:text-white transition-colors">Presse</Link></li>
              <li><Link to="/partenaires" className="hover:text-white transition-colors">Partenaires</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-niger-orange">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/centre-aide" className="hover:text-white transition-colors">Centre d'aide</Link></li>
              <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/status-systeme" className="hover:text-white transition-colors">Status système</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/cgu" className="hover:text-white transition-colors">CGU</Link></li>
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
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-niger-orange focus:outline-none"
                required
              />
              <Button type="submit" className="bg-niger-orange hover:bg-niger-orange-dark text-white px-6">
                S'abonner
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 NACCORP. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇳🇪 Certifié par NAC DIGITAL PULSE</span>
              <span>•</span>
              <span>Sécurisé et fiable</span>
            </div>
          </div>
        </div>
      </div>
      
      <AIAssistant />
    </footer>
  );
};

export default Footer;
