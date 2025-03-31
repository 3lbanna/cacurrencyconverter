import { FLUCTUATION_RANGE } from '../types/constants';
/**
 * Generate a random exchange rate fluctuation (Should be replaced by a real API)
 * @param currentRate The current exchange rate
 * @returns The new exchange rate after fluctuation
 */
export const getUpdatedExchangeRate = (currentRate: number): number => {
  // Random fluctuation between -FLUCTUATION_RANGE/2 and +FLUCTUATION_RANGE/2
  const fluctuation = (Math.random() - 0.5) * FLUCTUATION_RANGE;
  return parseFloat((currentRate + fluctuation).toFixed(4));
};