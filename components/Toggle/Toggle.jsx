import { Switch, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Switch size='md' onChange={() => toggleColorMode()} />;
};

export default Toggle;
