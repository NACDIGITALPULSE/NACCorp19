
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  companyName: string;
  businessType: string;
  activity: string;
  capital: string;
}

interface CompanyInfoStepProps {
  formData: FormData;
  handleInputChange: (field: string, value: any) => void;
}

const CompanyInfoStep = ({ formData, handleInputChange }: CompanyInfoStepProps) => {
  const businessTypes = [
    'SARL (Société à Responsabilité Limitée)',
    'SA (Société Anonyme)',
    'SAS (Société par Actions Simplifiée)',
    'Entreprise Individuelle',
    'Coopérative',
    'Association'
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="companyName" className="dark:text-gray-200">Nom de l'entreprise *</Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          placeholder="Ex: Ma Société SARL"
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <div>
        <Label htmlFor="businessType" className="dark:text-gray-200">Forme juridique *</Label>
        <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
          <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <SelectValue placeholder="Sélectionnez une forme juridique" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
            {businessTypes.map((type) => (
              <SelectItem key={type} value={type} className="dark:text-white dark:hover:bg-gray-600">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="activity" className="dark:text-gray-200">Activité principale *</Label>
        <Textarea
          id="activity"
          value={formData.activity}
          onChange={(e) => handleInputChange('activity', e.target.value)}
          placeholder="Décrivez l'activité principale de votre entreprise..."
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <div>
        <Label htmlFor="capital" className="dark:text-gray-200">Capital social (FCFA) *</Label>
        <Input
          id="capital"
          type="number"
          value={formData.capital}
          onChange={(e) => handleInputChange('capital', e.target.value)}
          placeholder="Ex: 1000000"
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    </div>
  );
};

export default CompanyInfoStep;
