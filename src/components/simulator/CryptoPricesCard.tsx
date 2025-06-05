
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bitcoin } from 'lucide-react';
import { formatCrypto } from '@/utils/simulatorCalculations';

interface CryptoPricesCardProps {
  cryptoPrices: {
    bitcoin: number;
    ethereum: number;
    binancecoin: number;
  };
}

const CryptoPricesCard = ({ cryptoPrices }: CryptoPricesCardProps) => {
  return (
    <Card className="mb-6 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center dark:text-white">
          <Bitcoin className="w-5 h-5 mr-2" />
          Cours Crypto en Temps Réel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <div>
            <div className="font-semibold dark:text-white">Bitcoin</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">BTC</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-orange-600 dark:text-orange-400">
              {formatCrypto(cryptoPrices.bitcoin)}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">+2.5%</div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div>
            <div className="font-semibold dark:text-white">Ethereum</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">ETH</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-blue-600 dark:text-blue-400">
              {formatCrypto(cryptoPrices.ethereum)}
            </div>
            <div className="text-xs text-red-600 dark:text-red-400">-1.2%</div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div>
            <div className="font-semibold dark:text-white">Binance Coin</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">BNB</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-yellow-600 dark:text-yellow-400">
              {formatCrypto(cryptoPrices.binancecoin)}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">+0.8%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoPricesCard;
