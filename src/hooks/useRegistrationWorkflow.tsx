import { useState } from 'react';
import { sendConfirmationEmail } from '@/services/emailService';

export interface RegistrationData {
  // Étape 1: Informations personnelles & Compte
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  
  // Étape 2: Informations entreprise
  companyName: string;
  businessType: string;
  sector: string;
  address: string;
  city: string;
  
  // Étape 3: Type de NIF et services
  nifType: 'NIF-P' | 'NIF-R' | 'NIF-S' | '';
  needsNIF: boolean;
  needsRCCM: boolean;
  needsLogo: boolean;
  needsGraphicDesign: boolean;
  
  // Étape 4: Documents administratifs
  documents: {
    identityCard: File | null;
    proofOfAddress: File | null;
    companyStatutes: File | null;
    additionalDocs: File[];
  };
}

export const useRegistrationWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    businessType: '',
    sector: '',
    address: '',
    city: '',
    nifType: '',
    needsNIF: true,
    needsRCCM: true,
    needsLogo: false,
    needsGraphicDesign: false,
    documents: {
      identityCard: null,
      proofOfAddress: null,
      companyStatutes: null,
      additionalDocs: []
    },
  });

  const updateData = (newData: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...newData }));
  };

  const updateDocuments = (docType: keyof RegistrationData['documents'], file: File | File[] | null) => {
    setRegistrationData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docType]: file
      }
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitRegistration = async () => {
    console.log('Soumission de l\'inscription:', registrationData);
    
    try {
      // Envoi de l'email de confirmation
      const emailSent = await sendConfirmationEmail({
        to: registrationData.email,
        firstName: registrationData.firstName,
        lastName: registrationData.lastName,
        type: 'nif-rccm',
        data: {
          nifType: registrationData.nifType,
          companyName: registrationData.companyName,
          services: {
            needsNIF: registrationData.needsNIF,
            needsRCCM: registrationData.needsRCCM,
            needsLogo: registrationData.needsLogo,
            needsGraphicDesign: registrationData.needsGraphicDesign
          }
        }
      });
      
      return { 
        success: true, 
        message: emailSent 
          ? 'Inscription réussie! Un email de confirmation a été envoyé.' 
          : 'Inscription réussie! Nous vous contacterons bientôt.'
      };
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      return { success: false, message: 'Erreur lors de l\'inscription' };
    }
  };

  const getNifTypeDescription = (type: string) => {
    switch (type) {
      case 'NIF-P':
        return 'Personnes physiques (entrepreneurs individuels, professionnels libéraux)';
      case 'NIF-R':
        return 'Personnes morales (sociétés, associations, coopératives)';
      case 'NIF-S':
        return 'Structures spéciales (ONG, organisations internationales)';
      default:
        return '';
    }
  };

  const sendNotificationEmail = async (formData: any, step: string) => {
    try {
      const emailData = {
        to: "naccorp@nacdigitalpulse.com",
        subject: `Nouvelle inscription - ${step}`,
        firstName: formData.firstName || '',
        lastName: formData.lastName || '',
        phone: formData.phone || '',
        company: formData.companyName || '',
        message: `Étape: ${step}\nDonnées: ${JSON.stringify(formData, null, 2)}`,
        type: 'registration' as const
      };

      await sendConfirmationEmail(emailData);
    } catch (error) {
      console.error('Erreur envoi email:', error);
    }
  };

  return {
    currentStep,
    registrationData,
    updateData,
    updateDocuments,
    nextStep,
    prevStep,
    submitRegistration,
    getNifTypeDescription,
    totalSteps: 6
  };
};
