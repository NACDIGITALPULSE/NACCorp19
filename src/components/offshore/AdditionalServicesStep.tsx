
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

interface FormData {
  needMailbox: boolean;
  needAddress: boolean;
  needPhone: boolean;
}

interface AdditionalServicesStepProps {
  formData: FormData;
  handleInputChange: (field: string, value: any) => void;
}

const AdditionalServicesStep = ({ formData, handleInputChange }: AdditionalServicesStepProps) => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="mailbox"
              checked={formData.needMailbox}
              onCheckedChange={(checked) => handleInputChange('needMailbox', checked)}
            />
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-blue-500 mr-2" />
                <Label htmlFor="mailbox" className="font-semibold dark:text-white">Boîte Postale</Label>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Adresse postale officielle au Niger pour recevoir votre courrier
              </p>
              <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+25,000 FCFA</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="address"
              checked={formData.needAddress}
              onCheckedChange={(checked) => handleInputChange('needAddress', checked)}
            />
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-green-500 mr-2" />
                <Label htmlFor="address" className="font-semibold dark:text-white">Adresse Physique</Label>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Adresse physique de domiciliation au Niger
              </p>
              <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+30,000 FCFA</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-2 hover:border-blue-300 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="phone"
              checked={formData.needPhone}
              onCheckedChange={(checked) => handleInputChange('needPhone', checked)}
            />
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-orange-500 mr-2" />
                <Label htmlFor="phone" className="font-semibold dark:text-white">Numéro Local</Label>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Numéro de téléphone local nigérien avec redirection
              </p>
              <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200">+20,000 FCFA</Badge>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/30 dark:border-blue-700">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">Services recommandés pour la diaspora</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Ces services facilitent la gestion de votre entreprise depuis l'étranger et assurent une présence officielle au Niger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServicesStep;
