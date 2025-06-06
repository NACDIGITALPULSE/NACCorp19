
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Shield, 
  Cloud, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Smartphone,
  Globe,
  Lock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const EmailProfessionnel = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    domain: '',
    emailPackage: '',
    numberOfUsers: 1,
    additionalServices: {
      antispam: false,
      backup: false,
      migration: false,
      training: false
    }
  });

  const packages = [
    {
      id: 'basic',
      name: 'Email Basic',
      price: 2500,
      features: [
        '5 GB de stockage par utilisateur',
        'Interface webmail moderne',
        'Synchronisation mobile',
        'Support technique 24/7',
        'Antispam intégré'
      ],
      popular: false
    },
    {
      id: 'business',
      name: 'Email Business',
      price: 4500,
      features: [
        '25 GB de stockage par utilisateur',
        'Calendrier et contacts partagés',
        'Applications mobiles avancées',
        'Sauvegarde automatique',
        'Support prioritaire',
        'Domaine personnalisé inclus'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Email Enterprise',
      price: 7500,
      features: [
        '100 GB de stockage par utilisateur',
        'Toutes les fonctionnalités Business',
        'Archivage légal',
        'Sécurité avancée',
        'Formation équipe incluse',
        'Migration données incluse'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { id: 'antispam', name: 'Protection anti-spam avancée', price: 1000 },
    { id: 'backup', name: 'Sauvegarde quotidienne', price: 1500 },
    { id: 'migration', name: 'Migration données existantes', price: 5000 },
    { id: 'training', name: 'Formation équipe (2h)', price: 15000 }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [serviceId]: checked
      }
    }));
  };

  const calculateTotal = () => {
    const selectedPackage = packages.find(p => p.id === formData.emailPackage);
    if (!selectedPackage) return 0;

    let total = selectedPackage.price * formData.numberOfUsers;

    // Ajouter les services additionnels
    additionalServices.forEach(service => {
      if (formData.additionalServices[service.id as keyof typeof formData.additionalServices]) {
        total += service.price;
      }
    });

    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons sous 24h pour finaliser votre configuration email.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Email Professionnel
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Renforcez votre crédibilité avec une adresse email personnalisée à votre nom de domaine
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Sécurisé & Fiable
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Cloud className="w-4 h-4 mr-2" />
              Synchronisation Cloud
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              <Smartphone className="w-4 h-4 mr-2" />
              Accès Mobile
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Avantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi choisir un email professionnel ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Crédibilité Professionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Une adresse comme contact@votreentreprise.com inspire confiance à vos clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Sécurité Renforcée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Protection anti-spam, chiffrement et sauvegarde automatique de vos données
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Collaboration d'Équipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Calendriers partagés, contacts d'équipe et gestion centralisée
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nos Formules Email</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative hover:shadow-lg transition-shadow ${pkg.popular ? 'border-2 border-blue-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Populaire
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">
                    {pkg.price.toLocaleString()} FCFA
                    <span className="text-sm font-normal text-gray-500">/mois/utilisateur</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                    onClick={() => handleInputChange('emailPackage', pkg.id)}
                  >
                    Choisir cette formule
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Formulaire de commande */}
        <section>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Configurez votre email professionnel</CardTitle>
              <CardDescription className="text-center">
                Remplissez ce formulaire pour obtenir un devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Nom de l'entreprise</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="NACCORP"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="domain">Nom de domaine souhaité</Label>
                    <Input
                      id="domain"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      placeholder="monentreprise.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="emailPackage">Formule choisie</Label>
                    <Select value={formData.emailPackage} onValueChange={(value) => handleInputChange('emailPackage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une formule" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name} - {pkg.price.toLocaleString()} FCFA/mois
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="numberOfUsers">Nombre d'utilisateurs</Label>
                    <Input
                      id="numberOfUsers"
                      type="number"
                      min="1"
                      value={formData.numberOfUsers}
                      onChange={(e) => handleInputChange('numberOfUsers', parseInt(e.target.value))}
                      required
                    />
                  </div>
                </div>

                {/* Services additionnels */}
                <div>
                  <Label>Services additionnels</Label>
                  <div className="mt-2 space-y-3">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices[service.id as keyof typeof formData.additionalServices]}
                            onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="font-medium">
                            {service.name}
                          </Label>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">
                          +{service.price.toLocaleString()} FCFA
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Récapitulatif */}
                {formData.emailPackage && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Récapitulatif de votre commande</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Formule {packages.find(p => p.id === formData.emailPackage)?.name}</span>
                        <span>{packages.find(p => p.id === formData.emailPackage)?.price.toLocaleString()} FCFA × {formData.numberOfUsers}</span>
                      </div>
                      {additionalServices.map((service) => (
                        formData.additionalServices[service.id as keyof typeof formData.additionalServices] && (
                          <div key={service.id} className="flex justify-between">
                            <span>{service.name}</span>
                            <span>+{service.price.toLocaleString()} FCFA</span>
                          </div>
                        )
                      ))}
                      <div className="border-t pt-2 font-semibold text-lg flex justify-between">
                        <span>Total mensuel</span>
                        <span className="text-blue-600">{calculateTotal().toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EmailProfessionnel;
