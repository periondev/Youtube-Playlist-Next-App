import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
import { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Youtube Collection</title>
        <meta
          name='discription'
          content='Beautiful and minimal player as an abstraction of Youtube Playlist, 
          allowing users to play audiovisual content on the card intuitively.'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <GoogleAnalytics trackPageViews strategy='lazyOnload' />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
