
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, DollarSign, Bitcoin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CalculationResults {
  impotSocietes: number;
  patente: number;
  taxeProfessionnelle: number;
  charges: number;
  total: number;
  netRevenue: number;
}

const Simulator = () => {
  const [revenue, setRevenue] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [employees, setEmployees] = useState('');
  const [cryptoPrices, setCryptoPrices] = useState({
    bitcoin: 0,
    ethereum: 0,
    binancecoin: 0
  });

  // Simulation de récupération des prix crypto (remplacez par une vraie API)
  useEffect(() => {
    const fetchCryptoPrices = async () => {
      // Simulation de prix (en production, utilisez l'API CoinGecko ou similaire)
      setCryptoPrices({
        bitcoin: 45000 + Math.random() * 5000,
        ethereum: 2800 + Math.random() * 500,
        binancecoin: 380 + Math.random() * 50
      });
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 60000); // Mise à jour toutes les minutes

    return () => clearInterval(interval);
  }, []);

  const calculateResults = (): CalculationResults => {
    const annualRevenue = parseFloat(revenue) || 0;
    
    // Calculs simplifiés pour le Niger
    const impotSocietes = annualRevenue * 0.25; // 25% pour les PME
    const patente = Math.min(annualRevenue * 0.002, 500000); // 0.2% plafonné à 500k
    const taxeProfessionnelle = annualRevenue * 0.015; // 1.5%
    const charges = parseFloat(employees) * 50000 * 12; // 50k par employé par mois

    const total = impotSocietes + patente + taxeProfessionnelle + charges;
    const netRevenue = annualRevenue - total;

    return {
      impotSocietes,
      patente,
      taxeProfessionnelle,
      charges,
      total,
      netRevenue
    };
  };

  const results = calculateResults();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatCrypto = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-niger-orange" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Simulateur Financier
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Calculez vos obligations fiscales et suivez les cours en temps réel
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Crypto Prices */}
            <div className="lg:col-span-1">
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
            </div>

            {/* Simulator */}
            <div className="lg:col-span-2">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Simulateur d'Obligations Fiscales</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Estimez vos charges fiscales annuelles au Niger
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="revenue" className="dark:text-white">Chiffre d'affaires annuel (FCFA)</Label>
                      <Input
                        id="revenue"
                        type="number"
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                        placeholder="Ex: 50000000"
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessType" className="dark:text-white">Type d'activité</Label>
                      <Select value={businessType} onValueChange={setBusinessType}>
                        <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="service">Services</SelectItem>
                          <SelectItem value="industrie">Industrie</SelectItem>
                          <SelectItem value="tech">Technologie</SelectItem>
                          <SelectItem value="transport">Transport</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="employees" className="dark:text-white">Nombre d'employés</Label>
                      <Input
                        id="employees"
                        type="number"
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        placeholder="Ex: 5"
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  </div>

                  {revenue && (
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
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Simulator;
