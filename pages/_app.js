import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
      initialColorMode: 'dark',
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
