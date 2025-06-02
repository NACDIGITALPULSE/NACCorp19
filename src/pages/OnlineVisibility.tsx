
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Globe, Check, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { sendConfirmationEmail } from '@/services/emailService';
import { useAuth } from '@/hooks/useAuth';

interface VisibilityOrderData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  currentWebsite: string;
  businessDescription: string;
  targetAudience: string;
  selectedServices: {
    website: boolean;
    socialMedia: boolean;
    seo: boolean;
    advertising: boolean;
    branding: boolean;
  };
  budget: string;
  timeline: string;
}

const OnlineVisibility = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState<VisibilityOrderData>({
    companyName: '',
    contactName: user ? `${user.firstName} ${user.lastName}` : '',
    email: user?.email || '',
    phone: '',
    currentWebsite: '',
    businessDescription: '',
    targetAudience: '',
    selectedServices: {
      website: false,
      socialMedia: false,
      seo: false,
      advertising: false,
      branding: false,
    },
    budget: '',
    timeline: '',
  });

  const handleInputChange = (field: keyof Omit<VisibilityOrderData, 'selectedServices'>, value: string) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: keyof VisibilityOrderData['selectedServices'], checked: boolean) => {
    setOrderData(prev => ({
      ...prev,
      selectedServices: {
        ...prev.selectedServices,
        [service]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!orderData.companyName || !orderData.contactName || !orderData.email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    const hasSelectedService = Object.values(orderData.selectedServices).some(service => service);
    if (!hasSelectedService) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner au moins un service",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Envoi de l'email vers customer@nacdigitalpulse.com
      await sendConfirmationEmail({
        to: orderData.email,
        firstName: orderData.contactName.split(' ')[0] || 'Client',
        lastName: orderData.contactName.split(' ').slice(1).join(' ') || '',
        type: 'visibility-request',
        data: orderData
      });
      
      toast({
        title: "Demande envoyée avec succès!",
        description: "Notre équipe vous contactera dans les 24h pour discuter de votre projet.",
      });
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { key: 'website', label: 'Création/Refonte de site web', icon: Globe },
    { key: 'socialMedia', label: 'Gestion des réseaux sociaux', icon: Star },
    { key: 'seo', label: 'Optimisation SEO', icon: Check },
    { key: 'advertising', label: 'Publicité en ligne', icon: Globe },
    { key: 'branding', label: 'Stratégie de marque', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Visibilité en ligne
          </h1>
          <p className="text-gray-600">
            Boostez votre présence digitale et développez votre business
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Demande de visibilité en ligne</span>
            </CardTitle>
            <CardDescription>
              Dites-nous en plus sur votre projet pour que nous puissions vous accompagner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations de contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Informations de contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                    <Input
                      id="companyName"
                      value={orderData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Nom de votre entreprise"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Nom du contact *</Label>
                    <Input
                      id="contactName"
                      value={orderData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={orderData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={orderData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+227 XX XX XX XX"
                    />
                  </div>
                </div>
              </div>

              {/* Informations sur le projet */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Informations sur votre projet</h3>
                
                <div>
                  <Label htmlFor="currentWebsite">Site web actuel (si applicable)</Label>
                  <Input
                    id="currentWebsite"
                    value={orderData.currentWebsite}
                    onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                    placeholder="https://www.votre-site.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="businessDescription">Description de votre activité</Label>
                  <textarea
                    id="businessDescription"
                    value={orderData.businessDescription}
                    onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                    placeholder="Décrivez votre entreprise et son secteur d'activité..."
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Public cible</Label>
                  <Input
                    id="targetAudience"
                    value={orderData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    placeholder="Ex: Particuliers, entreprises, jeunes professionnels..."
                  />
                </div>
              </div>

              {/* Services demandés */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Services demandés *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <label key={service.key} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={orderData.selectedServices[service.key as keyof typeof orderData.selectedServices]}
                          onChange={(e) => handleServiceChange(service.key as keyof typeof orderData.selectedServices, e.target.checked)}
                          className="w-4 h-4 text-niger-orange"
                        />
                        <IconComponent className="w-5 h-5 text-niger-orange" />
                        <span className="text-sm">{service.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Budget et délais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget approximatif</Label>
                  <select
                    id="budget"
                    value={orderData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Sélectionner</option>
                    <option value="500000-1000000">500 000 - 1 000 000 FCFA</option>
                    <option value="1000000-2000000">1 000 000 - 2 000 000 FCFA</option>
                    <option value="2000000-5000000">2 000 000 - 5 000 000 FCFA</option>
                    <option value="5000000+">Plus de 5 000 000 FCFA</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="timeline">Délai souhaité</Label>
                  <select
                    id="timeline"
                    value={orderData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Sélectionner</option>
                    <option value="urgent">Urgent (1-2 semaines)</option>
                    <option value="normal">Normal (1 mois)</option>
                    <option value="flexible">Flexible (2-3 mois)</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-niger-green hover:bg-niger-green-dark text-white"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnlineVisibility;
