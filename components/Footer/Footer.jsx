import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import Logo from '../Logo/Logo';
import NavLink from '../Nav/NavLink/NavLink';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  faFacebookF,
  faReddit,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appstore from '../../public/appstore.png';

const Footer = () => {
  return (
    <Box py={20} bg='gray.700' as='footer'>
      <Container maxW='8xl' width='100%' px={16} mx='auto'>
        <Flex align='flex-start' justify='space-between'>
          <Logo />
          <VStack align='flex-start'>
            <CustomFooterLink href='/'>Home</CustomFooterLink>
            <CustomFooterLink href='/'>Games</CustomFooterLink>
            <CustomFooterLink href='/'>PRO</CustomFooterLink>
          </VStack>
          <VStack align='flex-start'>
            <CustomFooterLink href='/'>Knowledgebase</CustomFooterLink>
            <CustomFooterLink href='/'>Account Support</CustomFooterLink>
            <CustomFooterLink href='/'>Product Support</CustomFooterLink>
          </VStack>
          <VStack align='flex-start'>
            <CustomFooterLink href='/'>Sign In</CustomFooterLink>
            <CustomFooterLink href='/'>Create Account</CustomFooterLink>
          </VStack>
          <VStack align='flex-start'>
            <Heading size='md' color='primary.100'>
              Stay in the loop.
            </Heading>
            <Flex gap={5}>
              <InputField placeholder='name@email.com' minW='300px' />
              <Button px={10}>Subscribe</Button>
            </Flex>
            <HStack>
              <Text color='white'>No Spam ever.</Text>
              <CustomTextLink href='/'>View our Privacy Policy</CustomTextLink>
            </HStack>
          </VStack>
        </Flex>
        <Flex justify='space-between' mt={10}>
          <HStack spacing={14}>
            <CustomTextLink href='/'>Site Map</CustomTextLink>
            <CustomTextLink href='/'>Trust Policies</CustomTextLink>
            <CustomTextLink href='/'>Copyright 2021 vig.io</CustomTextLink>
          </HStack>
          <HStack spacing={7}>
            <Image src={appstore} alt='appstore' width={125} height={42} />
            <FontAwesomeIcon size='2x' icon={faReddit} />
            <FontAwesomeIcon size='2x' icon={faTwitter} />
            <FontAwesomeIcon size='2x' icon={faLinkedinIn} />
            <FontAwesomeIcon size='2x' icon={faFacebookF} />
            <FontAwesomeIcon size='2x' icon={faInstagram} />
            <FontAwesomeIcon size='2x' icon={faYoutube} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

const CustomFooterLink = ({ href, children, ...props }) => {
  return (
    <NavLink
      href={href}
      style={{
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: 'white',
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const CustomTextLink = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <ChakraLink {...props} color='gray.500'>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
