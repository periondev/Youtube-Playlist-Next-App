import { Box, Flex, Heading, Image } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Box>
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
