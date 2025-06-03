
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm dark:bg-gray-900/95 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <img 
                  src="/lovable-uploads/4d7841ab-db59-4429-8ff2-fca10017244f.png" 
                  alt="NACCorp Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-playfair font-bold text-xl text-gray-900 group-hover:text-niger-orange transition-colors dark:text-white dark:group-hover:text-niger-orange">
                Niger EntreprenderHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Tous alignés sur une ligne */}
          <nav className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <a href="/#services" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                  Services
                </a>
              </div>
              <Link to="/journal" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Journal
              </Link>
              
              {/* Tarifs avec sous-menu Simulateur */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                  Tarifs <ChevronDown className="w-4 h-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/tarifs">Voir tous les tarifs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/simulateur">Simulateur de coûts</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/a-propos" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Contact
              </Link>
              <Link to="/offshore" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Offshore
              </Link>
            </div>
            
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-4 dark:border-gray-700">
              <ThemeToggle />
              
              {isAuthenticated ? (
                <>
                  <Link to="/tableau-de-bord" className="text-gray-700 hover:text-niger-orange transition-colors font-medium px-3 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                    Tableau de bord
                  </Link>
                  <div className="flex items-center space-x-3 border-l border-gray-200 pl-3 dark:border-gray-700">
                    <span className="text-sm text-gray-600 font-medium dark:text-gray-400">
                      {user?.firstName}
                    </span>
                    <Button onClick={logout} variant="ghost" size="sm" className="text-gray-600 hover:text-niger-orange dark:text-gray-400 dark:hover:text-niger-orange">
                      <User className="w-4 h-4 mr-2" />
                      Déconnexion
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/connexion">
                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-niger-orange dark:text-gray-300 dark:hover:text-niger-orange">
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
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-niger-orange p-2 rounded-lg hover:bg-gray-50 dark:text-gray-400 dark:hover:text-niger-orange dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <a href="/#services" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Services
              </a>
              <Link to="/journal" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Journal
              </Link>
              <Link to="/tarifs" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Tarifs
              </Link>
              <Link to="/simulateur" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 pl-8 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                • Simulateur
              </Link>
              <Link to="/a-propos" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Contact
              </Link>
              <Link to="/offshore" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                Offshore
              </Link>
              
              {isAuthenticated && (
                <Link to="/tableau-de-bord" className="text-gray-700 hover:text-niger-orange transition-colors px-4 py-2 rounded-lg hover:bg-niger-orange/5 dark:text-gray-300 dark:hover:text-niger-orange">
                  Tableau de bord
                </Link>
              )}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100 mt-4 dark:border-gray-800">
                {isAuthenticated ? (
                  <>
                    <span className="text-sm text-gray-600 px-4 dark:text-gray-400">
                      Connecté en tant que {user?.firstName}
                    </span>
                    <Button onClick={logout} variant="ghost" className="text-gray-600 hover:text-niger-orange w-full justify-start dark:text-gray-400 dark:hover:text-niger-orange">
                      <User className="w-4 h-4 mr-2" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/connexion">
                      <Button variant="ghost" className="text-gray-600 hover:text-niger-orange w-full justify-start dark:text-gray-400 dark:hover:text-niger-orange">
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
