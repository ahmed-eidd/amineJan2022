import '../styles/globals.css';
import { mode } from '@chakra-ui/theme-tools';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { darkMode, lightMode } from '../chakraConfig/chakraConfig';
import { config } from '../node_modules/@fortawesome/fontawesome-svg-core';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const styles = {
    global: (pageProps) => ({
      body: {
        color: mode(lightMode.color, darkMode.color)(pageProps),
        bg: mode(lightMode.bg, darkMode.bg)(pageProps),
        overflow: 'hidden',
      },
    }),
  };

  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
      initialColorMode: 'dark',
    },
    colors: {
      primary: {
        100: '#726eff',
      },
      greentext: {
        100: '#15FFAB',
      },
      redtext: {
        100: '#FD4438',
      },
    },
    styles,
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
