import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from '@/hooks/useAuth';
import { sendEmail, sendConfirmationEmail } from '@/services/emailService';
import { toast } from "@/components/ui/use-toast"

const OnlineVisibility = () => {
  const { user, profile } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    sector: '',
    targetAudience: '',
    currentPresence: '',
    goals: '',
    budget: '',
    timeline: '',
    specificNeeds: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailData = {
      to: "naccorp@nacdigitalpulse.com",
      subject: "Demande de visibilité en ligne",
      firstName: profile?.first_name || '',
      lastName: profile?.last_name || '',
      message: `Demande de visibilité en ligne de ${formData.companyName}`,
      type: 'visibility-request' as const,
      company: formData.companyName,
      html: `
        <h2>Nouvelle demande de visibilité en ligne</h2>
        <p><strong>Utilisateur:</strong> ${profile?.first_name || ''} ${profile?.last_name || ''}</p>
        <p><strong>Email:</strong> ${user?.email}</p>
        <p><strong>Nom de l'entreprise:</strong> ${formData.companyName}</p>
        <p><strong>Secteur d'activité:</strong> ${formData.sector}</p>
        <p><strong>Public cible:</strong> ${formData.targetAudience}</p>
        <p><strong>Présence actuelle:</strong> ${formData.currentPresence}</p>
        <p><strong>Objectifs:</strong> ${formData.goals}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
        <p><strong>Délai souhaité:</strong> ${formData.timeline}</p>
        <p><strong>Besoins spécifiques:</strong> ${formData.specificNeeds}</p>
      `
    };

    try {
      const success = await sendEmail(emailData);

      if (success) {
        toast({
          title: "Demande envoyée!",
          description: "Votre demande de visibilité en ligne a été envoyée avec succès.",
        })
        setFormData({
          companyName: '',
          sector: '',
          targetAudience: '',
          currentPresence: '',
          goals: '',
          budget: '',
          timeline: '',
          specificNeeds: ''
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur!",
          description: "Il y a eu une erreur lors de l'envoi de votre demande. Veuillez réessayer.",
        })
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Erreur!",
        description: "Il y a eu une erreur lors de l'envoi de votre demande. Veuillez réessayer.",
      })
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Demande de Visibilité en Ligne</CardTitle>
            <CardDescription>
              Décrivez vos besoins pour améliorer votre présence en ligne.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="companyName">Nom de l'entreprise</Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
              <div>
                <Label htmlFor="sector">Secteur d'activité</Label>
                <Input
                  type="text"
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  placeholder="Secteur d'activité"
                  required
                />
              </div>
              <div>
                <Label htmlFor="targetAudience">Public cible</Label>
                <Textarea
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="Description de votre public cible"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="currentPresence">Présence en ligne actuelle</Label>
                <Textarea
                  id="currentPresence"
                  name="currentPresence"
                  value={formData.currentPresence}
                  onChange={handleChange}
                  placeholder="Décrivez votre présence en ligne actuelle"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="goals">Objectifs</Label>
                <Textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="Quels sont vos objectifs en matière de visibilité en ligne ?"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget</Label>
                <Input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget que vous souhaitez allouer"
                />
              </div>
              <div>
                <Label htmlFor="timeline">Délai souhaité</Label>
                <Input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Délai souhaité pour la mise en place de la stratégie"
                />
              </div>
              <div>
                <Label htmlFor="specificNeeds">Besoins spécifiques</Label>
                <Textarea
                  id="specificNeeds"
                  name="specificNeeds"
                  value={formData.specificNeeds}
                  onChange={handleChange}
                  placeholder="Décrivez vos besoins spécifiques"
                  rows={3}
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
  );
};

export default OnlineVisibility;
