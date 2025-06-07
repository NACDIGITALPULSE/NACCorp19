
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Phone, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendConfirmationEmail } from '@/services/emailService';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    subject: '',
    message: '',
    company: '',
    service: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const emailData = {
      to: "naccorp@nacdigitalpulse.com",
      subject: "Nouvelle demande de consultation",
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      company: formData.company,
      message: `Service demandé: ${formData.service}\nDate souhaitée: ${formData.preferredDate}\nHeure souhaitée: ${formData.preferredTime}\nMessage: ${formData.message}`,
      type: 'appointment-booking' as const,
      appointmentDate: formData.preferredDate,
      appointmentTime: formData.preferredTime,
      service: formData.service
    };

    try {
      await sendConfirmationEmail(emailData);

      toast({
        title: "Demande de rendez-vous envoyée",
        description: "Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        subject: '',
        message: '',
        company: '',
        service: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-niger-orange/10 rounded-full">
            <Calendar className="w-8 h-8 text-niger-orange" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Planifier un appel</h2>
        <p className="text-gray-600">Réservez une consultation gratuite avec nos experts</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Prénom *
            </label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="votre.email@exemple.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Téléphone *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
              placeholder="+227 XX XX XX XX"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Date préférée *
            </label>
            <Input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Heure préférée *
            </label>
            <Input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sujet de l'appel *
          </label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Ex: Création d'entreprise, Site web, Logo..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service demandé
          </label>
          <Input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full"
            placeholder="NIF & RCCM, Site web, Logo, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message (optionnel)
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full"
            rows={4}
            placeholder="Décrivez brièvement votre projet ou vos questions..."
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-niger-orange to-niger-green text-white hover:scale-105 transition-transform duration-300"
          size="lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5 mr-2" />
              Planifier l'appel
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Un expert vous contactera dans les 24h pour confirmer votre rendez-vous</p>
      </div>
    </div>
  );
};

export default AppointmentBooking;
