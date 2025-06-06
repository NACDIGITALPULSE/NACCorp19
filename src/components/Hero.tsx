
import { ArrowDown } from "lucide-react";
import HeroSlideCarousel from "./HeroSlideCarousel";
import ServicesCarousel from "./ServicesCarousel";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background animé en full width */}
      <HeroBackground />

      <div className="relative w-full max-w-none px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Carrousel principal animé */}
          <div>
            <HeroSlideCarousel />
            
            {/* Boutons d'action améliorés */}
            <HeroButtons />
          </div>

          {/* Right side - Carrousel des services avec prix */}
          <ServicesCarousel />
        </div>

        {/* Scroll indicator animé */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce bg-gradient-to-r from-niger-orange to-niger-green rounded-full p-4 shadow-xl">
            <ArrowDown className="w-6 h-6 text-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
