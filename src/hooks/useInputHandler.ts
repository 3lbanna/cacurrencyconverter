import { useState, useCallback, ChangeEvent } from 'react';

export const useInputHandler = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // For currency inputs, only allow numbers and decimal points
    if (newValue === '' || /^[0-9]*\.?[0-9]*$/.test(newValue)) {
      setValue(newValue);
      setError(null);
    } else {
      setError('Please enter a valid number');
    }
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(null);
  }, [initialValue]);

  const set = useCallback((newValue: string) => {
    setValue(newValue);
    setError(null);
  }, []);

  return {
    value,
    error,
    handleChange,
    reset,
    set
  };
}; 