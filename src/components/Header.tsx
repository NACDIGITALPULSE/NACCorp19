
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NC</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-niger-orange transition-colors">
              Accueil
            </Link>
            <Link to="/tarifs" className="text-gray-700 hover:text-niger-orange transition-colors">
              Tarifs
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-niger-orange transition-colors">
              Contact
            </Link>
          </nav>

          {/* Boutons d'action Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Link to="/tableau-de-bord">
                <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                  Tableau de bord
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/connexion">
                  <Button variant="ghost" className="text-gray-700 hover:text-niger-orange">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/creer-compte">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Créer un compte
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-niger-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/tarifs"
              className="block px-3 py-2 text-gray-700 hover:text-niger-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-niger-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 pb-2 border-t border-gray-200">
              {isAuthenticated ? (
                <Link to="/tableau-de-bord" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Tableau de bord
                  </Button>
                </Link>
              ) : (
                <div className="space-y-2">
                  <Link to="/connexion" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full text-gray-700 hover:text-niger-orange">
                      Se connecter
                    </Button>
                  </Link>
                  <Link to="/creer-compte" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                      Créer un compte
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
