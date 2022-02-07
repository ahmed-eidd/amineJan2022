import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Toggle from '../components/Toggle/Toggle';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Box>
      <Toggle />
      <Heading>Hello!</Heading>
    </Box>
  );
}
