import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegistrationWorkflow } from '@/hooks/useRegistrationWorkflow';
import { ArrowLeft, ArrowRight, Check, User, Building, FileText, Upload, UserPlus, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { FileUpload } from '@/components/FileUpload';

const Registration = () => {
  const { currentStep, registrationData, updateData, updateDocuments, nextStep, prevStep, submitRegistration, getNifTypeDescription, totalSteps } = useRegistrationWorkflow();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    updateData({ [field]: value });
  };

  const handleNext = () => {
    // Validation selon l'étape
    if (currentStep === 1) {
      if (!registrationData.firstName || !registrationData.lastName || !registrationData.email || !registrationData.password) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive"
        });
        return;
      }
      if (registrationData.password !== registrationData.confirmPassword) {
        toast({
          title: "Erreur",
          description: "Les mots de passe ne correspondent pas",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 3) {
      if (!registrationData.nifType) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner un type de NIF",
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
          description: "Votre compte a été créé et votre demande soumise. Vous pouvez maintenant suivre l'avancement dans votre tableau de bord.",
        });
        nextStep();
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
    { number: 1, title: "Création de compte", icon: UserPlus },
    { number: 2, title: "Informations entreprise", icon: Building },
    { number: 3, title: "Type de NIF", icon: AlertCircle },
    { number: 4, title: "Services demandés", icon: FileText },
    { number: 5, title: "Documents requis", icon: Upload },
    { number: 6, title: "Confirmation", icon: Check }
  ];

  const StepIcon = steps[currentStep - 1]?.icon;

  const nifTypes = [
    {
      value: 'NIF-P',
      title: 'NIF-P (Personne Physique)',
      description: 'Pour entrepreneurs individuels, professionnels libéraux',
      price: '15,000 FCFA',
      features: ['Création du NIF personnel', 'Dossier complet', 'Délai: 2-3 jours']
    },
    {
      value: 'NIF-R',
      title: 'NIF-R (Personne Morale)',
      description: 'Pour sociétés, associations, coopératives',
      price: '25,000 FCFA',
      features: ['Création du NIF entreprise', 'RCCM inclus', 'Délai: 3-5 jours'],
      recommended: true
    },
    {
      value: 'NIF-S',
      title: 'NIF-S (Structure Spéciale)',
      description: 'Pour ONG, organisations internationales',
      price: 'Sur devis',
      features: ['Étude personnalisée', 'Accompagnement spécialisé', 'Délai: 5-7 jours']
    }
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
            Inscription NIF & RCCM
          </h1>
          <p className="text-gray-600">
            Obtenez votre NIF et RCCM en quelques étapes simples
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex items-center space-x-2 md:space-x-4 min-w-max px-4">
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
                    <div className={`w-8 md:w-16 h-1 mx-1 md:mx-2 ${
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
              Étape {currentStep} sur {totalSteps} - Spécialisé NIF & RCCM
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Étape 1: Création de compte */}
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
                <div>
                  <Label htmlFor="password">Mot de passe *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={registrationData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Mot de passe sécurisé"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={registrationData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirmer votre mot de passe"
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

            {/* Étape 3: Type de NIF */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Choisissez votre type de NIF</h3>
                  <p className="text-blue-700 text-sm">
                    Sélectionnez le type de Numéro d'Identification Fiscal adapté à votre situation.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {nifTypes.map((nifType) => (
                    <label
                      key={nifType.value}
                      className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                        registrationData.nifType === nifType.value
                          ? 'border-niger-orange bg-niger-orange/5'
                          : 'border-gray-200 hover:border-niger-orange/50'
                      } ${nifType.recommended ? 'ring-2 ring-niger-green/20' : ''}`}
                    >
                      <input
                        type="radio"
                        name="nifType"
                        value={nifType.value}
                        checked={registrationData.nifType === nifType.value}
                        onChange={(e) => handleInputChange('nifType', e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{nifType.title}</h4>
                            {nifType.recommended && (
                              <span className="bg-niger-green text-white px-2 py-1 rounded-full text-xs font-medium">
                                Recommandé
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{nifType.description}</p>
                          <ul className="mt-2 space-y-1">
                            {nifType.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-center">
                                <Check className="w-3 h-3 text-niger-green mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-niger-orange">{nifType.price}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Étape 4: Services demandés */}
            {currentStep === 4 && (
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

            {/* Étape 5: Documents requis */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Documents requis</h3>
                  <p className="text-blue-700 text-sm">
                    Veuillez télécharger les documents suivants pour finaliser votre demande.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Pièce d'identité (obligatoire)</Label>
                    <FileUpload
                      onFileSelect={(file) => updateDocuments('identityCard', file)}
                      accept=".pdf,.jpg,.jpeg,.png"
                      currentFile={registrationData.documents.identityCard}
                    />
                  </div>
                  
                  <div>
                    <Label>Justificatif de domicile (obligatoire)</Label>
                    <FileUpload
                      onFileSelect={(file) => updateDocuments('proofOfAddress', file)}
                      accept=".pdf,.jpg,.jpeg,.png"
                      currentFile={registrationData.documents.proofOfAddress}
                    />
                  </div>
                  
                  <div>
                    <Label>Statuts de l'entreprise (si applicable)</Label>
                    <FileUpload
                      onFileSelect={(file) => updateDocuments('companyStatutes', file)}
                      accept=".pdf,.doc,.docx"
                      currentFile={registrationData.documents.companyStatutes}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Étape 6: Confirmation */}
            {currentStep === 6 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-niger-green/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-niger-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Inscription terminée !
                  </h3>
                  <p className="text-gray-600">
                    Votre compte a été créé et votre demande soumise avec succès. Notre équipe va traiter votre dossier 
                    et vous contacter dans les 24 heures pour confirmer les détails.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <h4 className="font-semibold mb-2">Récapitulatif de votre demande :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Entreprise : {registrationData.companyName}</li>
                    <li>• Contact : {registrationData.firstName} {registrationData.lastName}</li>
                    <li>• Email : {registrationData.email}</li>
                    <li>• Type de NIF : {registrationData.nifType}</li>
                    {registrationData.needsNIF && <li>• ✓ Création NIF</li>}
                    {registrationData.needsRCCM && <li>• ✓ Enregistrement RCCM</li>}
                    {registrationData.needsLogo && <li>• ✓ Création de logo</li>}
                    {registrationData.needsGraphicDesign && <li>• ✓ Services d'infographie</li>}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/tableau-de-bord">
                    <Button className="bg-niger-green hover:bg-niger-green-dark text-white">
                      Voir mon tableau de bord
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="border-niger-orange text-niger-orange hover:bg-niger-orange hover:text-white">
                      Retour à l'accueil
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 6 && (
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

                {currentStep < 5 ? (
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
                    <span>{isSubmitting ? 'Soumission...' : 'Créer mon NIF & RCCM'}</span>
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
