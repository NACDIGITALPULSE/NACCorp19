
interface EmailData {
  to: string;
  firstName: string;
  lastName: string;
  type: 'registration' | 'nif-rccm' | 'service-request' | 'visibility-request' | 'logo-request' | 'website-request' | 'appointment-booking';
  data?: any;
}

interface SimpleEmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (emailData: SimpleEmailData): Promise<boolean> => {
  try {
    console.log('Envoi de l\'email à:', emailData.to);
    console.log('Sujet:', emailData.subject);
    console.log('Contenu:', emailData.html);
    
    // Simulation d'envoi d'email - Dans un vrai projet, ceci serait un appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

export const sendConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Envoi de l\'email de confirmation à:', emailData.to);
    
    // Simulation d'envoi d'email - Dans un vrai projet, ceci serait un appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const emailContent = generateEmailContent(emailData);
    console.log('Contenu de l\'email:', emailContent);
    
    // Envoi vers l'adresse spécifiée
    const targetEmail = 'naccorp@nacdigitalpulse.com';
    console.log('Email envoyé vers:', targetEmail);
    
    // Notification au client
    await sendClientNotification(emailData);
    
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

const sendClientNotification = async (emailData: EmailData) => {
  console.log(`Notification envoyée au client ${emailData.to} pour ${emailData.type}`);
  
  // Message de notification à l'utilisateur
  const clientMessage = getClientNotificationMessage(emailData.type);
  console.log('Message de notification:', clientMessage);
  
  // Ici on enverrait une notification de confirmation au client
  return true;
};

const getClientNotificationMessage = (type: EmailData['type']): string => {
  switch (type) {
    case 'nif-rccm':
      return 'Votre demande de NIF & RCCM a été reçue. Notre équipe vous contactera dans les 24h.';
    case 'visibility-request':
      return 'Votre demande de visibilité en ligne a été transmise. Un expert vous contactera rapidement.';
    case 'logo-request':
      return 'Votre projet de logo a été reçu. Notre équipe design vous contactera bientôt.';
    case 'website-request':
      return 'Votre demande de site web a été enregistrée. Nous vous contacterons pour discuter de votre projet.';
    case 'appointment-booking':
      return 'Votre demande de rendez-vous a été confirmée. Vous recevrez une confirmation par email.';
    default:
      return 'Votre demande a été reçue et sera traitée dans les plus brefs délais.';
  }
};

const generateEmailContent = (emailData: EmailData) => {
  const { firstName, lastName, type, data } = emailData;
  
  switch (type) {
    case 'registration':
      return {
        subject: 'Bienvenue sur Niger EntreprenderHub - Compte créé avec succès',
        body: `
          Bonjour ${firstName} ${lastName},
          
          Votre compte a été créé avec succès sur Niger EntreprenderHub.
          
          Vous pouvez maintenant vous connecter et accéder à tous nos services :
          - Création NIF & RCCM
          - Services de visibilité en ligne
          - Création de logos et sites web
          
          Cordialement,
          L'équipe Niger EntreprenderHub
        `
      };
      
    case 'nif-rccm':
      return {
        subject: `Nouvelle demande NIF & RCCM - ${firstName} ${lastName}`,
        body: `
          Nouvelle demande reçue de ${firstName} ${lastName}
          
          Type de NIF: ${data?.nifType || 'Non spécifié'}
          Email: ${emailData.to}
          Téléphone: ${data?.phone || 'Non renseigné'}
          
          Merci de traiter cette demande dans les plus brefs délais.
          
          Cordialement,
          Système Niger EntreprenderHub
        `
      };
      
    case 'visibility-request':
      return {
        subject: `Demande de visibilité en ligne - ${firstName} ${lastName}`,
        body: `
          Nouvelle demande de visibilité en ligne reçue
          
          Client: ${firstName} ${lastName}
          Email: ${emailData.to}
          Entreprise: ${data?.companyName || 'Non renseigné'}
          Services demandés: ${data?.selectedServices ? Object.keys(data.selectedServices).filter(k => data.selectedServices[k]).join(', ') : 'Non spécifié'}
          Budget: ${data?.budget || 'Non spécifié'}
          
          Merci de contacter le client dans les 24h.
        `
      };
      
    case 'website-request':
      return {
        subject: `Demande de création de site web - ${firstName} ${lastName}`,
        body: `
          Nouvelle demande de site web reçue
          
          Client: ${firstName} ${lastName}
          Email: ${emailData.to}
          Type de site: ${data?.websiteType || 'Non spécifié'}
          Budget: ${data?.budget || 'Non spécifié'}
          Délai: ${data?.deadline || 'Non spécifié'}
          
          Merci de contacter le client pour discuter du projet.
        `
      };

    case 'logo-request':
      return {
        subject: `Demande de création de logo - ${firstName} ${lastName}`,
        body: `
          Nouvelle demande de logo reçue
          
          Client: ${firstName} ${lastName}
          Email: ${emailData.to}
          Style demandé: ${data?.logoStyle || 'Non spécifié'}
          Secteur: ${data?.industry || 'Non spécifié'}
          Budget: ${data?.budget || 'Non spécifié'}
          
          Merci de contacter le client pour discuter du projet.
        `
      };

    case 'appointment-booking':
      return {
        subject: `Nouvelle demande de rendez-vous - ${firstName} ${lastName}`,
        body: `
          Nouvelle demande de rendez-vous reçue
          
          Client: ${firstName} ${lastName}
          Email: ${emailData.to}
          Téléphone: ${data?.phone || 'Non renseigné'}
          Date souhaitée: ${data?.preferredDate || 'Non spécifiée'}
          Heure souhaitée: ${data?.preferredTime || 'Non spécifiée'}
          Sujet: ${data?.subject || 'Non spécifié'}
          Message: ${data?.message || 'Aucun message'}
          
          Merci de confirmer le rendez-vous avec le client.
        `
      };
      
    default:
      return {
        subject: `Nouvelle demande - ${firstName} ${lastName}`,
        body: `Nouvelle demande reçue de ${firstName} ${lastName} (${emailData.to})`
      };
  }
};
