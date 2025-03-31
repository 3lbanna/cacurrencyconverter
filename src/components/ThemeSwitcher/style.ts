import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const SwitcherContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1100,
})); 