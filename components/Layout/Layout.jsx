import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <Container px='0' minH='100vh' maxW='100%'>
      <Nav />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
