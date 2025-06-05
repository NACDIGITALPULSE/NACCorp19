
import { useState, useEffect } from 'react';

interface CryptoPrices {
  bitcoin: number;
  ethereum: number;
  binancecoin: number;
}

export const useCryptoPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>({
    bitcoin: 0,
    ethereum: 0,
    binancecoin: 0
  });

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

  return cryptoPrices;
};
