import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { sendEmail, sendConfirmationEmail } from '@/services/emailService';
import { toast } from 'sonner';

const TaxDeclaration = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    declarationType: '',
    period: '',
    revenue: '',
    employees: '',
    additionalInfo: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailData = {
      to: "naccorp@nacdigitalpulse.com",
      subject: "Demande de déclaration fiscale",
      firstName: user?.user_metadata?.first_name || '',
      lastName: user?.user_metadata?.last_name || '',
      message: `Demande de déclaration fiscale pour ${formData.companyName}`,
      type: 'contact' as const,
      company: formData.companyName,
      html: `
        <h2>Nouvelle demande de déclaration fiscale</h2>
        <p><strong>Utilisateur:</strong> ${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}</p>
        <p><strong>Email:</strong> ${user?.email}</p>
        <p><strong>Nom de l'entreprise:</strong> ${formData.companyName}</p>
        <p><strong>Type de déclaration:</strong> ${formData.declarationType}</p>
        <p><strong>Période:</strong> ${formData.period}</p>
        <p><strong>Chiffre d'affaires:</strong> ${formData.revenue}</p>
        <p><strong>Nombre d'employés:</strong> ${formData.employees}</p>
        <p><strong>Informations supplémentaires:</strong> ${formData.additionalInfo}</p>
      `
    };

    try {
      const success = await sendEmail(emailData);

      if (success) {
        toast.success("Votre demande a été envoyée avec succès !");

        const confirmationEmailData = {
          to: user?.email || '',
          subject: "Confirmation de votre demande de déclaration fiscale",
          firstName: user?.user_metadata?.first_name || '',
          lastName: user?.user_metadata?.last_name || '',
          message: "Votre demande a été reçue et sera traitée dans les plus brefs délais.",
          type: 'registration' as const,
          html: `
            <h2>Confirmation de demande</h2>
            <p>Bonjour ${user?.user_metadata?.first_name || ''},</p>
            <p>Nous avons bien reçu votre demande de déclaration fiscale pour <strong>${formData.companyName}</strong>.</p>
            <p>Notre équipe va examiner votre dossier et vous contacter sous 24-48h.</p>
            <p>Cordialement,<br>L'équipe NACCORP</p>
          `
        };

        await sendConfirmationEmail(confirmationEmailData);
        setFormData({
          companyName: '',
          declarationType: '',
          period: '',
          revenue: '',
          employees: '',
          additionalInfo: ''
        });
      } else {
        toast.error("Erreur lors de l'envoi de votre demande. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <Card>
          <CardHeader className="bg-gray-50 px-6 py-4">
            <CardTitle className="text-lg font-semibold">Déclaration Fiscale</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nom de l'entreprise</Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="declarationType" className="block text-sm font-medium text-gray-700">Type de déclaration</Label>
                <Input
                  type="text"
                  id="declarationType"
                  name="declarationType"
                  value={formData.declarationType}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="period" className="block text-sm font-medium text-gray-700">Période</Label>
                <Input
                  type="text"
                  id="period"
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="revenue" className="block text-sm font-medium text-gray-700">Chiffre d'affaires</Label>
                <Input
                  type="number"
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="employees" className="block text-sm font-medium text-gray-700">Nombre d'employés</Label>
                <Input
                  type="number"
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Informations supplémentaires</Label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-niger-orange text-white">
                {isLoading ? 'Envoi en cours...' : 'Envoyer la demande'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxDeclaration;
