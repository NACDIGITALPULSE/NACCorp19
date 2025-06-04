
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Globe, 
  FileText, 
  Users, 
  CreditCard
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import OffshoreHero from '@/components/offshore/OffshoreHero';
import ProgressSidebar from '@/components/offshore/ProgressSidebar';
import CompanyInfoStep from '@/components/offshore/CompanyInfoStep';
import ManagerInfoStep from '@/components/offshore/ManagerInfoStep';
import AdditionalServicesStep from '@/components/offshore/AdditionalServicesStep';
import DocumentsStep from '@/components/offshore/DocumentsStep';
import PaymentStep from '@/components/offshore/PaymentStep';
import StepNavigation from '@/components/offshore/StepNavigation';

const Offshore = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations entreprise
    companyName: '',
    businessType: '',
    activity: '',
    capital: '',
    
    // Informations dirigeant
    firstName: '',
    lastName: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    
    // Services additionnels
    needMailbox: false,
    needAddress: false,
    needPhone: false,
    
    // Documents
    hasPassport: false,
    hasAddressProof: false,
    hasBusinessPlan: false
  });

  const steps = [
    { id: 1, title: 'Informations Entreprise', icon: Building2 },
    { id: 2, title: 'Dirigeant Principal', icon: Users },
    { id: 3, title: 'Services Additionnels', icon: Globe },
    { id: 4, title: 'Documents', icon: FileText },
    { id: 5, title: 'Paiement', icon: CreditCard }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous traiterons votre demande dans les 24-48h. Vous recevrez un email de confirmation.",
    });
  };

  const calculateTotal = () => {
    let total = 150000; // Prix de base
    if (formData.needMailbox) total += 25000;
    if (formData.needAddress) total += 30000;
    if (formData.needPhone) total += 20000;
    return total;
  };

  const currentStepData = steps.find(s => s.id === currentStep);
  const CurrentStepIcon = currentStepData?.icon;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <CompanyInfoStep formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <ManagerInfoStep formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <AdditionalServicesStep formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <DocumentsStep formData={formData} handleInputChange={handleInputChange} />;
      case 5:
        return <PaymentStep formData={formData} calculateTotal={calculateTotal} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <OffshoreHero />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <ProgressSidebar 
              steps={steps} 
              currentStep={currentStep} 
              calculateTotal={calculateTotal} 
            />
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  {CurrentStepIcon && (
                    <CurrentStepIcon className="w-6 h-6 mr-3" />
                  )}
                  {currentStepData?.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Étape {currentStep} sur {steps.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderStepContent()}

                <StepNavigation
                  currentStep={currentStep}
                  totalSteps={steps.length}
                  onPrevStep={handlePrevStep}
                  onNextStep={handleNextStep}
                  onSubmit={handleSubmit}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offshore;
