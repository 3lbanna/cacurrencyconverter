import { IconButton, Tooltip, useTheme as useMuiTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../context/ThemeContext';

function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton 
        onClick={toggleTheme} 
        color="inherit"
        aria-label={darkMode ? 'dark mode' : 'light mode'}
      >
        {darkMode ? (
          <Brightness7Icon sx={{ color: muiTheme.palette.common.white }} />
        ) : (
          <Brightness4Icon sx={{ color: muiTheme.palette.primary.main }} />
        )}
      </IconButton>
    </Tooltip>
  );
}; 

export default ThemeSwitcher;