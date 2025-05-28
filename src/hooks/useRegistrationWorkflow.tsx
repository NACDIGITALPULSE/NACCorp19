
import { useState } from 'react';

export interface RegistrationData {
  // Étape 1: Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Étape 2: Informations entreprise
  companyName: string;
  businessType: string;
  sector: string;
  address: string;
  city: string;
  
  // Étape 3: Services demandés
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
    companyName: '',
    businessType: '',
    sector: '',
    address: '',
    city: '',
    needsNIF: true,
    needsRCCM: true,
    needsLogo: false,
    needsGraphicDesign: false,
  });

  const updateData = (newData: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitRegistration = async () => {
    console.log('Soumission de l\'inscription:', registrationData);
    // Ici on intégrerait l'API pour soumettre les données
    return { success: true, message: 'Inscription réussie!' };
  };

  return {
    currentStep,
    registrationData,
    updateData,
    nextStep,
    prevStep,
    submitRegistration,
    totalSteps: 4
  };
};
