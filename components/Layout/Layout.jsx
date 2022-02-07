import { Container, Grid } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  const gridStyle = {
    gridColumnGap: '16px',
    gridTemplateAreas: "'left right'",
    gridTemplateColumns: 'minmax(360px, 2fr) minmax(360px, 1fr)',
  };

  return (
    <Container px='0' minH='100vh' maxW='100%'>
      <Nav />
      <Header />
      <Grid style={gridStyle}>{children}</Grid>
      <Footer />
    </Container>
  );
};

export default Layout;
