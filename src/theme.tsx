import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

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
        default: '#9C9FD9',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
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
  fonts,
  breakpoints,
});

export default theme;
