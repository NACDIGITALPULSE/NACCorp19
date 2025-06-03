
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider avec vos démarches administratives ?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);

    // Simulation de réponse automatique
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Merci pour votre message ! Un de nos experts va vous répondre sous peu. En attendant, vous pouvez consulter nos services ou nous contacter directement sur WhatsApp.",
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
        <Card className="fixed bottom-20 right-4 z-50 w-80 h-96 shadow-xl">
          <CardHeader className="bg-niger-orange text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>Assistant Niger EntreprenderHub</span>
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
