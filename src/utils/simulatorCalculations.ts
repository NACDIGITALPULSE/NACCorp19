
export interface CalculationResults {
  impotSocietes: number;
  patente: number;
  taxeProfessionnelle: number;
  charges: number;
  total: number;
  netRevenue: number;
}

export const calculateResults = (revenue: string, employees: string): CalculationResults => {
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

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(amount);
};

export const formatCrypto = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};
