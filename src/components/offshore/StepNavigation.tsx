
import { Button } from '@/components/ui/button';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

const StepNavigation = ({ currentStep, totalSteps, onPrevStep, onNextStep, onSubmit }: StepNavigationProps) => {
  return (
    <div className="flex justify-between pt-6 border-t dark:border-gray-600">
      <Button
        variant="outline"
        onClick={onPrevStep}
        disabled={currentStep === 1}
        className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Précédent
      </Button>
      
      {currentStep < totalSteps ? (
        <Button onClick={onNextStep} className="bg-blue-600 hover:bg-blue-700">
          Suivant
        </Button>
      ) : (
        <Button onClick={onSubmit} className="bg-green-600 hover:bg-green-700">
          Envoyer la demande
        </Button>
      )}
    </div>
  );
};

export default StepNavigation;
