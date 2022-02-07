import { Input } from '@chakra-ui/react';
import React from 'react';

const CURRENT_COLOR = 'current';

const InputField = ({ name, placeholder, value, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      {...props}
      variant='filled'
      _placeholder={{ color: CURRENT_COLOR }}
      color={CURRENT_COLOR}
    ></Input>
  );
};

export default InputField;
