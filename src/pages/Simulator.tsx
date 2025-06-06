
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calculator, FileText, Building, Palette, Globe, BarChart3, TrendingUp, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Simulator = () => {
  const [simulationType, setSimulationType] = useState('service');
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('XOF');
  const [toCurrency, setToCurrency] = useState('USD');
  const [serviceType, setServiceType] = useState('');
  const [results, setResults] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  // Taux de change en temps réel (simulation - en production, utiliser une API comme CoinGecko ou ExchangeRate-API)
  const currencies = {
    'XOF': { name: 'Franc CFA', symbol: 'FCFA', rate: 1 },
    'USD': { name: 'Dollar Américain', symbol: '$', rate: 0.0016 },
    'EUR': { name: 'Euro', symbol: '€', rate: 0.0015 },
    'GBP': { name: 'Livre Sterling', symbol: '£', rate: 0.0013 },
    'BTC': { name: 'Bitcoin', symbol: '₿', rate: 0.000000037 },
    'ETH': { name: 'Ethereum', symbol: 'Ξ', rate: 0.0000006 },
    'BNB': { name: 'Binance Coin', symbol: 'BNB', rate: 0.0000027 },
    'ADA': { name: 'Cardano', symbol: 'ADA', rate: 0.0021 },
    'DOT': { name: 'Polkadot', symbol: 'DOT', rate: 0.00024 },
    'NGN': { name: 'Naira Nigérian', symbol: '₦', rate: 1.31 },
    'GHS': { name: 'Cedi Ghanéen', symbol: 'GH₵', rate: 0.019 },
    'MAD': { name: 'Dirham Marocain', symbol: 'DH', rate: 0.016 },
    'CAD': { name: 'Dollar Canadien', symbol: 'C$', rate: 0.0022 },
    'CHF': { name: 'Franc Suisse', symbol: 'CHF', rate: 0.0015 },
    'JPY': { name: 'Yen Japonais', symbol: '¥', rate: 0.24 }
  };

  // Service prices
  const servicePrices = {
    'nif-rccm': { base: 50000, description: 'Création NIF & RCCM' },
    'logo': { base: 75000, description: 'Création de logo professionnel' },
    'website-vitrine': { base: 150000, description: 'Site web vitrine' },
    'website-ecommerce': { base: 300000, description: 'Site web e-commerce' },
    'declaration-fiscale': { base: 25000, description: 'Déclaration fiscale' },
    'comptabilite': { base: 50000, description: 'Suivi comptable mensuel' },
    'visibilite': { base: 100000, description: 'Pack visibilité en ligne' },
    'email-professionnel': { base: 4500, description: 'Email professionnel (par mois)' },
    'offshore': { base: 150000, description: 'Création entreprise offshore' },
    'charte-graphique': { base: 125000, description: 'Charte graphique complète' }
  };

  // Mise à jour des taux de change (simulation)
  useEffect(() => {
    const updateRates = () => {
      const variation = () => (Math.random() - 0.5) * 0.02; // Variation de ±1%
      
      setExchangeRates(prev => {
        const newRates = { ...currencies };
        Object.keys(newRates).forEach(key => {
          if (key !== 'XOF') {
            newRates[key].rate = currencies[key].rate * (1 + variation());
          }
        });
        return newRates;
      });
    };

    updateRates();
    const interval = setInterval(updateRates, 30000); // Mise à jour toutes les 30 secondes

    return () => clearInterval(interval);
  }, []);

  const convertCurrency = (amount: number, from: string, to: string) => {
    const currentRates = Object.keys(exchangeRates).length > 0 ? exchangeRates : currencies;
    
    if (from === to) return amount;
    
    // Convertir vers XOF d'abord
    const amountInXOF = from === 'XOF' ? amount : amount / currentRates[from].rate;
    
    // Puis convertir vers la devise cible
    const convertedAmount = to === 'XOF' ? amountInXOF : amountInXOF * currentRates[to].rate;
    
    return convertedAmount;
  };

  const calculateCurrencyConversion = () => {
    const baseAmount = parseFloat(amount);
    if (!baseAmount || baseAmount <= 0) return;

    const convertedAmount = convertCurrency(baseAmount, fromCurrency, toCurrency);
    
    setResults({
      type: 'currency',
      originalAmount: baseAmount,
      convertedAmount: convertedAmount,
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      exchangeRate: currencies[toCurrency].rate / currencies[fromCurrency].rate
    });
  };

  const calculateServiceCost = () => {
    if (!serviceType) return;

    const service = servicePrices[serviceType];
    const basePrice = service.base;

    setResults({
      type: 'service',
      service: service.description,
      basePrice: basePrice,
      priceUSD: convertCurrency(basePrice, 'XOF', 'USD'),
      priceEUR: convertCurrency(basePrice, 'XOF', 'EUR')
    });
  };

  const formatCurrency = (amount: number, currencyCode: string) => {
    const currency = currencies[currencyCode];
    
    if (currencyCode === 'BTC' || currencyCode === 'ETH') {
      return `${amount.toFixed(8)} ${currency.symbol}`;
    } else if (currencyCode === 'XOF') {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0
      }).format(amount);
    } else {
      return `${amount.toFixed(2)} ${currency.symbol}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Simulateur de Coûts & Devises
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Calculez vos coûts de services et convertissez les devises du monde entier en temps réel
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Simulation Type Selector */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Type de simulation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant={simulationType === 'service' ? 'default' : 'outline'}
                  className={`w-full justify-start ${
                    simulationType === 'service' 
                      ? 'bg-purple-600 text-white' 
                      : 'hover:bg-purple-50'
                  }`}
                  onClick={() => setSimulationType('service')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Devis Services
                </Button>
                <Button
                  variant={simulationType === 'currency' ? 'default' : 'outline'}
                  className={`w-full justify-start ${
                    simulationType === 'currency' 
                      ? 'bg-purple-600 text-white' 
                      : 'hover:bg-purple-50'
                  }`}
                  onClick={() => setSimulationType('currency')}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Convertisseur Devises
                </Button>
              </CardContent>
            </Card>

            {/* Taux de change en temps réel */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Taux en temps réel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>1 USD =</span>
                  <span className="font-semibold">{formatCurrency(1 / currencies.USD.rate, 'XOF')}</span>
                </div>
                <div className="flex justify-between">
                  <span>1 EUR =</span>
                  <span className="font-semibold">{formatCurrency(1 / currencies.EUR.rate, 'XOF')}</span>
                </div>
                <div className="flex justify-between">
                  <span>1 BTC =</span>
                  <span className="font-semibold">{formatCurrency(1 / currencies.BTC.rate, 'XOF')}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Simulator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {simulationType === 'service' ? (
                    <>
                      <FileText className="w-5 h-5 mr-2" />
                      Simulateur de Devis
                    </>
                  ) : (
                    <>
                      <DollarSign className="w-5 h-5 mr-2" />
                      Convertisseur de Devises
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {simulationType === 'service' ? (
                  // Service Cost Calculator
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service">Type de service</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nif-rccm">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-2" />
                              NIF & RCCM - {formatCurrency(servicePrices['nif-rccm'].base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="logo">
                            <div className="flex items-center">
                              <Palette className="w-4 h-4 mr-2" />
                              Logo professionnel - {formatCurrency(servicePrices.logo.base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="website-vitrine">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Site vitrine - {formatCurrency(servicePrices['website-vitrine'].base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="website-ecommerce">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Site e-commerce - {formatCurrency(servicePrices['website-ecommerce'].base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="email-professionnel">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2" />
                              Email professionnel - {formatCurrency(servicePrices['email-professionnel'].base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="offshore">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Services offshore - {formatCurrency(servicePrices.offshore.base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="declaration-fiscale">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2" />
                              Déclaration fiscale - {formatCurrency(servicePrices['declaration-fiscale'].base, 'XOF')}
                            </div>
                          </SelectItem>
                          <SelectItem value="comptabilite">
                            <div className="flex items-center">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Comptabilité - {formatCurrency(servicePrices.comptabilite.base, 'XOF')}
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      onClick={calculateServiceCost}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={!serviceType}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Calculer le devis
                    </Button>
                  </div>
                ) : (
                  // Currency Converter
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Montant à convertir</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Entrez le montant"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fromCurrency">De</Label>
                        <Select value={fromCurrency} onValueChange={setFromCurrency}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(currencies).map(([code, currency]) => (
                              <SelectItem key={code} value={code}>
                                {code} - {currency.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="toCurrency">Vers</Label>
                        <Select value={toCurrency} onValueChange={setToCurrency}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(currencies).map(([code, currency]) => (
                              <SelectItem key={code} value={code}>
                                {code} - {currency.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={calculateCurrencyConversion}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={!amount}
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Convertir
                    </Button>
                  </div>
                )}

                {/* Results */}
                {results && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">
                      Résultats du calcul
                    </h3>
                    
                    {results.type === 'service' ? (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-semibold">{results.service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prix en FCFA:</span>
                          <span className="font-semibold">{formatCurrency(results.basePrice, 'XOF')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prix en USD:</span>
                          <span className="font-semibold text-green-600">{formatCurrency(results.priceUSD, 'USD')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prix en EUR:</span>
                          <span className="font-semibold text-blue-600">{formatCurrency(results.priceEUR, 'EUR')}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Montant original:</span>
                          <span className="font-semibold">{formatCurrency(results.originalAmount, results.fromCurrency)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taux de change:</span>
                          <span className="font-semibold text-gray-600">1 {results.fromCurrency} = {results.exchangeRate.toFixed(6)} {results.toCurrency}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span className="font-semibold">Montant converti:</span>
                          <span className="font-bold text-purple-800">{formatCurrency(results.convertedAmount, results.toCurrency)}</span>
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex gap-4">
                      <Button variant="outline" className="flex-1">
                        Imprimer le devis
                      </Button>
                      <Button className="flex-1 bg-niger-orange hover:bg-niger-orange-dark">
                        Commander ce service
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Crypto prices */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Cours des Cryptomonnaies (FCFA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-orange-600 mb-2">Bitcoin (BTC)</h4>
                    <div className="text-lg font-bold">{formatCurrency(1 / currencies.BTC.rate, 'XOF')}</div>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-blue-600 mb-2">Ethereum (ETH)</h4>
                    <div className="text-lg font-bold">{formatCurrency(1 / currencies.ETH.rate, 'XOF')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Simulator;
