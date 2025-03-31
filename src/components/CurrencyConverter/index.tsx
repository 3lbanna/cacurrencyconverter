import React, { useEffect, useState } from 'react';
import { 
  Typography, 
  Box, 
  Paper,
  InputAdornment,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useExchangeRate } from '../../context/ExchangeRateContext';
import { useInputHandler } from '../../hooks/useInputHandler';
import { useFormattedCurrency } from '../../hooks/useFormattedCurrency';
import { 
  ConverterContainer, 
  StyledTextField, 
  ResultDisplay,
  StyledIconButton,
  SubmitButton,
  FlagContainer,
  FlagImage
} from './style';

// Flag image URLs
const EURO_FLAG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png';
const USD_FLAG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png';

function CurrencyConverter() {
  const { 
    currentRate, 
    isEurToUsd, 
    toggleCurrencyDirection, 
    convertCurrency,
    addToHistory 
  } = useExchangeRate();
  
  const { formatCurrency } = useFormattedCurrency();
  const inputHandler = useInputHandler();
  const [convertedValue, setConvertedValue] = useState(0);

  // Effect to handle conversion when input or rate changes
  useEffect(() => {
    if (inputHandler.value) {
      const inputAmount = parseFloat(inputHandler.value);
      if (!isNaN(inputAmount)) {
        const result = convertCurrency(inputAmount);
        setConvertedValue(result);
      } else {
        setConvertedValue(0);
      }
    } else {
      setConvertedValue(0);
    }
  }, [inputHandler.value, currentRate, isEurToUsd, convertCurrency]);

  // Handle currency direction switch
  const handleDirectionChange = () => {
    // Preserve value continuity by setting the previous output as the new input
    if (convertedValue > 0) {
      inputHandler.set(convertedValue.toString());
    }
    toggleCurrencyDirection();
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputHandler.value) {
      const inputAmount = parseFloat(inputHandler.value);
      if (!isNaN(inputAmount) && inputAmount > 0) {
        addToHistory(inputAmount, convertedValue);
      }
    }
  };

  return (
    <ConverterContainer>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Currency Converter
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: '42%' } }}>
              <StyledTextField
                fullWidth
                placeholder={`Enter amount in ${isEurToUsd ? 'EUR' : 'USD'}`}
                variant="outlined"
                value={inputHandler.value}
                onChange={inputHandler.handleChange}
                error={!!inputHandler.error}
                helperText={inputHandler.error}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlagContainer>
                        <FlagImage 
                          src={isEurToUsd ? EURO_FLAG_URL : USD_FLAG_URL} 
                          alt={isEurToUsd ? "Euro flag" : "US Dollar flag"}
                        />
                      </FlagContainer>
                      {isEurToUsd ? '€' : '$'}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '100%', md: '16%' } }}>
              <StyledIconButton 
                onClick={handleDirectionChange}
                color="primary"
              >
                <SwapHorizIcon />
              </StyledIconButton>
            </Box>
            
            <Box sx={{ width: { xs: '100%', md: '42%' } }}>
              <StyledTextField
                fullWidth
                placeholder={`Amount in ${isEurToUsd ? 'USD' : 'EUR'}`}
                variant="outlined"
                value={convertedValue.toString()}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlagContainer>
                        <FlagImage 
                          src={isEurToUsd ? USD_FLAG_URL : EURO_FLAG_URL} 
                          alt={isEurToUsd ? "US Dollar flag" : "Euro flag"}
                        />
                      </FlagContainer>
                      {isEurToUsd ? '$' : '€'}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <ResultDisplay>
              <Typography variant="body1">
                {convertedValue > 0 
                  ? `${formatCurrency(parseFloat(inputHandler.value) || 0, isEurToUsd ? 'EUR' : 'USD')} = ${formatCurrency(convertedValue, isEurToUsd ? 'USD' : 'EUR')}`
                  : 'Enter an amount to convert'
                }
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {isEurToUsd 
                  ? `1 EUR = ${currentRate.toFixed(4)} USD` 
                  : `1 USD = ${(1/currentRate).toFixed(4)} EUR`}
              </Typography>
            </ResultDisplay>
          </Box>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <SubmitButton
              type="submit"
              variant="text"
            >
              Save Conversion
            </SubmitButton>
          </Box>
        </form>
      </Paper>
    </ConverterContainer>
  );
}; 

export default CurrencyConverter;