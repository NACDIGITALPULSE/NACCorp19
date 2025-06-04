
import { Separator } from '@/components/ui/separator';

interface FormData {
  needMailbox: boolean;
  needAddress: boolean;
  needPhone: boolean;
}

interface PaymentStepProps {
  formData: FormData;
  calculateTotal: () => number;
}

const PaymentStep = ({ formData, calculateTotal }: PaymentStepProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 dark:bg-green-900/30 dark:border-green-700">
        <h3 className="font-semibold text-green-900 dark:text-green-300 mb-4">Récapitulatif de votre commande</h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="dark:text-green-200">Création entreprise offshore:</span>
            <span className="font-medium dark:text-green-100">150,000 FCFA</span>
          </div>
          {formData.needMailbox && (
            <div className="flex justify-between">
              <span className="dark:text-green-200">Boîte postale:</span>
              <span className="font-medium dark:text-green-100">25,000 FCFA</span>
            </div>
          )}
          {formData.needAddress && (
            <div className="flex justify-between">
              <span className="dark:text-green-200">Adresse physique:</span>
              <span className="font-medium dark:text-green-100">30,000 FCFA</span>
            </div>
          )}
          {formData.needPhone && (
            <div className="flex justify-between">
              <span className="dark:text-green-200">Numéro local:</span>
              <span className="font-medium dark:text-green-100">20,000 FCFA</span>
            </div>
          )}
          <Separator className="dark:border-green-600" />
          <div className="flex justify-between text-lg font-bold">
            <span className="dark:text-green-100">Total TTC:</span>
            <span className="dark:text-green-100">{calculateTotal().toLocaleString()} FCFA</span>
          </div>
        </div>

        <p className="text-sm text-green-800 dark:text-green-200">
          Le paiement sera demandé après validation de votre dossier par notre équipe.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/30 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Prochaines étapes</h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Validation de votre demande sous 24-48h</li>
          <li>• Envoi de la facture pro forma</li>
          <li>• Traitement de votre dossier (5-10 jours)</li>
          <li>• Livraison des documents officiels</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentStep;
