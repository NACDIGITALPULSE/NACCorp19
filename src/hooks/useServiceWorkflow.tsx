
import { useState } from 'react';

export interface ServiceFormData {
  // Informations client
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  
  // Service spécifique
  serviceType: 'website' | 'logo' | 'financial' | 'social-media';
  
  // Pour sites web
  websiteType?: 'vitrine' | 'ecommerce' | 'landing';
  budget?: string;
  features?: string[];
  deadline?: string;
  
  // Pour logo
  logoStyle?: string;
  colors?: string;
  brandDescription?: string;
  
  // Pour accompagnement financier
  businessSize?: string;
  financialNeeds?: string[];
  
  // Pour réseaux sociaux
  platforms?: string[];
  contentType?: string[];
  frequency?: string;
}

export const useServiceWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ServiceFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'website',
  });

  const updateData = (newData: Partial<ServiceFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitForm = async () => {
    console.log('Soumission du formulaire:', formData);
    return { success: true, message: 'Demande soumise avec succès!' };
  };

  return {
    currentStep,
    formData,
    updateData,
    nextStep,
    prevStep,
    submitForm,
    totalSteps: 3
  };
};
