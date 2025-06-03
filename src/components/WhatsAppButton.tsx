
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = "+22798141675";
  const message = "Bonjour, j'aimerais avoir des informations sur vos services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;
