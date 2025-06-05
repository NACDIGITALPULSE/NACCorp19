
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSlider from '@/components/accueil/HeroSlider';
import FeaturesSection from '@/components/accueil/FeaturesSection';
import StatisticsSection from '@/components/accueil/StatisticsSection';
import CTASection from '@/components/accueil/CTASection';

const Accueil = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSlider />
      <FeaturesSection />
      <StatisticsSection />
      <CTASection />
      <ScrollToTop />
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default Accueil;
