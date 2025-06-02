
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, User, Eye, EyeOff, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { sendConfirmationEmail } from '@/services/emailService';

interface UserAccountData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const CreateAccount = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [accountData, setAccountData] = useState<UserAccountData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: keyof UserAccountData, value: string) => {
    setAccountData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!accountData.firstName || !accountData.lastName || !accountData.email || !accountData.password) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    if (accountData.password !== accountData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }

    if (accountData.password.length < 6) {
      toast({
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 6 caractères",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulation de création de compte
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Envoi de l'email de confirmation
      const emailSent = await sendConfirmationEmail({
        to: accountData.email,
        firstName: accountData.firstName,
        lastName: accountData.lastName,
        type: 'registration'
      });
      
      if (emailSent) {
        toast({
          title: "Compte créé avec succès!",
          description: "Un email de confirmation a été envoyé à votre adresse.",
        });
      } else {
        toast({
          title: "Compte créé",
          description: "Votre compte a été créé mais l'email de confirmation n'a pas pu être envoyé.",
          variant: "destructive"
        });
      }
      
      setIsAccountCreated(true);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du compte",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isAccountCreated) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>

          <Card>
            <CardContent className="text-center py-8">
              <div className="w-16 h-16 bg-niger-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-niger-green" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Compte créé avec succès !
              </h2>
              <p className="text-gray-600 mb-6">
                Un email de confirmation a été envoyé à <strong>{accountData.email}</strong>
              </p>
              <div className="space-y-3">
                <Link to="/connexion">
                  <Button className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                    Se connecter maintenant
                  </Button>
                </Link>
                <Link to="/inscription-nif-rccm">
                  <Button variant="outline" className="w-full border-niger-green text-niger-green hover:bg-niger-green hover:text-white">
                    Commencer ma demande NIF & RCCM
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Créer un compte
          </h1>
          <p className="text-gray-600">
            Rejoignez Niger EntreprenderHub et accédez à tous nos services
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Informations du compte</span>
            </CardTitle>
            <CardDescription>
              Créez votre compte pour accéder à notre plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    value={accountData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    value={accountData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={accountData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={accountData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+227 XX XX XX XX"
                />
              </div>
              
              <div>
                <Label htmlFor="password">Mot de passe *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={accountData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Minimum 6 caractères"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirmer le mot de passe *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={accountData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirmer votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white"
              >
                {isSubmitting ? 'Création en cours...' : 'Créer mon compte'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?{' '}
                <Link to="/connexion" className="text-niger-orange hover:text-niger-orange-dark font-medium">
                  Se connecter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAccount;
