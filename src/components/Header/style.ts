import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: "80px",
  padding: theme.spacing(0, 2),
  marginBottom: theme.spacing(2),
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});