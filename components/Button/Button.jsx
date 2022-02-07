import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children, variant = 'solid', ...props }) => {
  return (
    <ChakraButton
      bg={variant === 'solid' ? 'primary.100' : ''}
      style={{
        cursor: 'pointer',
        color: variant === 'solid' && 'white',
      }}
      variant={variant}
      _hover={
        variant !== 'solid' && {
          backgroundColor: 'primary.100',
          transition: 'background-color .3s ease-in-out',
        }
      }
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
