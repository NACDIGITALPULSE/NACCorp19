
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Building2, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Users, 
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Offshore = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations entreprise
    companyName: '',
    businessType: '',
    activity: '',
    capital: '',
    
    // Informations dirigeant
    firstName: '',
    lastName: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    
    // Services additionnels
    needMailbox: false,
    needAddress: false,
    needPhone: false,
    
    // Documents
    hasPassport: false,
    hasAddressProof: false,
    hasBusinessPlan: false
  });

  const steps = [
    { id: 1, title: 'Informations Entreprise', icon: Building2 },
    { id: 2, title: 'Dirigeant Principal', icon: Users },
    { id: 3, title: 'Services Additionnels', icon: Globe },
    { id: 4, title: 'Documents', icon: FileText },
    { id: 5, title: 'Paiement', icon: CreditCard }
  ];

  const businessTypes = [
    'SARL (Société à Responsabilité Limitée)',
    'SA (Société Anonyme)',
    'SAS (Société par Actions Simplifiée)',
    'Entreprise Individuelle',
    'Coopérative',
    'Association'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous traiterons votre demande dans les 24-48h. Vous recevrez un email de confirmation.",
    });
  };

  const calculateTotal = () => {
    let total = 150000; // Prix de base
    if (formData.needMailbox) total += 25000;
    if (formData.needAddress) total += 30000;
    if (formData.needPhone) total += 20000;
    return total;
  };

  // Obtenir l'icône du step actuel
  const currentStepData = steps.find(s => s.id === currentStep);
  const CurrentStepIcon = currentStepData?.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Création d'Entreprise Offshore
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Créez votre entreprise au Niger depuis l'étranger avec notre accompagnement professionnel
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Processus 100% en ligne
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Délai 5-10 jours
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Support diaspora
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Progression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        isActive 
                          ? 'bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400' 
                          : isCompleted 
                          ? 'bg-green-50 dark:bg-green-900/30' 
                          : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${
                        isActive 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : isCompleted 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-gray-400 dark:text-gray-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        isActive 
                          ? 'text-blue-900 dark:text-blue-300' 
                          : isCompleted 
                          ? 'text-green-900 dark:text-green-300' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                      {isCompleted && (
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 ml-auto" />
                      )}
                    </div>
                  );
                })}
                
                <Separator className="my-4 dark:border-gray-600" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="dark:text-gray-300">Total estimé:</span>
                    <span className="font-bold dark:text-white">{calculateTotal().toLocaleString()} FCFA</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    TVA incluse
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  {CurrentStepIcon && (
                    <CurrentStepIcon className="w-6 h-6 mr-3" />
                  )}
                  {currentStepData?.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Étape {currentStep} sur {steps.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Étape 1: Informations Entreprise */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="companyName" className="dark:text-gray-200">Nom de l'entreprise *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Ex: Ma Société SARL"
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessType" className="dark:text-gray-200">Forme juridique *</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                        <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Sélectionnez une forme juridique" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type} className="dark:text-white dark:hover:bg-gray-600">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="activity" className="dark:text-gray-200">Activité principale *</Label>
                      <Textarea
                        id="activity"
                        value={formData.activity}
                        onChange={(e) => handleInputChange('activity', e.target.value)}
                        placeholder="Décrivez l'activité principale de votre entreprise..."
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="capital" className="dark:text-gray-200">Capital social (FCFA) *</Label>
                      <Input
                        id="capital"
                        type="number"
                        value={formData.capital}
                        onChange={(e) => handleInputChange('capital', e.target.value)}
                        placeholder="Ex: 1000000"
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Étape 2: Dirigeant Principal */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="dark:text-gray-200">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="dark:text-gray-200">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="nationality" className="dark:text-gray-200">Nationalité *</Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        placeholder="Ex: Française"
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="dark:text-gray-200">Téléphone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+33 6 12 34 56 78"
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="dark:text-gray-200">Adresse complète *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Adresse complète dans votre pays de résidence..."
                        className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* Étape 3: Services Additionnels */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="mailbox"
                            checked={formData.needMailbox}
                            onCheckedChange={(checked) => handleInputChange('needMailbox', checked)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Mail className="w-5 h-5 text-blue-500 mr-2" />
                              <Label htmlFor="mailbox" className="font-semibold dark:text-white">Boîte Postale</Label>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              Adresse postale officielle au Niger pour recevoir votre courrier
                            </p>
                            <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+25,000 FCFA</Badge>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="address"
                            checked={formData.needAddress}
                            onCheckedChange={(checked) => handleInputChange('needAddress', checked)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <MapPin className="w-5 h-5 text-green-500 mr-2" />
                              <Label htmlFor="address" className="font-semibold dark:text-white">Adresse Physique</Label>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              Adresse physique de domiciliation au Niger
                            </p>
                            <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+30,000 FCFA</Badge>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="phone"
                            checked={formData.needPhone}
                            onCheckedChange={(checked) => handleInputChange('needPhone', checked)}
                          />
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Phone className="w-5 h-5 text-orange-500 mr-2" />
                              <Label htmlFor="phone" className="font-semibold dark:text-white">Numéro Local</Label>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              Numéro de téléphone local nigérien avec redirection
                            </p>
                            <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+20,000 FCFA</Badge>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/30 dark:border-blue-700">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Services recommandés pour la diaspora</h4>
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            Ces services facilitent la gestion de votre entreprise depuis l'étranger et assurent une présence officielle au Niger.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 4: Documents */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 dark:bg-yellow-900/30 dark:border-yellow-700">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">Documents requis</h4>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            Vous devrez fournir ces documents après validation de votre demande.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
                        <Checkbox
                          id="passport"
                          checked={formData.hasPassport}
                          onCheckedChange={(checked) => handleInputChange('hasPassport', checked)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="passport" className="font-medium dark:text-white">Copie du passeport</Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Passeport en cours de validité du dirigeant principal
                          </p>
                        </div>
                        <FileText className="w-5 h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
                        <Checkbox
                          id="addressProof"
                          checked={formData.hasAddressProof}
                          onCheckedChange={(checked) => handleInputChange('hasAddressProof', checked)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="addressProof" className="font-medium dark:text-white">Justificatif de domicile</Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Facture de moins de 3 mois (électricité, eau, téléphone)
                          </p>
                        </div>
                        <FileText className="w-5 h-5 text-gray-400" />
                      </div>

                      <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
                        <Checkbox
                          id="businessPlan"
                          checked={formData.hasBusinessPlan}
                          onCheckedChange={(checked) => handleInputChange('hasBusinessPlan', checked)}
                        />
                        <div className="flex-1">
                          <Label htmlFor="businessPlan" className="font-medium dark:text-white">Plan d'affaires (optionnel)</Label>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Description détaillée de votre projet d'entreprise
                          </p>
                        </div>
                        <FileText className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 5: Paiement */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 dark:bg-green-900/30 dark:border-green-700">
                      <h3 className="font-semibold text-green-900 dark:text-green-300 mb-4">Récapitulatif de votre commande</h3>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="dark:text-green-200">Création entreprise offshore:</span>
                          <span className="font-medium dark:text-green-100">150,000 FCFA</span>
                        </div>
                        {formData.needMailbox && (
                          <div className="flex justify-between">
                            <span className="dark:text-green-200">Boîte postale:</span>
                            <span className="font-medium dark:text-green-100">25,000 FCFA</span>
                          </div>
                        )}
                        {formData.needAddress && (
                          <div className="flex justify-between">
                            <span className="dark:text-green-200">Adresse physique:</span>
                            <span className="font-medium dark:text-green-100">30,000 FCFA</span>
                          </div>
                        )}
                        {formData.needPhone && (
                          <div className="flex justify-between">
                            <span className="dark:text-green-200">Numéro local:</span>
                            <span className="font-medium dark:text-green-100">20,000 FCFA</span>
                          </div>
                        )}
                        <Separator className="dark:border-green-600" />
                        <div className="flex justify-between text-lg font-bold">
                          <span className="dark:text-green-100">Total TTC:</span>
                          <span className="dark:text-green-100">{calculateTotal().toLocaleString()} FCFA</span>
                        </div>
                      </div>

                      <p className="text-sm text-green-800 dark:text-green-200">
                        Le paiement sera demandé après validation de votre dossier par notre équipe.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/30 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Prochaines étapes</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Validation de votre demande sous 24-48h</li>
                        <li>• Envoi de la facture pro forma</li>
                        <li>• Traitement de votre dossier (5-10 jours)</li>
                        <li>• Livraison des documents officiels</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t dark:border-gray-600">
                  <Button
                    variant="outline"
                    onClick={handlePrevStep}
                    disabled={currentStep === 1}
                    className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Précédent
                  </Button>
                  
                  {currentStep < 5 ? (
                    <Button onClick={handleNextStep} className="bg-blue-600 hover:bg-blue-700">
                      Suivant
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                      Envoyer la demande
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offshore;
