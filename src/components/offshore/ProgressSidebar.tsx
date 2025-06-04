
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: any;
}

interface ProgressSidebarProps {
  steps: Step[];
  currentStep: number;
  calculateTotal: () => number;
}

const ProgressSidebar = ({ steps, currentStep, calculateTotal }: ProgressSidebarProps) => {
  return (
    <Card className="sticky top-24 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg dark:text-white">Progression</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div
              key={step.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900/30 dark:border-blue-400' 
                  : isCompleted 
                  ? 'bg-green-50 dark:bg-green-900/30' 
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : isCompleted 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-gray-400 dark:text-gray-500'
              }`} />
              <span className={`text-sm font-medium ${
                isActive 
                  ? 'text-blue-900 dark:text-blue-300' 
                  : isCompleted 
                  ? 'text-green-900 dark:text-green-300' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {step.title}
              </span>
              {isCompleted && (
                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 ml-auto" />
              )}
            </div>
          );
        })}
        
        <Separator className="my-4 dark:border-gray-600" />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="dark:text-gray-300">Total estimé:</span>
            <span className="font-bold dark:text-white">{calculateTotal().toLocaleString()} FCFA</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            TVA incluse
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSidebar;
