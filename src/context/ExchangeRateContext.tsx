import { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import { 
  getUpdatedExchangeRate,
} from '../api/exchangeRateApi';
import { POLLING_INTERVAL } from '../types/constants';
import { ConversionRecord } from '../types';
import { 
  shouldResetManualRate,
  convertAmount,
  createConversionRecord,
} from '../utils';


type ExchangeRateContextType = {
  currentRate: number;
  manualRate: number | null;
  isEurToUsd: boolean;
  conversionHistory: ConversionRecord[];
  setManualRate: (rate: number | null) => void;
  toggleCurrencyDirection: () => void;
  convertCurrency: (amount: number) => number;
  addToHistory: (inputValue: number, outputValue: number) => void;
};

const ExchangeRateContext = createContext<ExchangeRateContextType | undefined>(undefined);

export const useExchangeRate = () => {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error('useExchangeRate must be used within an ExchangeRateProvider');
  }
  return context;
};

function ExchangeRateProvider({ children }: PropsWithChildren<{}>) {
  // Exchange rate state (EUR to USD)
  const [currentRate, setCurrentRate] = useState(1.1);
  const [manualRate, setManualRate] = useState<number | null>(null);
  const [isEurToUsd, setIsEurToUsd] = useState(true);
  const [conversionHistory, setConversionHistory] = useState<ConversionRecord[]>([]);

  // Simulates real-time exchange rate fluctuations using the API
  useEffect(() => {
    const interval = setInterval(() => {
      // Get updated rate from API
      const newRate = getUpdatedExchangeRate(currentRate);
      setCurrentRate(newRate);

      // Check if manual rate should be reset based on percentage difference
      if (shouldResetManualRate(newRate, manualRate)) {
        setManualRate(null);
      }
    }, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, [currentRate, manualRate]);

  // Toggle between EUR to USD and USD to EUR conversion
  const toggleCurrencyDirection = () => {
    setIsEurToUsd(prev => !prev);
  };

  // Convert currency based on current direction and rate
  const convertCurrency = (amount: number): number => {
    const effectiveRate = manualRate !== null ? manualRate : currentRate;
    return convertAmount(amount, effectiveRate, isEurToUsd);
  };

  // Add a new conversion to history
  const addToHistory = (inputValue: number, outputValue: number) => {
    const newRecord = createConversionRecord(
      currentRate,
      manualRate,
      inputValue,
      outputValue,
      isEurToUsd
    );

    setConversionHistory(prev => {
      const updated = [newRecord, ...prev].slice(0, 5); // Keep only last 5 conversions
      return updated;
    });
  };

  return (
    <ExchangeRateContext.Provider
      value={{
        currentRate,
        manualRate,
        isEurToUsd,
        conversionHistory,
        setManualRate,
        toggleCurrencyDirection,
        convertCurrency,
        addToHistory,
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
}; 

export default ExchangeRateProvider;