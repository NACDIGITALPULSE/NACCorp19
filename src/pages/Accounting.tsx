import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { sendEmail, sendConfirmationEmail } from '@/services/emailService';
import { toast } from "@/components/ui/use-toast"

const Accounting = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    services: '',
    employees: '',
    annualRevenue: '',
    additionalInfo: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailData = {
      to: "naccorp@nacdigitalpulse.com",
      subject: "Demande de service comptable",
      firstName: user?.user_metadata?.first_name || '',
      lastName: user?.user_metadata?.last_name || '',
      message: `Demande de service comptable pour ${formData.companyName}`,
      type: 'contact' as const,
      company: formData.companyName,
      html: `
        <h2>Nouvelle demande de service comptable</h2>
        <p><strong>Utilisateur:</strong> ${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}</p>
        <p><strong>Email:</strong> ${user?.email}</p>
        <p><strong>Nom de l'entreprise:</strong> ${formData.companyName}</p>
        <p><strong>Type d'entreprise:</strong> ${formData.companyType}</p>
        <p><strong>Services demandés:</strong> ${formData.services}</p>
        <p><strong>Nombre d'employés:</strong> ${formData.employees}</p>
        <p><strong>Chiffre d'affaires annuel:</strong> ${formData.annualRevenue}</p>
        <p><strong>Informations supplémentaires:</strong> ${formData.additionalInfo}</p>
      `
    };

    try {
      const success = await sendEmail(emailData);

      if (success) {
        toast({
          title: "Demande envoyée!",
          description: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Erreur!",
          description: "Il y a eu une erreur lors de l'envoi de votre demande. Veuillez réessayer.",
        })
      }

      const confirmationEmailData = {
        to: user?.email || '',
        subject: "Confirmation de votre demande de service comptable",
        firstName: user?.user_metadata?.first_name || '',
        lastName: user?.user_metadata?.last_name || '',
        message: "Votre demande a été reçue et sera traitée dans les plus brefs délais.",
        type: 'registration' as const,
        html: `
        <h2>Confirmation de demande</h2>
        <p>Bonjour ${user?.user_metadata?.first_name || ''},</p>
        <p>Nous avons bien reçu votre demande de service comptable pour <strong>${formData.companyName}</strong>.</p>
        <p>Notre équipe va examiner votre dossier et vous contacter sous 24-48h.</p>
        <p>Cordialement,<br>L'équipe NACCORP</p>
      `
      };

      await sendConfirmationEmail(confirmationEmailData);

      setFormData({
        companyName: '',
        companyType: '',
        services: '',
        employees: '',
        annualRevenue: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      toast({
        variant: "destructive",
        title: "Erreur!",
        description: "Il y a eu une erreur lors de l'envoi de votre demande. Veuillez réessayer.",
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-niger-orange to-niger-green shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Services Comptables</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div>
                  <Label htmlFor="companyName">Nom de l'entreprise</Label>
                  <Input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="companyType">Type d'entreprise</Label>
                  <Select onValueChange={(value) => handleSelectChange('companyType', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionner le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SARL">SARL</SelectItem>
                      <SelectItem value="SAS">SAS</SelectItem>
                      <SelectItem value="Entreprise individuelle">Entreprise individuelle</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="services">Services demandés</Label>
                  <Textarea
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="Tenue de livres, déclarations fiscales, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="employees">Nombre d'employés</Label>
                  <Input
                    type="number"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="annualRevenue">Chiffre d'affaires annuel (estimé)</Label>
                  <Input
                    type="text"
                    id="annualRevenue"
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="additionalInfo">Informations supplémentaires</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Décrivez vos besoins spécifiques"
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading ? "Envoi en cours..." : "Envoyer la demande"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
