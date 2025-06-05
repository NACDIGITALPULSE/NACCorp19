
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
      text: "Bonjour ! Je suis l'assistant virtuel NACCORP. Je suis spécialisé dans l'accompagnement des entrepreneurs pour toutes leurs démarches de création d'entreprise au Niger. Comment puis-je vous aider aujourd'hui ?", 
      isBot: true 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const getExpertResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('nif') || lowerMessage.includes('numéro d\'identification fiscale')) {
      return "Pour obtenir votre NIF (Numéro d'Identification Fiscale), vous devez fournir : une copie de votre pièce d'identité, un justificatif de domicile et votre acte de naissance. Avec NACCORP, la procédure est entièrement digitalisée et prend seulement 24-48h. Le coût est de 25 000 FCFA.";
    }
    
    if (lowerMessage.includes('rccm') || lowerMessage.includes('registre')) {
      return "L'enregistrement RCCM (Registre du Commerce et du Crédit Mobilier) nécessite : les statuts de l'entreprise, la déclaration de souscription, le PV de nomination du gérant et le récépissé de dépôt des fonds. NACCORP s'occupe de toutes ces démarches pour 75 000 FCFA.";
    }
    
    if (lowerMessage.includes('logo') || lowerMessage.includes('design') || lowerMessage.includes('graphique')) {
      return "Nos services de design incluent : création de logo professionnel (à partir de 50 000 FCFA), charte graphique complète, supports marketing. Nos designers experts créent une identité visuelle qui reflète parfaitement votre entreprise.";
    }
    
    if (lowerMessage.includes('offshore') || lowerMessage.includes('international')) {
      return "Nos services offshore vous permettent de créer votre entreprise dans des juridictions avantageuses. Nous nous occupons de toutes les formalités : constitution, compte bancaire, adresse de siège, et services additionnels. Coût à partir de 150 000 FCFA.";
    }
    
    if (lowerMessage.includes('email') || lowerMessage.includes('professionnel')) {
      return "Nos emails professionnels incluent : nom de domaine personnalisé (@votreentreprise.com), boîtes email sécurisées, antispam, calendrier partagé. Formules de 15 000 à 45 000 FCFA/mois selon vos besoins.";
    }
    
    if (lowerMessage.includes('tarif') || lowerMessage.includes('prix') || lowerMessage.includes('coût')) {
      return "Voici nos tarifs principaux : NIF (25 000 FCFA), RCCM (75 000 FCFA), Logo (50 000 FCFA), Pack complet création d'entreprise (120 000 FCFA), Services offshore (à partir de 150 000 FCFA). Contactez-nous pour un devis personnalisé !";
    }
    
    if (lowerMessage.includes('document') || lowerMessage.includes('papier')) {
      return "Les documents généralement requis : pièce d'identité, justificatif de domicile, acte de naissance pour le NIF. Pour le RCCM : statuts, PV, déclaration de souscription. Notre équipe vous guide à chaque étape et vérifie vos documents.";
    }
    
    if (lowerMessage.includes('délai') || lowerMessage.includes('temps') || lowerMessage.includes('durée')) {
      return "Nos délais de traitement : NIF en 24-48h, RCCM en 5-7 jours ouvrables, Logo en 3-5 jours, Services offshore en 10-15 jours. Tous nos processus sont optimisés pour vous faire gagner du temps.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('email')) {
      return "Vous pouvez nous contacter : Téléphone : +227 98141675, Email : support@nacentreprise.com. Notre équipe est disponible du lundi au vendredi de 8h à 18h pour répondre à toutes vos questions.";
    }
    
    return "Je suis là pour vous accompagner dans toutes vos démarches entrepreneuriales ! Vous pouvez me poser des questions sur : la création d'entreprise (NIF, RCCM), nos services de design, les tarifs, les délais, les documents requis, nos services offshore, ou tout autre aspect de la création d'entreprise au Niger. Comment puis-je vous aider spécifiquement ?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);

    // Réponse experte immédiate
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getExpertResponse(inputMessage),
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
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
        <Card className="fixed bottom-20 right-4 z-50 w-80 h-96 shadow-xl dark:bg-gray-800 dark:border-gray-700">
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
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-niger-orange text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t dark:border-gray-600 flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Posez votre question..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
