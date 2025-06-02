
interface EmailData {
  to: string;
  firstName: string;
  lastName: string;
  type: 'registration' | 'nif-rccm' | 'service-request';
  data?: any;
}

export const sendConfirmationEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log('Envoi de l\'email de confirmation à:', emailData.to);
    
    // Simulation d'envoi d'email - Dans un vrai projet, ceci serait un appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const emailContent = generateEmailContent(emailData);
    console.log('Contenu de l\'email:', emailContent);
    
    // Ici on intégrerait un service d'email comme SendGrid, Mailgun, etc.
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

const generateEmailContent = (emailData: EmailData) => {
  const { firstName, lastName, type } = emailData;
  
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
        subject: 'Demande NIF & RCCM reçue - Niger EntreprenderHub',
        body: `
          Bonjour ${firstName} ${lastName},
          
          Nous avons bien reçu votre demande pour l'obtention de votre NIF et RCCM.
          
          Notre équipe va traiter votre dossier dans les plus brefs délais.
          Vous recevrez un email de confirmation une fois le traitement terminé.
          
          Délai estimé : 2-5 jours ouvrables selon le type de NIF.
          
          Cordialement,
          L'équipe Niger EntreprenderHub
        `
      };
      
    case 'service-request':
      return {
        subject: 'Demande de service reçue - Niger EntreprenderHub',
        body: `
          Bonjour ${firstName} ${lastName},
          
          Nous avons bien reçu votre demande de service.
          
          Notre équipe commerciale vous contactera dans les 24 heures pour discuter de votre projet.
          
          Cordialement,
          L'équipe Niger EntreprenderHub
        `
      };
      
    default:
      return {
        subject: 'Confirmation - Niger EntreprenderHub',
        body: `Bonjour ${firstName} ${lastName}, votre demande a été reçue avec succès.`
      };
  }
};
