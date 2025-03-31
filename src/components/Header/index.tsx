import React from 'react';
import { Typography } from '@mui/material';
import { HeaderContainer, LogoContainer } from './style';
import ThemeSwitcher from '../ThemeSwitcher';
import { BASE_URL } from '../../types/constants';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <LogoContainer>
          <img 
            src={`${BASE_URL}logo.png`} 
            alt="Credit Agricole Logo" 
            style={{ maxHeight: '50px', width: 'auto' }}
          />
          <Typography 
            variant="body2" 
            sx={{ 
              mt: 1, 
              fontSize: '0.8rem', 
              color: 'text.secondary', 
              textAlign: 'center' 
            }}
          >
            Currency Converter
          </Typography>
        </LogoContainer>
        <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;