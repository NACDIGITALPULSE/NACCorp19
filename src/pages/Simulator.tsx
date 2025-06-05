
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calculator, FileText, Building, Palette, Globe, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Simulator = () => {
  const [simulationType, setSimulationType] = useState('tva');
  const [amount, setAmount] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [results, setResults] = useState(null);

  // TVA rates in Niger
  const tvaRates = {
    standard: 19, // Taux normal
    reduced: 0,   // Exonéré
    services: 19  // Services
  };

  // Service prices
  const servicePrices = {
    'nif-rccm': { base: 50000, description: 'Création NIF & RCCM' },
    'logo': { base: 75000, description: 'Création de logo professionnel' },
    'website-vitrine': { base: 150000, description: 'Site web vitrine' },
    'website-ecommerce': { base: 300000, description: 'Site web e-commerce' },
    'declaration-fiscale': { base: 25000, description: 'Déclaration fiscale' },
    'comptabilite': { base: 50000, description: 'Suivi comptable mensuel' },
    'visibilite': { base: 100000, description: 'Pack visibilité en ligne' }
  };

  const calculateTVA = () => {
    const baseAmount = parseFloat(amount);
    if (!baseAmount || baseAmount <= 0) return;

    const tvaRate = tvaRates.standard;
    const tvaAmount = (baseAmount * tvaRate) / 100;
    const totalAmount = baseAmount + tvaAmount;

    setResults({
      type: 'tva',
      baseAmount: baseAmount,
      tvaRate: tvaRate,
      tvaAmount: tvaAmount,
      totalAmount: totalAmount
    });
  };

  const calculateServiceCost = () => {
    if (!serviceType) return;

    const service = servicePrices[serviceType];
    const basePrice = service.base;
    const tvaAmount = (basePrice * tvaRates.standard) / 100;
    const totalPrice = basePrice + tvaAmount;

    setResults({
      type: 'service',
      service: service.description,
      basePrice: basePrice,
      tvaRate: tvaRates.standard,
      tvaAmount: tvaAmount,
      totalPrice: totalPrice
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Simulateur de Coûts & TVA
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Calculez vos coûts de services et obligations TVA au Niger en temps réel
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
                  variant={simulationType === 'tva' ? 'default' : 'outline'}
                  className={`w-full justify-start ${
                    simulationType === 'tva' 
                      ? 'bg-purple-600 text-white' 
                      : 'hover:bg-purple-50'
                  }`}
                  onClick={() => setSimulationType('tva')}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calcul TVA
                </Button>
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
              </CardContent>
            </Card>

            {/* Information Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-sm">Informations TVA Niger</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Taux normal:</span>
                  <span className="font-semibold">19%</span>
                </div>
                <div className="flex justify-between">
                  <span>Services:</span>
                  <span className="font-semibold">19%</span>
                </div>
                <div className="flex justify-between">
                  <span>Exonérations:</span>
                  <span className="font-semibold">0%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Simulator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {simulationType === 'tva' ? (
                    <>
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculateur TVA
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5 mr-2" />
                      Simulateur de Devis
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {simulationType === 'tva' ? (
                  // TVA Calculator
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Montant HT (FCFA)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Entrez le montant hors taxe"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      onClick={calculateTVA}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={!amount}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculer la TVA
                    </Button>
                  </div>
                ) : (
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
                              NIF & RCCM - {formatCurrency(servicePrices['nif-rccm'].base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="logo">
                            <div className="flex items-center">
                              <Palette className="w-4 h-4 mr-2" />
                              Logo professionnel - {formatCurrency(servicePrices.logo.base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="website-vitrine">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Site vitrine - {formatCurrency(servicePrices['website-vitrine'].base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="website-ecommerce">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Site e-commerce - {formatCurrency(servicePrices['website-ecommerce'].base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="declaration-fiscale">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2" />
                              Déclaration fiscale - {formatCurrency(servicePrices['declaration-fiscale'].base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="comptabilite">
                            <div className="flex items-center">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Comptabilité - {formatCurrency(servicePrices.comptabilite.base)}
                            </div>
                          </SelectItem>
                          <SelectItem value="visibilite">
                            <div className="flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Visibilité en ligne - {formatCurrency(servicePrices.visibilite.base)}
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
                )}

                {/* Results */}
                {results && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-4 text-purple-800">
                      Résultats du calcul
                    </h3>
                    
                    {results.type === 'tva' ? (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Montant HT:</span>
                          <span className="font-semibold">{formatCurrency(results.baseAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TVA ({results.tvaRate}%):</span>
                          <span className="font-semibold text-purple-600">{formatCurrency(results.tvaAmount)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span className="font-semibold">Total TTC:</span>
                          <span className="font-bold text-purple-800">{formatCurrency(results.totalAmount)}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-semibold">{results.service}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prix HT:</span>
                          <span className="font-semibold">{formatCurrency(results.basePrice)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TVA ({results.tvaRate}%):</span>
                          <span className="font-semibold text-purple-600">{formatCurrency(results.tvaAmount)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span className="font-semibold">Prix total TTC:</span>
                          <span className="font-bold text-purple-800">{formatCurrency(results.totalPrice)}</span>
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

            {/* Service Packages */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Nos Packs Recommandés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-niger-orange mb-2">Pack Entrepreneur</h4>
                    <p className="text-sm text-gray-600 mb-3">NIF + RCCM + Logo</p>
                    <div className="text-lg font-bold">{formatCurrency(125000 * 1.19)}</div>
                    <div className="text-sm text-gray-500">TTC (TVA incluse)</div>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-niger-green mb-2">Pack Digital</h4>
                    <p className="text-sm text-gray-600 mb-3">Logo + Site vitrine + Visibilité</p>
                    <div className="text-lg font-bold">{formatCurrency(325000 * 1.19)}</div>
                    <div className="text-sm text-gray-500">TTC (TVA incluse)</div>
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
