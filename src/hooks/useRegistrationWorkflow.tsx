
import { useState } from 'react';

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
  
  // Étape 3: Documents administratifs
  documents: {
    identityCard: File | null;
    proofOfAddress: File | null;
    companyStatutes: File | null;
    additionalDocs: File[];
  };
  
  // Étape 4: Services demandés
  needsNIF: boolean;
  needsRCCM: boolean;
  needsLogo: boolean;
  needsGraphicDesign: boolean;
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
    documents: {
      identityCard: null,
      proofOfAddress: null,
      companyStatutes: null,
      additionalDocs: []
    },
    needsNIF: true,
    needsRCCM: true,
    needsLogo: false,
    needsGraphicDesign: false,
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
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitRegistration = async () => {
    console.log('Soumission de l\'inscription:', registrationData);
    // Ici on intégrerait l'API pour soumettre les données et créer le compte
    return { success: true, message: 'Inscription réussie!' };
  };

  return {
    currentStep,
    registrationData,
    updateData,
    updateDocuments,
    nextStep,
    prevStep,
    submitRegistration,
    totalSteps: 5
  };
};
