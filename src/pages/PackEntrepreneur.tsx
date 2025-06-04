
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Package, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const PackEntrepreneur = () => {
  const { toast } = useToast();
  const [selectedPack, setSelectedPack] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    description: '',
    needWebsite: false,
    needMarketing: false
  });

  const packs = [
    {
      id: 'starter',
      name: 'Pack Starter',
      price: '250,000 FCFA',
      description: 'L\'essentiel pour démarrer votre entreprise',
      features: [
        'Création NIF',
        'Enregistrement RCCM',
        'Logo professionnel',
        'Cartes de visite (100 unités)',
        'Support par email'
      ],
      popular: false
    },
    {
      id: 'business',
      name: 'Pack Business',
      price: '450,000 FCFA',
      description: 'Pour une présence professionnelle complète',
      features: [
        'Tout du Pack Starter',
        'Site web vitrine (5 pages)',
        'Charte graphique complète',
        'Papier à en-tête',
        'Flyers de présentation',
        'Support téléphonique'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Pack Premium',
      price: '750,000 FCFA',
      description: 'Solution complète pour entrepreneurs ambitieux',
      features: [
        'Tout du Pack Business',
        'Site web e-commerce',
        'Stratégie marketing digital',
        'Supports marketing complets',
        'Formation en ligne',
        'Support prioritaire 24/7'
      ],
      popular: false
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contactons sous 24h pour finaliser votre pack entrepreneur.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Pack Entrepreneur
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des solutions complètes pour lancer votre entreprise avec succès
            </p>
          </div>

          {/* Packs Display */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packs.map((pack) => (
              <Card 
                key={pack.id} 
                className={`relative cursor-pointer transition-all hover:scale-105 dark:bg-gray-800 dark:border-gray-700 ${
                  selectedPack === pack.id ? 'ring-2 ring-niger-orange' : ''
                } ${pack.popular ? 'border-niger-orange shadow-lg' : ''}`}
                onClick={() => setSelectedPack(pack.id)}
              >
                {pack.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-niger-orange text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Plus populaire
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl dark:text-white">{pack.name}</CardTitle>
                  <CardDescription className="dark:text-gray-400">{pack.description}</CardDescription>
                  <div className="text-3xl font-bold text-niger-orange mt-4">{pack.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pack.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-niger-green mr-3" />
                        <span className="dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Form */}
          {selectedPack && (
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Commander le {packs.find(p => p.id === selectedPack)?.name}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Remplissez ce formulaire pour commander votre pack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="companyName" className="dark:text-gray-200">Nom de l'entreprise *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="dark:text-gray-200">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="dark:text-gray-200">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="dark:text-gray-200">Téléphone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="businessType" className="dark:text-gray-200">Type d'entreprise *</Label>
                    <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Sélectionnez le type" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="sarl" className="dark:text-white">SARL</SelectItem>
                        <SelectItem value="sa" className="dark:text-white">SA</SelectItem>
                        <SelectItem value="sas" className="dark:text-white">SAS</SelectItem>
                        <SelectItem value="entreprise-individuelle" className="dark:text-white">Entreprise Individuelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="dark:text-gray-200">Description de votre activité *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Décrivez votre activité..."
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="needWebsite"
                        checked={formData.needWebsite}
                        onCheckedChange={(checked) => handleInputChange('needWebsite', checked)}
                      />
                      <Label htmlFor="needWebsite" className="dark:text-gray-300">
                        J'ai besoin d'un site web personnalisé (supplément)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="needMarketing"
                        checked={formData.needMarketing}
                        onCheckedChange={(checked) => handleInputChange('needMarketing', checked)}
                      />
                      <Label htmlFor="needMarketing" className="dark:text-gray-300">
                        J'ai besoin d'une stratégie marketing (supplément)
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Commander maintenant
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackEntrepreneur;
