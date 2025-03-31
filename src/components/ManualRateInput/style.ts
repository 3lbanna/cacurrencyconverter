import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';

export const RateInputContainer = styled(Box)(({ theme }) => ({
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(0, 0, 0, 0.04)',
    borderRadius: theme.shape.borderRadius,
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.2)' 
        : 'rgba(0, 0, 0, 0.15)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, -9px) scale(0.75)',
    background: theme.palette.mode === 'dark' 
      ? '#121212' 
      : '#f5f6fa',
    padding: '0 8px',
  },
}));

export const FlagContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginRight: '8px',
});

export const FlagImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const ResetButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const SetRateButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
})); 