
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  firstName: string;
  lastName: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
}

interface ManagerInfoStepProps {
  formData: FormData;
  handleInputChange: (field: string, value: any) => void;
}

const ManagerInfoStep = ({ formData, handleInputChange }: ManagerInfoStepProps) => {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="dark:text-gray-200">Prénom *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <Label htmlFor="lastName" className="dark:text-gray-200">Nom *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="nationality" className="dark:text-gray-200">Nationalité *</Label>
        <Input
          id="nationality"
          value={formData.nationality}
          onChange={(e) => handleInputChange('nationality', e.target.value)}
          placeholder="Ex: Française"
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="dark:text-gray-200">Téléphone *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+33 6 12 34 56 78"
            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="address" className="dark:text-gray-200">Adresse complète *</Label>
        <Textarea
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Adresse complète dans votre pays de résidence..."
          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    </div>
  );
};

export default ManagerInfoStep;
