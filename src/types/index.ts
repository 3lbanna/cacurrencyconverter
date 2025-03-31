

// Define types
export type ConversionRecord = {
    id: string;
    timestamp: number;
    realRate: number;
    manualRate: number | null;
    inputValue: number;
    inputCurrency: 'EUR' | 'USD';
    outputValue: number;
    outputCurrency: 'EUR' | 'USD';
  };