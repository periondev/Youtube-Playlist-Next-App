import { Flex, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => (
  <Flex
    direction='column'
    alignItems='center'
    justifyContent='flex-start'
    bg='#BFC9CA'
    color='black'
    _dark={{
      bg: '#1B2631',
      color: 'white',
    }}
    transition='all 0.15s ease-out'
    {...props}
  />
);
