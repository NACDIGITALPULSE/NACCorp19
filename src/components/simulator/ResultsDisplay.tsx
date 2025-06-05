
import { CalculationResults, formatCurrency } from '@/utils/simulatorCalculations';

interface ResultsDisplayProps {
  results: CalculationResults;
}

const ResultsDisplay = ({ results }: ResultsDisplayProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Estimation des charges annuelles</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">Impôt sur les sociétés (25%)</div>
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {formatCurrency(results.impotSocietes)}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">Patente</div>
          <div className="text-xl font-bold text-green-600 dark:text-green-400">
            {formatCurrency(results.patente)}
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">Taxe professionnelle</div>
          <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
            {formatCurrency(results.taxeProfessionnelle)}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">Charges sociales</div>
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {formatCurrency(results.charges)}
          </div>
        </div>
      </div>

      <div className="border-t pt-4 mt-6 dark:border-gray-600">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">Total charges annuelles</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {formatCurrency(results.total)}
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">Résultat net estimé</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(results.netRevenue)}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-6">
        <div className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>Note:</strong> Ces calculs sont indicatifs et basés sur les taux standards. 
          Pour un calcul précis, consultez un expert-comptable ou contactez NACCORP.
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
