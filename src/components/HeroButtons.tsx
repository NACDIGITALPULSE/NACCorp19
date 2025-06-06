
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Palette, ArrowRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Link to="/inscription-nif-rccm" className="group">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-niger-orange to-red-500 hover:from-niger-orange-dark hover:to-red-600 text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1"
        >
          <FileText className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
          Créer mon NIF & RCCM
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </Link>
      <Link to="/visibilite-en-ligne" className="group">
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-niger-green text-niger-green hover:bg-gradient-to-r hover:from-niger-green hover:to-teal-500 hover:text-white px-8 py-4 text-lg font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110"
        >
          <Palette className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
          Services design
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
