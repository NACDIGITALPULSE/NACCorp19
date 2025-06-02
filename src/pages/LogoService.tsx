import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useServiceWorkflow } from '@/hooks/useServiceWorkflow';
import { ArrowLeft, ArrowRight, Palette, User, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const LogoService = () => {
  const { currentStep, formData, updateData, nextStep, prevStep, submitForm, totalSteps } = useServiceWorkflow();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    updateData({ [field]: value });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
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
      const result = await submitForm();
      if (result.success) {
        toast({
          title: "Demande envoyée!",
          description: "Nous vous contacterons dans les 24h pour créer votre logo",
        });
        nextStep();
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Création de Logo
          </h1>
          <p className="text-gray-600">
            Un logo professionnel qui représente parfaitement votre marque
          </p>
        </div>

        {/* Progress */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-niger-green text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-niger-green' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <span>Étape {currentStep} sur {totalSteps}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Étape 1: Informations client */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <CardDescription>Vos informations de contact</CardDescription>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
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
                <div>
                  <Label htmlFor="company">Entreprise *</Label>
                  <Input
                    id="company"
                    value={formData.company || ''}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
            )}

            {/* Étape 2: Spécifications du logo */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <CardDescription>Détails pour votre logo</CardDescription>
                
                <div>
                  <Label htmlFor="logoStyle">Style de logo souhaité</Label>
                  <select
                    id="logoStyle"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.logoStyle || ''}
                    onChange={(e) => handleInputChange('logoStyle', e.target.value)}
                  >
                    <option value="">Sélectionner un style</option>
                    <option value="moderne">Moderne et minimaliste</option>
                    <option value="classique">Classique et élégant</option>
                    <option value="creatif">Créatif et artistique</option>
                    <option value="professionnel">Professionnel et corporate</option>
                    <option value="ludique">Ludique et coloré</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="colors">Couleurs préférées</Label>
                  <Input
                    id="colors"
                    value={formData.colors || ''}
                    onChange={(e) => handleInputChange('colors', e.target.value)}
                    placeholder="Ex: Bleu, rouge, vert... ou codes couleurs"
                  />
                </div>

                <div>
                  <Label htmlFor="brandDescription">Description de votre marque/entreprise</Label>
                  <Textarea
                    id="brandDescription"
                    value={formData.brandDescription || ''}
                    onChange={(e) => handleInputChange('brandDescription', e.target.value)}
                    placeholder="Décrivez votre activité, vos valeurs, ce que vous voulez transmettre..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formData.budget || ''}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                  >
                    <option value="">Sélectionner un budget</option>
                    <option value="25000-50000">25 000 - 50 000 FCFA</option>
                    <option value="50000-75000">50 000 - 75 000 FCFA</option>
                    <option value="75000-100000">75 000 - 100 000 FCFA</option>
                    <option value="100000+">100 000+ FCFA</option>
                  </select>
                </div>
              </div>
            )}

            {/* Étape 3: Confirmation */}
            {currentStep === 3 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-niger-green/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-niger-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Demande de logo envoyée !
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe de designers va créer plusieurs propositions de logo et vous les présenter dans les 48 heures.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <h4 className="font-semibold mb-2">Récapitulatif de votre demande :</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Entreprise : {formData.company}</li>
                    <li>• Contact : {formData.firstName} {formData.lastName}</li>
                    <li>• Email : {formData.email}</li>
                    {formData.logoStyle && <li>• Style : {formData.logoStyle}</li>}
                    {formData.colors && <li>• Couleurs : {formData.colors}</li>}
                  </ul>
                </div>
                <Link to="/">
                  <Button className="bg-niger-green hover:bg-niger-green-dark text-white">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            )}

            {/* Navigation */}
            {currentStep < 3 && (
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

                {currentStep < 2 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-niger-green hover:bg-niger-green-dark text-white flex items-center space-x-2"
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
                    <span>{isSubmitting ? 'Envoi...' : 'Envoyer la demande'}</span>
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

export default LogoService;
