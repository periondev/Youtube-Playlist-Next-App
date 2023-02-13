import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent='center'
    alignItems='center'
    height='65vh'
    bgGradient='linear(to-t, heroGradientStart, heroGradientEnd)'
    bgClip='text'
  >
    <Heading fontSize='6vw'>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'My Youtube Collection',
};
