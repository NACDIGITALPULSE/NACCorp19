
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-niger-orange to-niger-orange-dark hover:from-niger-orange-dark hover:to-niger-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none group"
          size="icon"
        >
          <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
