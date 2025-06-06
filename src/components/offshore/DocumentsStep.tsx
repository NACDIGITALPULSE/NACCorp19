
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FileText, AlertCircle, Upload, X, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File[]}>({
    passport: [],
    addressProof: [],
    businessPlan: []
  });

  const handleFileUpload = (docType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadedFiles(prev => ({
        ...prev,
        [docType]: [...prev[docType], ...files]
      }));
      
      toast({
        title: "Document ajouté",
        description: `${files.length} fichier(s) ajouté(s) avec succès.`,
      });
    }
  };

  const removeFile = (docType: string, fileIndex: number) => {
    setUploadedFiles(prev => ({
      ...prev,
      [docType]: prev[docType].filter((_, index) => index !== fileIndex)
    }));
    
    toast({
      title: "Document supprimé",
      description: "Le fichier a été retiré de votre dossier.",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const DocumentUploadSection = ({ 
    id, 
    title, 
    description, 
    checked, 
    onCheckedChange, 
    docType 
  }: {
    id: string;
    title: string;
    description: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    docType: string;
  }) => (
    <div className="flex flex-col space-y-3 p-4 border rounded-lg dark:border-gray-600">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        <div className="flex-1">
          <Label htmlFor={id} className="font-medium dark:text-white">{title}</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <FileText className="w-5 h-5 text-gray-400" />
      </div>
      
      {/* Zone d'upload */}
      <div className="mt-3">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-niger-orange transition-colors">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Glissez vos fichiers ici ou cliquez pour parcourir
          </p>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={(e) => handleFileUpload(docType, e)}
            className="hidden"
            id={`upload-${docType}`}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => document.getElementById(`upload-${docType}`)?.click()}
          >
            Choisir des fichiers
          </Button>
          <p className="text-xs text-gray-500 mt-1">
            PDF, JPG, PNG, DOC (max 10MB par fichier)
          </p>
        </div>
        
        {/* Liste des fichiers uploadés */}
        {uploadedFiles[docType].length > 0 && (
          <div className="mt-3 space-y-2">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Fichiers ajoutés ({uploadedFiles[docType].length})
            </h4>
            {uploadedFiles[docType].map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded dark:bg-green-900/20 dark:border-green-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">
                      {file.name}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(docType, index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 dark:bg-yellow-900/30 dark:border-yellow-700">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">Documents requis</h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Vous pouvez dès maintenant joindre vos documents. Ils seront vérifiés après validation de votre demande.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <DocumentUploadSection
          id="passport"
          title="Copie du passeport"
          description="Passeport en cours de validité du dirigeant principal"
          checked={formData.hasPassport}
          onCheckedChange={(checked) => handleInputChange('hasPassport', checked)}
          docType="passport"
        />

        <DocumentUploadSection
          id="addressProof"
          title="Justificatif de domicile"
          description="Facture de moins de 3 mois (électricité, eau, téléphone)"
          checked={formData.hasAddressProof}
          onCheckedChange={(checked) => handleInputChange('hasAddressProof', checked)}
          docType="addressProof"
        />

        <DocumentUploadSection
          id="businessPlan"
          title="Plan d'affaires (optionnel)"
          description="Description détaillée de votre projet d'entreprise"
          checked={formData.hasBusinessPlan}
          onCheckedChange={(checked) => handleInputChange('hasBusinessPlan', checked)}
          docType="businessPlan"
        />
      </div>

      {/* Récapitulatif des documents */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/20 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Récapitulatif des documents
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p>Total des fichiers joints : {Object.values(uploadedFiles).flat().length}</p>
          <p>Taille totale : {formatFileSize(Object.values(uploadedFiles).flat().reduce((acc, file) => acc + file.size, 0))}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentsStep;
