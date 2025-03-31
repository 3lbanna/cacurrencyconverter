import { Typography, Paper } from '@mui/material';
import { useExchangeRate } from '../../context/ExchangeRateContext';
import { RateContainer } from './style';

function LiveRate(){
  const { currentRate, isEurToUsd } = useExchangeRate();
  
  return (
    <RateContainer>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Current Exchange Rate
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="primary">
          {isEurToUsd 
            ? `1 EUR = ${currentRate.toFixed(4)} USD` 
            : `1 USD = ${(1/currentRate).toFixed(4)} EUR`}
        </Typography>
      </Paper>
    </RateContainer>
  );
};

export default LiveRate;