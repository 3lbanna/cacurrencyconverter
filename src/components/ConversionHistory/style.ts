import { styled } from '@mui/material/styles';
import { Box, TableCell, TableRow } from '@mui/material';
import { motion } from 'framer-motion';

export const HistoryContainer = styled(Box)(({ theme }) => ({
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

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5),
}));

// Create a motion-enabled TableRow
const MotionTableRow = motion(TableRow);

export const StyledTableRow = styled(MotionTableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.03)' 
      : 'rgba(0, 0, 0, 0.01)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  transition: 'background-color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(0, 0, 0, 0.04)',
  },
})); 