import { 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper 
} from '@mui/material';
import { useExchangeRate } from '../../context/ExchangeRateContext';
import { useFormattedCurrency } from '../../hooks/useFormattedCurrency';
import { HistoryContainer, StyledTableCell, StyledTableRow } from './style';

function ConversionHistory() {
  const { conversionHistory } = useExchangeRate();
  const { formatCurrency } = useFormattedCurrency();

  // If there's no history yet, display a message
  if (conversionHistory.length === 0) {
    return (
      <HistoryContainer>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Conversion History
          </Typography>
          <Typography variant="body1">
            Your conversion history will appear here.
          </Typography>
        </Paper>
      </HistoryContainer>
    );
  }

  return (
    <HistoryContainer>
      <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Conversion History
        </Typography>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Date & Time</StyledTableCell>
                <StyledTableCell>Conversion</StyledTableCell>
                <StyledTableCell>Real Rate</StyledTableCell>
                <StyledTableCell>Custom Rate</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {conversionHistory.map((record) => (
                <StyledTableRow 
                  key={record.id} 
                  whileHover={{ scale: 1.01 }}
                >
                  <TableCell>
                    {new Date(record.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(record.inputValue, record.inputCurrency)} = {formatCurrency(record.outputValue, record.outputCurrency)}
                  </TableCell>
                  <TableCell>
                    {record.realRate.toFixed(4)}
                  </TableCell>
                  <TableCell>
                    {record.manualRate !== null ? record.manualRate.toFixed(4) : '—'}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </HistoryContainer>
  );
}; 

export default ConversionHistory;