type CurrencyCode = 'EUR' | 'USD';

export const useFormattedCurrency = () => {
  const formatCurrency = (amount: number, currency: CurrencyCode): string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    
    return formatter.format(amount);
  };
  
  return { formatCurrency };
}; 