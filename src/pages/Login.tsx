
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, LogIn, Eye, EyeOff, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleInputChange = (field: keyof LoginData, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulation de connexion
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Connexion réussie!",
        description: "Vous êtes maintenant connecté à votre compte.",
      });
      
      // Ici on redirigerait vers le tableau de bord
      console.log('Utilisateur connecté:', loginData.email);
    } catch (error) {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-niger-orange hover:text-niger-orange-dark mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Se connecter
          </h1>
          <p className="text-gray-600">
            Accédez à votre compte Niger EntreprenderHub
          </p>
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LogIn className="w-5 h-5" />
              <span>Connexion</span>
            </CardTitle>
            <CardDescription>
              Entrez vos identifiants pour vous connecter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Votre mot de passe"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-niger-orange mr-2" />
                  <span className="text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <Link to="/mot-de-passe-oublie" className="text-sm text-niger-orange hover:text-niger-orange-dark">
                  Mot de passe oublié ?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white"
              >
                {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Vous n'avez pas de compte ?{' '}
                <Link to="/creer-compte" className="text-niger-orange hover:text-niger-orange-dark font-medium">
                  Créer un compte
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
