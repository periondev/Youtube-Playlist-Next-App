import { Box, Flex, Heading, Image } from '@chakra-ui/react';
export const Hero = ({ title }: { title: string }) => (
  <Box>
    <Flex
      justify='center'
      align='center'
      height='20vh'
      bgGradient='linear(to-b, heroGradientStart, heroGradientEnd)'
      bgClip='text'
      mt={10}
    >
      <Box mr={3} boxSize='6vw'>
        <Image title='logo' src='/android-chrome-192x192.png' />
      </Box>
      <Heading fontFamily='hero' as='h1' fontSize='6vw'>
        {title}
      </Heading>
    </Flex>
  </Box>
);

Hero.defaultProps = {
  title: 'My Youtube Collection',
};
