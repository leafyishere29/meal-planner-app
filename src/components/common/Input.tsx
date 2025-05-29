import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  error?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  error,
  helperText,
  ...props
}) => {
  return (
    <TextField
      variant="outlined"
      error={error}
      helperText={helperText}
      fullWidth
      {...props}
    />
  );
}; 