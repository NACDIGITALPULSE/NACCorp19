
import { Star, Zap, Sparkles, Rocket, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-niger-orange to-niger-green relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <Star className="absolute top-20 left-20 w-16 h-16 text-white/10 animate-spin-slow" />
        <Zap className="absolute bottom-20 right-20 w-20 h-20 text-white/10 animate-bounce" />
        <Sparkles className="absolute top-1/2 left-1/4 w-12 h-12 text-white/10 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6 animate-scale-in">
          Prêt à lancer votre projet ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Rejoignez les milliers d'entrepreneurs qui ont choisi NACCORP pour créer et développer leur entreprise au Niger
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/inscription-nif-rccm" className="flex-1">
            <Button size="lg" className="w-full bg-white text-niger-orange hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Créer mon entreprise
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact" className="flex-1">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-white text-white hover:bg-white hover:text-niger-orange shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <Users className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
