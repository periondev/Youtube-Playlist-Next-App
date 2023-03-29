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
        <meta name='discription' content='A YouTube playlist with video player' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider theme={theme}>
        <GoogleAnalytics trackPageViews strategy='lazyOnload' />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
