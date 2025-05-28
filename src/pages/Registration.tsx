
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegistrationWorkflow } from '@/hooks/useRegistrationWorkflow';
import { ArrowLeft, ArrowRight, Check, User, Building, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Registration = () => {
  const { currentStep, registrationData, updateData, nextStep, prevStep, submitRegistration, totalSteps } = useRegistrationWorkflow();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    updateData({ [field]: value });
  };

  const handleNext = () => {
    // Validation basique avant de passer à l'étape suivante
    if (currentStep === 1) {
      if (!registrationData.firstName || !registrationData.lastName || !registrationData.email) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive"
        });
        return;
      }
    }
    nextStep();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitRegistration();
      if (result.success) {
        toast({
          title: "Inscription réussie!",
          description: "Votre demande a été soumise avec succès. Nous vous contacterons bientôt.",
        });
        nextStep(); // Aller à l'étape de confirmation
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Informations personnelles", icon: User },
    { number: 2, title: "Informations entreprise", icon: Building },
    { number: 3, title: "Services demandés", icon: FileText },
    { number: 4, title: "Confirmation", icon: Check }
  ];

  const StepIcon = steps[currentStep - 1]?.icon;

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
            Inscription NIF & RCCM
          </h1>
          <p className="text-gray-600">
            Créez votre entreprise en quelques étapes simples
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.number 
                      ? 'bg-niger-orange text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step.number ? 'bg-niger-orange' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {StepIcon && <StepIcon className="w-5 h-5" />}
              <span>{steps[currentStep - 1]?.title}</span>
            </CardTitle>
            <CardDescription>
              Étape {currentStep} sur {totalSteps}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Étape 1: Informations personnelles */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={registrationData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={registrationData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={registrationData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={registrationData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+227 XX XX XX XX"
                  />
                </div>
              </div>
            )}

            {/* Étape 2: Informations entreprise */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                  <Input
                    id="companyName"
                    value={registrationData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessType">Type d'entreprise</Label>
                    <select
                      id="businessType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={registrationData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="sarl">SARL</option>
                      <option value="sa">SA</option>
                      <option value="entreprise-individuelle">Entreprise Individuelle</option>
                      <option value="auto-entrepreneur">Auto-entrepreneur</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="sector">Secteur d'activité</Label>
                    <Input
                      id="sector"
                      value={registrationData.sector}
                      onChange={(e) => handleInputChange('sector', e.target.value)}
                      placeholder="Ex: Commerce, Agriculture..."
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={registrationData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Adresse complète"
                  />
                </div>
                <div>
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    value={registrationData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Ville"
                  />
                </div>
              </div>
            )}

            {/* Étape 3: Services demandés */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Services administratifs</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={registrationData.needsNIF}
                        onChange={(e) => handleInputChange('needsNIF', e.target.checked)}
                        className="w-4 h-4 text-niger-orange"
                      />
                      <span>Création NIF (Numéro d'Identification Fiscal)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={registrationData.needsRCCM}
                        onChange={(e) => handleInputChange('needsRCCM', e.target.checked)}
                        className="w-4 h-4 text-niger-orange"
                      />
                      <span>Enregistrement RCCM (Registre du Commerce)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Services créatifs (optionnel)</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={registrationData.needsLogo}
                        onChange={(e) => handleInputChange('needsLogo', e.target.checked)}
                        className="w-4 h-4 text-niger-green"
                      />
                      <span>Création de logo professionnel</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={registrationData.needsGraphicDesign}
                        onChange={(e) => handleInputChange('needsGraphicDesign', e.target.checked)}
                        className="w-4 h-4 text-niger-green"
                      />
                      <span>Services d'infographie complets</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 4: Confirmation */}
            {currentStep === 4 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-niger-green/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-niger-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Inscription terminée !
                  </h3>
                  <p className="text-gray-600">
                    Votre demande a été soumise avec succès. Notre équipe va traiter votre dossier 
                    et vous contacter dans les 24 heures pour confirmer les détails.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <h4 className="font-semibold mb-2">Récapitulatif de votre demande :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Entreprise : {registrationData.companyName}</li>
                    <li>• Contact : {registrationData.firstName} {registrationData.lastName}</li>
                    {registrationData.needsNIF && <li>• ✓ Création NIF</li>}
                    {registrationData.needsRCCM && <li>• ✓ Enregistrement RCCM</li>}
                    {registrationData.needsLogo && <li>• ✓ Création de logo</li>}
                    {registrationData.needsGraphicDesign && <li>• ✓ Services d'infographie</li>}
                  </ul>
                </div>
                <Link to="/">
                  <Button className="bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </Button>

                {currentStep < 3 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-niger-orange hover:bg-niger-orange-dark text-white flex items-center space-x-2"
                  >
                    <span>Suivant</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-niger-green hover:bg-niger-green-dark text-white flex items-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Soumission...' : 'Soumettre'}</span>
                    <Check className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
