import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import NavLink from './NavLink/NavLink';
import NextLink from 'next/link';
import NavMenu from './NavMenu/NavMenu';
import Toggle from '../Toggle/Toggle';
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <Box as='nav' height='70px'>
      <Flex height='100%' justify='space-between' px='5' align='center'>
        <HStack spacing={12}>
          <Logo />
          <InputField placeholder='Search for a symbol'></InputField>
        </HStack>
        <HStack spacing={10}>
          <NavLink href='/'>Stocks</NavLink>
          <NavLink href='/'>Crypto</NavLink>
          <NavLink href='/'>Explore</NavLink>
          <NavLink href='/'>Games</NavLink>
          <NavLink href='/'>PRO</NavLink>
          <NavMenu />
        </HStack>
        <HStack>
          <NextLink href='/'>
            <Button as={ChakraLink} variant='ghost'>
              Log in
            </Button>
          </NextLink>
          <NextLink href='/'>
            <Button as={ChakraLink}>Create Account</Button>
          </NextLink>
          <Toggle />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
