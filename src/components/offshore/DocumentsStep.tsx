
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, AlertCircle, Upload, X, CheckCircle } from 'lucide-react';
import { FileUpload } from '@/components/FileUpload';

interface FormData {
  hasPassport: boolean;
  hasAddressProof: boolean;
  hasBusinessPlan: boolean;
  passportFile?: File | null;
  addressProofFile?: File | null;
  businessPlanFile?: File | null;
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
              Veuillez joindre les documents suivants pour traiter votre demande.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-4 dark:border-gray-600">
          <div className="flex items-center space-x-3 mb-4">
            <Checkbox
              id="passport"
              checked={formData.hasPassport}
              onCheckedChange={(checked) => handleInputChange('hasPassport', checked)}
            />
            <div className="flex-1">
              <Label htmlFor="passport" className="font-medium dark:text-white">Copie du passeport *</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Passeport en cours de validité du dirigeant principal
              </p>
            </div>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          
          <FileUpload
            onFileSelect={(file) => handleInputChange('passportFile', file)}
            currentFile={formData.passportFile}
            accept=".pdf,.jpg,.jpeg,.png"
            maxSize={5}
          />
        </div>

        <div className="border rounded-lg p-4 dark:border-gray-600">
          <div className="flex items-center space-x-3 mb-4">
            <Checkbox
              id="addressProof"
              checked={formData.hasAddressProof}
              onCheckedChange={(checked) => handleInputChange('hasAddressProof', checked)}
            />
            <div className="flex-1">
              <Label htmlFor="addressProof" className="font-medium dark:text-white">Justificatif de domicile *</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Facture de moins de 3 mois (électricité, eau, téléphone)
              </p>
            </div>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>
          
          <FileUpload
            onFileSelect={(file) => handleInputChange('addressProofFile', file)}
            currentFile={formData.addressProofFile}
            accept=".pdf,.jpg,.jpeg,.png"
            maxSize={5}
          />
        </div>

        <div className="border rounded-lg p-4 dark:border-gray-600">
          <div className="flex items-center space-x-3 mb-4">
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
          
          <FileUpload
            onFileSelect={(file) => handleInputChange('businessPlanFile', file)}
            currentFile={formData.businessPlanFile}
            accept=".pdf,.doc,.docx"
            maxSize={10}
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/30 dark:border-blue-700">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Formats acceptés</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              PDF, JPG, PNG (max 5MB) | Documents Word (max 10MB pour le plan d'affaires)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsStep;
