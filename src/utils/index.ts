import { ConversionRecord } from "../types";
import { MAX_PERCENT_DIFFERENCE } from "../types/constants";


/**
 * Check if manual rate is too different from real rate
 * @param realRate The current real exchange rate
 * @param manualRate The manually set exchange rate
 * @returns Whether the manual rate should be reset (true) or kept (false)
 */
export const shouldResetManualRate = (realRate: number, manualRate: number | null): boolean => {
    if (manualRate === null) return false;
    
    const percentDifference = Math.abs((realRate - manualRate) / manualRate) * 100;
    return percentDifference > MAX_PERCENT_DIFFERENCE;
  };
  
  /**
   * Convert an amount between EUR and USD
   * @param amount The amount to convert
   * @param rate The exchange rate to use
   * @param isEurToUsd Whether the conversion is from EUR to USD (true) or USD to EUR (false)
   * @returns The converted amount
   */
  export const convertAmount = (amount: number, rate: number, isEurToUsd: boolean): number => {
    if (isEurToUsd) {
      // EUR to USD
      return parseFloat((amount * rate).toFixed(2));
    } else {
      // USD to EUR
      return parseFloat((amount / rate).toFixed(2));
    }
  };
  
  /**
   * Create a new conversion history record
   * @param currentRate The current real exchange rate
   * @param manualRate The manually set exchange rate (or null)
   * @param inputValue The input amount
   * @param outputValue The converted output amount
   * @param isEurToUsd Whether the conversion is from EUR to USD (true) or USD to EUR (false)
   * @returns A new conversion record
   */
  export const createConversionRecord = (
    currentRate: number,
    manualRate: number | null,
    inputValue: number,
    outputValue: number,
    isEurToUsd: boolean
  ): ConversionRecord => {
    return {
      id: Date.now().toString(),
      timestamp: Date.now(),
      realRate: currentRate,
      manualRate: manualRate,
      inputValue,
      inputCurrency: isEurToUsd ? 'EUR' : 'USD',
      outputValue,
      outputCurrency: isEurToUsd ? 'USD' : 'EUR',
    };
  };
  