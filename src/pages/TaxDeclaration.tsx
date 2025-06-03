
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, FileText, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sendEmail } from '@/services/emailService';
import { useToast } from '@/hooks/use-toast';

const TaxDeclaration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    nif: '',
    rccm: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    annualRevenue: '',
    declarationType: '',
    additionalInfo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendEmail({
        to: 'customer@nacdigitalpulse.com',
        subject: 'Nouvelle demande - Déclaration fiscale',
        html: `
          <h2>Nouvelle demande de déclaration fiscale</h2>
          <p><strong>Entreprise:</strong> ${formData.companyName}</p>
          <p><strong>NIF:</strong> ${formData.nif}</p>
          <p><strong>RCCM:</strong> ${formData.rccm}</p>
          <p><strong>Contact:</strong> ${formData.contactPerson}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Type d'activité:</strong> ${formData.businessType}</p>
          <p><strong>Chiffre d'affaires annuel:</strong> ${formData.annualRevenue}</p>
          <p><strong>Type de déclaration:</strong> ${formData.declarationType}</p>
          <p><strong>Informations supplémentaires:</strong> ${formData.additionalInfo}</p>
        `
      });

      // Email de confirmation au client
      await sendEmail({
        to: formData.email,
        subject: 'Confirmation - Demande de déclaration fiscale reçue',
        html: `
          <h2>Demande reçue avec succès</h2>
          <p>Bonjour ${formData.contactPerson},</p>
          <p>Nous avons bien reçu votre demande de déclaration fiscale. Notre équipe va l'examiner et vous recontacter sous 24h.</p>
          <p>Cordialement,<br>L'équipe Niger EntreprenderHub</p>
        `
      });

      toast({
        title: "Demande envoyée",
        description: "Votre demande a été envoyée avec succès. Nous vous recontacterons sous 24h.",
      });

      // Reset form
      setFormData({
        companyName: '',
        nif: '',
        rccm: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        annualRevenue: '',
        declarationType: '',
        additionalInfo: ''
      });

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Service de Déclaration Fiscale
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Confiez-nous vos déclarations fiscales et restez en conformité avec la législation nigérienne
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-12 h-12 text-niger-orange mx-auto mb-4" />
                <CardTitle>Déclaration TVA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Déclaration mensuelle ou trimestrielle de TVA</p>
                <p className="text-2xl font-bold text-niger-orange">25 000 FCFA/mois</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-niger-green mx-auto mb-4" />
                <CardTitle>Impôt sur les Sociétés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Déclaration annuelle d'impôt sur les sociétés</p>
                <p className="text-2xl font-bold text-niger-green">75 000 FCFA/an</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Package Complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Toutes déclarations fiscales incluses</p>
                <p className="text-2xl font-bold text-blue-500">250 000 FCFA/an</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Demande de Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nif">NIF</Label>
                    <Input
                      id="nif"
                      value={formData.nif}
                      onChange={(e) => setFormData({...formData, nif: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rccm">RCCM</Label>
                    <Input
                      id="rccm"
                      value={formData.rccm}
                      onChange={(e) => setFormData({...formData, rccm: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Personne de contact *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType">Type d'activité *</Label>
                  <Input
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="annualRevenue">Chiffre d'affaires annuel estimé</Label>
                    <Input
                      id="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={(e) => setFormData({...formData, annualRevenue: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="declarationType">Type de déclaration souhaité</Label>
                    <Select onValueChange={(value) => setFormData({...formData, declarationType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tva">Déclaration TVA</SelectItem>
                        <SelectItem value="is">Impôt sur les Sociétés</SelectItem>
                        <SelectItem value="complete">Package Complet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Informations supplémentaires</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                    placeholder="Décrivez vos besoins spécifiques..."
                  />
                </div>

                <Button type="submit" className="w-full bg-niger-orange hover:bg-niger-orange-dark text-white">
                  Envoyer ma demande
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

export default TaxDeclaration;
