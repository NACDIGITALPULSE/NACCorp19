
export interface EmailData {
  to: string;
  subject?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  message?: string;
  type: 'contact' | 'registration' | 'appointment' | 'payment';
  appointmentDate?: string;
  appointmentTime?: string;
  service?: string;
  amount?: string;
  paymentMethod?: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // En mode développement, on simule l'envoi d'email
    console.log('Envoi d\'email vers naccorp@nacdigitalpulse.com:', emailData);
    
    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

export const sendConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  return sendEmail({
    ...emailData,
    subject: `Confirmation - ${emailData.type === 'registration' ? 'Inscription' : 'Demande'}`
  });
};

export const sendPaymentNotification = async (paymentData: {
  amount: string;
  service: string;
  userInfo: any;
  paymentMethod: string;
}): Promise<boolean> => {
  try {
    console.log('Notification de paiement envoyée au NITA:', paymentData);
    
    // Ici, vous pourriez intégrer un service d'envoi SMS vers +227 880282987
    // Pour le moment, on simule l'envoi
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification de paiement:', error);
    return false;
  }
};
