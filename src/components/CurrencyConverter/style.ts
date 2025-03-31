import { styled } from '@mui/material/styles';
import { Card, CardContent, Box, TextField, Button, IconButton } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2, 0),
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
}));

export const GlassCard = styled(CardContent)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2),
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const SwitchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(2, 0),
}));

export const ConverterContainer = styled(Box)(({ theme }) => ({
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

export const ResultDisplay = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.03)' 
    : 'rgba(0, 0, 0, 0.01)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.05)'}`,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transform: 'scale(1.2)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.03)',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)',
  }
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
})); 