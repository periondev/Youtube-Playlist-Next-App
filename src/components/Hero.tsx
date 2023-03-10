import { Box, Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Box>
    <Flex
      justify='center'
      align='center'
      height='26vh'
      bgGradient='linear(to-t, heroGradientStart, heroGradientEnd)'
      bgClip='text'
      mt={10}
    >
      <Heading fontSize='6vw'>{title}</Heading>
    </Flex>
  </Box>
);

Hero.defaultProps = {
  title: 'My Youtube Collection',
};
