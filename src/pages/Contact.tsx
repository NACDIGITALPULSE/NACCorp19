
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+227 XX XX XX XX', '+227 XX XX XX XX'],
      description: 'Lun-Ven: 8h-18h, Sam: 8h-12h'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@niger-entrepreneurhub.com', 'support@niger-entrepreneurhub.com'],
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Niamey, Niger', 'Quartier des affaires'],
      description: 'Rendez-vous sur demande'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi: 8h - 18h', 'Samedi: 8h - 12h'],
      description: 'Fermé le dimanche'
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-niger-sand via-white to-niger-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contactez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-niger-orange to-niger-green">
                Notre Équipe
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes là pour vous accompagner dans tous vos projets. N'hésitez pas à nous contacter pour toute question.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MessageCircle className="w-6 h-6 text-niger-orange mr-2" />
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+227 XX XX XX XX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <select
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="nif-rccm">Création NIF & RCCM</option>
                        <option value="design">Services de design</option>
                        <option value="website">Création de site web</option>
                        <option value="support">Support technique</option>
                        <option value="partnership">Partenariat</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre demande en détail..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                    Informations de Contact
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Plusieurs moyens de nous joindre selon vos préférences et votre urgence.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-niger-orange/10 rounded-lg">
                              <IconComponent className="w-6 h-6 text-niger-orange" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                {info.title}
                              </h3>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-700 font-medium">
                                  {detail}
                                </p>
                              ))}
                              <p className="text-sm text-gray-500 mt-1">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <Card className="bg-gradient-to-r from-niger-green to-niger-green-light text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Besoin d'aide immédiate ?</h3>
                    <p className="mb-4 opacity-90">
                      Consultez notre FAQ ou commencez directement vos démarches
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-niger-green">
                        Voir la FAQ
                      </Button>
                      <Button className="bg-white text-niger-green hover:bg-gray-100">
                        Commencer maintenant
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
