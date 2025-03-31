import { Container, Box, CssBaseline, GlobalStyles } from '@mui/material';
import ThemeProvider from './context/ThemeContext';
import ExchangeRateProvider from './context/ExchangeRateContext';
import Header from './components/Header';
import LiveRate from './components/LiveRate';
import CurrencyConverter from './components/CurrencyConverter';
import ManualRateInput from './components/ManualRateInput';
import ConversionHistory from './components/ConversionHistory';
import "./App.css"


function App () {
  return (
    <ThemeProvider>
      <ExchangeRateProvider>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundImage: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #0F1F0F 0%, #1A2A1A 50%, #0F1F0F 100%)'
                : 'linear-gradient(135deg, #f5f7fa 0%, #e8f5ea 50%, #d5e8d8 100%)',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              margin: 0,
              padding: 0,
            },
          })}
        />
        
        
        <Container 
          maxWidth={false} 
          sx={{ 
            width: "100%",
            height: "calc(100vh - 0px)",
            py: 3, 
            px: { xs: 2, sm: 3, md: 4 }, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            overflowX: "hidden",
            overflowY: "auto",
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '6px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          <Box sx={{ 
            display: "flex",
            flexDirection: "column",
            width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
            rowGap: 2,
            py: 2, 
            }}>
            <Header />
            <LiveRate />
            <CurrencyConverter />
            <ManualRateInput />
            <ConversionHistory />
          </Box>
        </Container>
      </ExchangeRateProvider>
    </ThemeProvider>
  );
};

export default App;
