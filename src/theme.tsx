import { extendTheme } from '@chakra-ui/react';
import '@fontsource/kumbh-sans';

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#266E72',
        _dark: '#AEC9CA',
      },
      heroGradientStart: {
        default: '#A3072D',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FB8A7A',
        _dark: '#fbec8f',
      },
    },
    //rounded border
    radii: {
      button: 'xl',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts: {
    hero: `"Kumbh Sans", sans-serif`,
  },
  breakpoints,
});

export default theme;
