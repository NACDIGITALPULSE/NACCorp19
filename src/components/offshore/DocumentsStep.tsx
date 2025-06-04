
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, AlertCircle } from 'lucide-react';

interface FormData {
  hasPassport: boolean;
  hasAddressProof: boolean;
  hasBusinessPlan: boolean;
}

interface DocumentsStepProps {
  formData: FormData;
  handleInputChange: (field: string, value: any) => void;
}

const DocumentsStep = ({ formData, handleInputChange }: DocumentsStepProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 dark:bg-yellow-900/30 dark:border-yellow-700">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">Documents requis</h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Vous devrez fournir ces documents après validation de votre demande.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
          <Checkbox
            id="passport"
            checked={formData.hasPassport}
            onCheckedChange={(checked) => handleInputChange('hasPassport', checked)}
          />
          <div className="flex-1">
            <Label htmlFor="passport" className="font-medium dark:text-white">Copie du passeport</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Passeport en cours de validité du dirigeant principal
            </p>
          </div>
          <FileText className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
          <Checkbox
            id="addressProof"
            checked={formData.hasAddressProof}
            onCheckedChange={(checked) => handleInputChange('hasAddressProof', checked)}
          />
          <div className="flex-1">
            <Label htmlFor="addressProof" className="font-medium dark:text-white">Justificatif de domicile</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Facture de moins de 3 mois (électricité, eau, téléphone)
            </p>
          </div>
          <FileText className="w-5 h-5 text-gray-400" />
        </div>

        <div className="flex items-center space-x-3 p-3 border rounded-lg dark:border-gray-600">
          <Checkbox
            id="businessPlan"
            checked={formData.hasBusinessPlan}
            onCheckedChange={(checked) => handleInputChange('hasBusinessPlan', checked)}
          />
          <div className="flex-1">
            <Label htmlFor="businessPlan" className="font-medium dark:text-white">Plan d'affaires (optionnel)</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Description détaillée de votre projet d'entreprise
            </p>
          </div>
          <FileText className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default DocumentsStep;
