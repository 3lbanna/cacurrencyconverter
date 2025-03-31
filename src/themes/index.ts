import { createTheme } from '@mui/material/styles';

// Shared theme properties
const sharedTheme = {
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    h1: { fontWeight: 500, fontSize: '2.2rem' },
    h2: { fontWeight: 500, fontSize: '1.8rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    h4: { fontWeight: 500, fontSize: '1.3rem' },
    h5: { fontWeight: 500, fontSize: '1.1rem' },
    h6: { fontWeight: 500, fontSize: '1rem' },
    body1: { fontSize: '0.95rem' },
    body2: { fontSize: '0.85rem' },
    caption: { fontSize: '0.75rem' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '0.95rem',
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#006B3C', // Credit Agricole dark green
      light: '#4CAF50', // Light green
      dark: '#00582F', // Darker green
    },
    secondary: {
      main: '#E30613', // Credit Agricole red
      light: '#FF5252',
      dark: '#C70000',
    },
    background: {
      default: '#f5f7fa',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#303030',
      secondary: '#666666',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...sharedTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50', // Light green
      light: '#81C784',
      dark: '#006B3C', // Credit Agricole dark green
    },
    secondary: {
      main: '#FF5252', // Lighter red
      light: '#FF8A80',
      dark: '#E30613', // Credit Agricole red
    },
    background: {
      default: '#1E1E1E',
      paper: 'rgba(40, 40, 40, 0.9)',
    },
    text: {
      primary: '#e6e6e6',
      secondary: '#b0b0b0',
    },
  },
}); 