
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AnimatedFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const AnimatedFeatureCard = ({ icon: Icon, title, description, gradient }: AnimatedFeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-gray-200 hover:border-niger-orange/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white">
      <CardContent className="p-6 relative z-10">
        {/* Background gradient animé */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icône animée */}
        <div className="relative mb-4 flex justify-center">
          <div className="p-4 rounded-full bg-gradient-to-br from-niger-orange/10 to-niger-green/10 group-hover:from-niger-orange/20 group-hover:to-niger-green/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="w-8 h-8 text-niger-orange group-hover:text-niger-green transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>
        
        {/* Contenu */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-niger-orange transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </CardContent>
    </Card>
  );
};

export default AnimatedFeatureCard;
