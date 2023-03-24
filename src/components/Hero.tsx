import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import Head from 'next/head';
export const Hero = ({ title }: { title: string }) => (
  <Box>
    <Head>
      <title>My Youtube Collection</title>
      <meta name='discription' content='A YouTube playlist with video player' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Flex
      justify='center'
      align='center'
      height='26vh'
      bgGradient='linear(to-b, heroGradientStart, heroGradientEnd)'
      bgClip='text'
      mt={10}
    >
      <Box mr={3} boxSize='6vw'>
        <Image src='/android-chrome-192x192.png' />
      </Box>
      <Heading fontFamily='hero' fontSize='6vw'>
        {title}
      </Heading>
    </Flex>
  </Box>
);

Hero.defaultProps = {
  title: 'My Youtube Collection',
};
