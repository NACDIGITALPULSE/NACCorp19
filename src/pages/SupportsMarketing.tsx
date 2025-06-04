
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Megaphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const SupportsMarketing = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    needFlyers: false,
    needBrochures: false,
    needPosters: false,
    needBanners: false,
    needSocialMedia: false,
    needNewsletters: false,
    targetMessage: '',
    budget: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi d'email à customer@nacdigitalpulse.com
    try {
      console.log(`Envoi demande supports marketing vers customer@nacdigitalpulse.com pour: ${formData.companyName}`);
      
      toast({
        title: "Demande envoyée !",
        description: "Votre demande a été envoyée à customer@nacdigitalpulse.com. Nous vous contactons sous 24h.",
      });
      
      // Reset form
      setFormData({
        companyName: '',
        description: '',
        needFlyers: false,
        needBrochures: false,
        needPosters: false,
        needBanners: false,
        needSocialMedia: false,
        needNewsletters: false,
        targetMessage: '',
        budget: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Megaphone className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Supports Marketing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Créez des supports marketing percutants pour promouvoir votre entreprise
            </p>
          </div>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Demande de Supports Marketing</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Dites-nous quels supports marketing vous souhaitez créer. Votre demande sera envoyée à customer@nacdigitalpulse.com
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

                <div>
                  <Label htmlFor="description" className="dark:text-gray-200">Description de votre activité *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Décrivez votre entreprise et vos produits/services..."
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-4 block dark:text-white">Types de supports souhaités</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="flyers"
                        checked={formData.needFlyers}
                        onCheckedChange={(checked) => handleInputChange('needFlyers', checked)}
                      />
                      <Label htmlFor="flyers" className="dark:text-gray-300">Flyers / Dépliants</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="brochures"
                        checked={formData.needBrochures}
                        onCheckedChange={(checked) => handleInputChange('needBrochures', checked)}
                      />
                      <Label htmlFor="brochures" className="dark:text-gray-300">Brochures</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="posters"
                        checked={formData.needPosters}
                        onCheckedChange={(checked) => handleInputChange('needPosters', checked)}
                      />
                      <Label htmlFor="posters" className="dark:text-gray-300">Affiches / Posters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="banners"
                        checked={formData.needBanners}
                        onCheckedChange={(checked) => handleInputChange('needBanners', checked)}
                      />
                      <Label htmlFor="banners" className="dark:text-gray-300">Banderoles / Kakémonos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="socialMedia"
                        checked={formData.needSocialMedia}
                        onCheckedChange={(checked) => handleInputChange('needSocialMedia', checked)}
                      />
                      <Label htmlFor="socialMedia" className="dark:text-gray-300">Visuels réseaux sociaux</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletters"
                        checked={formData.needNewsletters}
                        onCheckedChange={(checked) => handleInputChange('needNewsletters', checked)}
                      />
                      <Label htmlFor="newsletters" className="dark:text-gray-300">Templates newsletters</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="targetMessage" className="dark:text-gray-200">Message à transmettre</Label>
                  <Textarea
                    id="targetMessage"
                    value={formData.targetMessage}
                    onChange={(e) => handleInputChange('targetMessage', e.target.value)}
                    placeholder="Quel message souhaitez-vous faire passer à vos clients ?"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="dark:text-gray-200">Budget approximatif (FCFA)</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="Ex: 100000 - 500000"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="dark:text-gray-200">Téléphone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                  Demander un devis gratuit
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

export default SupportsMarketing;
