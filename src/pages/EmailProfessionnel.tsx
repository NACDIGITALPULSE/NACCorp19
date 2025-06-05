
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Mail, Shield, Clock, Users, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const EmailProfessionnel = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    domainName: '',
    numberOfEmails: '1',
    emailPlan: 'basic',
    contactName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ici vous pourriez envoyer les données à customer@nacdigitalpulse.com
    console.log('Demande d\'email professionnel:', formData);
    
    toast({
      title: "Demande envoyée avec succès !",
      description: "Notre équipe vous contactera dans les 24h pour configurer vos emails professionnels.",
    });
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '15 000',
      features: ['5 Go de stockage', 'Support email', 'Antispam', '1 domaine personnalisé']
    },
    {
      id: 'pro',
      name: 'Professionnel',
      price: '25 000',
      features: ['25 Go de stockage', 'Support prioritaire', 'Antispam avancé', 'Calendrier partagé', 'Drive 10 Go']
    },
    {
      id: 'enterprise',
      name: 'Entreprise',
      price: '45 000',
      features: ['100 Go de stockage', 'Support 24/7', 'Sécurité avancée', 'Calendrier et contacts', 'Drive 50 Go', 'Visioconférence']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Email Professionnel
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Renforcez votre image de marque avec des adresses email personnalisées à votre nom de domaine
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-niger-orange mb-4" />
                <CardTitle className="dark:text-white">Sécurité Maximale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Protection antispam, chiffrement et sauvegarde automatique de vos emails
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-niger-green mb-4" />
                <CardTitle className="dark:text-white">Accès Partout</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Synchronisation sur tous vos appareils, webmail et applications mobiles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-niger-orange mb-4" />
                <CardTitle className="dark:text-white">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Calendriers partagés, contacts d'équipe et espaces de stockage cloud
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Choisissez votre formule
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card key={plan.id} className={`relative ${plan.id === 'pro' ? 'border-niger-orange shadow-lg' : ''} dark:bg-gray-800 dark:border-gray-700`}>
                  {plan.id === 'pro' && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-niger-orange text-white">
                      Populaire
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl dark:text-white">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-niger-orange">
                      {plan.price} <span className="text-sm text-gray-500">FCFA/mois</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card className="max-w-4xl mx-auto dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">Demande d'Email Professionnel</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Remplissez ce formulaire pour recevoir votre devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName" className="dark:text-white">Nom de l'entreprise *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Votre entreprise"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="domainName" className="dark:text-white">Nom de domaine souhaité *</Label>
                    <Input
                      id="domainName"
                      value={formData.domainName}
                      onChange={(e) => handleInputChange('domainName', e.target.value)}
                      placeholder="monentreprise.com"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="numberOfEmails" className="dark:text-white">Nombre d'adresses email</Label>
                    <Select value={formData.numberOfEmails} onValueChange={(value) => handleInputChange('numberOfEmails', value)}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 adresse</SelectItem>
                        <SelectItem value="2-5">2-5 adresses</SelectItem>
                        <SelectItem value="6-10">6-10 adresses</SelectItem>
                        <SelectItem value="11-25">11-25 adresses</SelectItem>
                        <SelectItem value="25+">Plus de 25 adresses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="emailPlan" className="dark:text-white">Formule souhaitée</Label>
                    <Select value={formData.emailPlan} onValueChange={(value) => handleInputChange('emailPlan', value)}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - 15 000 FCFA/mois</SelectItem>
                        <SelectItem value="pro">Professionnel - 25 000 FCFA/mois</SelectItem>
                        <SelectItem value="enterprise">Entreprise - 45 000 FCFA/mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contactName" className="dark:text-white">Nom du contact *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Votre nom complet"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="dark:text-white">Email de contact *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="contact@exemple.com"
                      required
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="dark:text-white">Téléphone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+227 XX XX XX XX"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequests" className="dark:text-white">Besoins spécifiques</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Décrivez vos besoins spécifiques en matière d'email professionnel..."
                    rows={4}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white py-3"
                >
                  Envoyer la demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailProfessionnel;
