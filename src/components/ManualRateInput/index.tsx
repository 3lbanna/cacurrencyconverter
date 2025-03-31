import React from 'react';
import { Typography, Box, Paper, InputAdornment } from '@mui/material';
import { useExchangeRate } from '../../context/ExchangeRateContext';
import { useInputHandler } from '../../hooks/useInputHandler';
import { 
  RateInputContainer, 
  StyledTextField, 
  ResetButton, 
  SetRateButton,
  FlagContainer,
  FlagImage
} from './style';

// Flag image URLs
const EURO_FLAG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png';
const USD_FLAG_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png';
const MAX_PERCENT_DIFFERENCE = parseFloat(import.meta.env.VITE_MAX_PERCENT_DIFFERENCE || '2');

function ManualRateInput(){
  const { currentRate, manualRate, setManualRate } = useExchangeRate();
  const inputHandler = useInputHandler(manualRate ? manualRate.toString() : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputHandler.value) {
      const rate = parseFloat(inputHandler.value);
      if (!isNaN(rate) && rate > 0) {
        setManualRate(rate);
      }
    }
  };

  const handleReset = () => {
    setManualRate(null);
    inputHandler.reset();
  };

  return (
    <RateInputContainer>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Custom Exchange Rate
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <StyledTextField
              fullWidth
              placeholder="Set custom EUR to USD rate"
              variant="outlined"
              value={inputHandler.value}
              onChange={inputHandler.handleChange}
              error={!!inputHandler.error}
              helperText={inputHandler.error || 'Current rate: ' + currentRate.toFixed(4)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlagContainer>
                      <FlagImage 
                        src={EURO_FLAG_URL} 
                        alt="Euro flag"
                      />
                    </FlagContainer>
                    <Typography variant="body2" sx={{ mx: 0.5 }}>→</Typography>
                    <FlagContainer>
                      <FlagImage 
                        src={USD_FLAG_URL} 
                        alt="US Dollar flag"
                      />
                    </FlagContainer>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ResetButton
              variant="outlined"
              color="success"
              onClick={handleReset}
              disabled={!manualRate}
            >
              Reset to Real Rate
            </ResetButton>
            
            <SetRateButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={!inputHandler.value || !!inputHandler.error}
            >
              Set Rate
            </SetRateButton>
          </Box>
        </form>

        {manualRate && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="lightgreen">
              Note: If the real rate differs by more than {MAX_PERCENT_DIFFERENCE}% from your custom rate,
              it will automatically reset to the real rate.
            </Typography>
          </Box>
        )}
      </Paper>
    </RateInputContainer>
  );
}; 

export default ManualRateInput;