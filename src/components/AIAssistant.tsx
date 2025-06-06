
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Bonjour ! Je suis votre assistant virtuel NACCORP. Expert en création d'entreprises au Niger, je peux vous aider avec vos démarches administratives (NIF, RCCM), services offshore, création de logo, développement web, comptabilité et tous les services liés à l'entrepreneuriat. Comment puis-je vous assister aujourd'hui ?", 
      isBot: true 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);

    // Simulation de réponse automatique basée sur le domaine d'expertise
    setTimeout(() => {
      let botResponse = "";
      const userMessage = inputMessage.toLowerCase();
      
      if (userMessage.includes('nif') || userMessage.includes('rccm')) {
        botResponse = "Pour la création de votre NIF et RCCM, nous vous accompagnons dans toutes les démarches. Le processus prend généralement 3-5 jours ouvrables. Souhaitez-vous que je vous explique les documents requis ?";
      } else if (userMessage.includes('offshore')) {
        botResponse = "Nos services offshore incluent la création d'entreprise à l'étranger avec tous les avantages fiscaux. Nous proposons des packages complets avec domiciliation, boîte postale et numéro de téléphone. Quel type d'activité souhaitez-vous développer ?";
      } else if (userMessage.includes('logo') || userMessage.includes('design')) {
        botResponse = "Notre équipe de designers peut créer votre identité visuelle complète : logo, charte graphique, supports marketing. Nous proposons plusieurs formules adaptées à votre budget. Voulez-vous voir nos réalisations ?";
      } else if (userMessage.includes('site') || userMessage.includes('web')) {
        botResponse = "Nous créons des sites web modernes et responsives : sites vitrines, e-commerce, applications web. Tous nos sites sont optimisés SEO et incluent l'hébergement. Quel type de site vous intéresse ?";
      } else if (userMessage.includes('comptabilite') || userMessage.includes('fiscale')) {
        botResponse = "Nos experts comptables vous accompagnent pour la tenue de comptabilité, déclarations fiscales, optimisation fiscale et suivi juridique. Nous proposons des forfaits mensuels adaptés à votre activité.";
      } else if (userMessage.includes('mail') || userMessage.includes('email')) {
        botResponse = "Nous proposons la création d'adresses email professionnelles personnalisées avec votre nom de domaine, ainsi que la configuration complète. Cela renforce votre image de marque professionnelle.";
      } else {
        botResponse = "Merci pour votre message ! En tant qu'expert en création d'entreprises, je peux vous aider avec : création NIF/RCCM, services offshore, design & web, comptabilité, email professionnel. Un de nos experts va vous répondre sous peu, ou contactez-nous directement sur WhatsApp.";
      }
      
      const response = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true
      };
      setMessages(prev => [...prev, response]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-niger-orange hover:bg-niger-orange-dark text-white rounded-full w-14 h-14 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 z-50 w-80 h-96 shadow-xl">
          <CardHeader className="bg-niger-orange text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>Assistant NACCORP</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-80">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-niger-orange text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-niger-orange hover:bg-niger-orange-dark">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;
