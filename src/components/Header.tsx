
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-niger-orange to-niger-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NE</span>
              </div>
              <span className="font-playfair font-bold text-xl text-gray-900">
                Niger EntreprenderHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-gray-600 hover:text-niger-orange transition-colors">
              Services
            </a>
            <a href="/#processus" className="text-gray-600 hover:text-niger-orange transition-colors">
              Comment ça marche
            </a>
            <Link to="/tarifs" className="text-gray-600 hover:text-niger-orange transition-colors">
              Tarifs
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-niger-orange transition-colors">
              Contact
            </Link>
            <Link to="/creer-compte">
              <Button variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white">
                Créer un compte
              </Button>
            </Link>
            <Link to="/inscription-nif-rccm">
              <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                NIF & RCCM
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-niger-orange"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="/#services" className="text-gray-600 hover:text-niger-orange transition-colors">
                Services
              </a>
              <a href="/#processus" className="text-gray-600 hover:text-niger-orange transition-colors">
                Comment ça marche
              </a>
              <Link to="/tarifs" className="text-gray-600 hover:text-niger-orange transition-colors">
                Tarifs
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-niger-orange transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/creer-compte">
                  <Button variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white w-full">
                    Créer un compte
                  </Button>
                </Link>
                <Link to="/inscription-nif-rccm">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white w-full">
                    NIF & RCCM
                  </Button>
                </Link>
                <Link to="/visibilite-en-ligne">
                  <Button className="bg-niger-green hover:bg-niger-green-dark text-white w-full">
                    Visibilité en ligne
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
