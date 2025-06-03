
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-niger-orange to-niger-green rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">NE</span>
              </div>
              <span className="font-playfair font-bold text-xl text-gray-900 group-hover:text-niger-orange transition-colors">
                Niger EntreprenderHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="/#services" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
                Services
              </a>
            </div>
            <Link to="/journal" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
              Journal
            </Link>
            <Link to="/simulateur" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
              Simulateur
            </Link>
            <Link to="/tarifs" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
              Tarifs
            </Link>
            <Link to="/a-propos" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/tableau-de-bord" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5">
                  Tableau de bord
                </Link>
                <div className="flex items-center space-x-4 border-l border-gray-200 pl-4 ml-4">
                  <span className="text-sm text-gray-600 font-medium">
                    {user?.firstName}
                  </span>
                  <Button onClick={logout} variant="ghost" size="sm" className="text-gray-600 hover:text-niger-orange">
                    <User className="w-4 h-4 mr-2" />
                    Déconnexion
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 border-l border-gray-200 pl-6 ml-4">
                <Link to="/connexion">
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-niger-orange">
                    <LogIn className="w-4 h-4 mr-2" />
                    Se connecter
                  </Button>
                </Link>
                <Link to="/creer-compte">
                  <Button variant="outline" size="sm" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white">
                    Créer un compte
                  </Button>
                </Link>
              </div>
            )}
            
            <Link to="/inscription-nif-rccm">
              <Button size="sm" className="bg-gradient-to-r from-niger-orange to-niger-orange-dark hover:from-niger-orange-dark hover:to-niger-orange text-white shadow-lg">
                NIF & RCCM
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-niger-orange p-2 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              <a href="/#services" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                Services
              </a>
              <Link to="/journal" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                Journal
              </Link>
              <Link to="/simulateur" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                Simulateur
              </Link>
              <Link to="/tarifs" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                Tarifs
              </Link>
              <Link to="/a-propos" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                Contact
              </Link>
              
              {isAuthenticated && (
                <Link to="/tableau-de-bord" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5">
                  Tableau de bord
                </Link>
              )}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100 mt-4">
                {isAuthenticated ? (
                  <>
                    <span className="text-sm text-gray-600 px-4">
                      Connecté en tant que {user?.firstName}
                    </span>
                    <Button onClick={logout} variant="ghost" className="text-gray-600 hover:text-niger-orange w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/connexion">
                      <Button variant="ghost" className="text-gray-600 hover:text-niger-orange w-full justify-start">
                        <LogIn className="w-4 h-4 mr-2" />
                        Se connecter
                      </Button>
                    </Link>
                    <Link to="/creer-compte">
                      <Button variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white w-full">
                        Créer un compte
                      </Button>
                    </Link>
                  </>
                )}
                
                <Link to="/inscription-nif-rccm">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white w-full">
                    NIF & RCCM
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
