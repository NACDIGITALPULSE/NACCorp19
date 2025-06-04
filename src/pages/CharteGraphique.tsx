
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Palette, FileText, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const CharteGraphique = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    sector: '',
    description: '',
    targetAudience: '',
    preferredColors: '',
    logoStyle: '',
    needBusinessCard: false,
    needLetterhead: false,
    needPowerpoint: false,
    needSocialMedia: false,
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contactons sous 24h pour votre charte graphique.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Palette className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Charte Graphique Professionnelle
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Créez une identité visuelle cohérente et professionnelle pour votre entreprise
            </p>
          </div>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Demande de Charte Graphique</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Remplissez ce formulaire pour recevoir un devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                    <Label htmlFor="sector" className="dark:text-gray-200">Secteur d'activité *</Label>
                    <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Sélectionnez votre secteur" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="commerce" className="dark:text-white">Commerce</SelectItem>
                        <SelectItem value="services" className="dark:text-white">Services</SelectItem>
                        <SelectItem value="industrie" className="dark:text-white">Industrie</SelectItem>
                        <SelectItem value="technologie" className="dark:text-white">Technologie</SelectItem>
                        <SelectItem value="sante" className="dark:text-white">Santé</SelectItem>
                        <SelectItem value="education" className="dark:text-white">Éducation</SelectItem>
                        <SelectItem value="autre" className="dark:text-white">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="dark:text-gray-200">Description de votre entreprise *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Décrivez votre entreprise, ses valeurs, sa mission..."
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="targetAudience" className="dark:text-gray-200">Public cible</Label>
                  <Input
                    id="targetAudience"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    placeholder="Ex: Particuliers, Entreprises, Jeunes..."
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredColors" className="dark:text-gray-200">Couleurs préférées</Label>
                    <Input
                      id="preferredColors"
                      value={formData.preferredColors}
                      onChange={(e) => handleInputChange('preferredColors', e.target.value)}
                      placeholder="Ex: Bleu, Orange, Vert..."
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="logoStyle" className="dark:text-gray-200">Style de logo souhaité</Label>
                    <Select value={formData.logoStyle} onValueChange={(value) => handleInputChange('logoStyle', value)}>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Sélectionnez un style" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="moderne" className="dark:text-white">Moderne</SelectItem>
                        <SelectItem value="classique" className="dark:text-white">Classique</SelectItem>
                        <SelectItem value="minimaliste" className="dark:text-white">Minimaliste</SelectItem>
                        <SelectItem value="creatif" className="dark:text-white">Créatif</SelectItem>
                        <SelectItem value="elegant" className="dark:text-white">Élégant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-4 block dark:text-white">Documents souhaités</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="businessCard"
                        checked={formData.needBusinessCard}
                        onCheckedChange={(checked) => handleInputChange('needBusinessCard', checked)}
                      />
                      <Label htmlFor="businessCard" className="dark:text-gray-300">Cartes de visite</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="letterhead"
                        checked={formData.needLetterhead}
                        onCheckedChange={(checked) => handleInputChange('needLetterhead', checked)}
                      />
                      <Label htmlFor="letterhead" className="dark:text-gray-300">Papier à en-tête</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="powerpoint"
                        checked={formData.needPowerpoint}
                        onCheckedChange={(checked) => handleInputChange('needPowerpoint', checked)}
                      />
                      <Label htmlFor="powerpoint" className="dark:text-gray-300">Template PowerPoint</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="socialMedia"
                        checked={formData.needSocialMedia}
                        onCheckedChange={(checked) => handleInputChange('needSocialMedia', checked)}
                      />
                      <Label htmlFor="socialMedia" className="dark:text-gray-300">Visuels réseaux sociaux</Label>
                    </div>
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

export default CharteGraphique;
