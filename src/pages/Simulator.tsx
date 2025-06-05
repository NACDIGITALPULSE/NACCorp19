
import { useState } from 'react';
import { Calculator } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CryptoPricesCard from '@/components/simulator/CryptoPricesCard';
import SimulatorForm from '@/components/simulator/SimulatorForm';
import ResultsDisplay from '@/components/simulator/ResultsDisplay';
import { useCryptoPrices } from '@/hooks/useCryptoPrices';
import { calculateResults } from '@/utils/simulatorCalculations';

const Simulator = () => {
  const [revenue, setRevenue] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [employees, setEmployees] = useState('');
  const cryptoPrices = useCryptoPrices();
  const results = calculateResults(revenue, employees);

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
            <div className="lg:col-span-1">
              <CryptoPricesCard cryptoPrices={cryptoPrices} />
            </div>

            <div className="lg:col-span-2">
              <SimulatorForm
                revenue={revenue}
                setRevenue={setRevenue}
                businessType={businessType}
                setBusinessType={setBusinessType}
                employees={employees}
                setEmployees={setEmployees}
              >
                {revenue && <ResultsDisplay results={results} />}
              </SimulatorForm>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Simulator;
