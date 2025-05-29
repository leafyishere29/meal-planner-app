import React from 'react';
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outlined';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  children,
  ...props 
}) => {
  const getMuiVariant = () => {
    switch (variant) {
      case 'primary':
        return 'contained';
      case 'secondary':
        return 'contained';
      case 'outlined':
        return 'outlined';
      default:
        return 'contained';
    }
  };

  return (
    <MuiButton
      variant={getMuiVariant()}
      color={variant === 'secondary' ? 'secondary' : 'primary'}
      {...props}
    >
      {children}
    </MuiButton>
  );
}; 