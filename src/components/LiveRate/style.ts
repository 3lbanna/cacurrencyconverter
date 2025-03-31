import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const RateContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(0, 0, 0, 0.02)',
    border: `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'}`,
  }
})); 