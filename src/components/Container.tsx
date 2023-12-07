import { Flex, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => (
  <Flex
    id='container'
    direction='column'
    alignItems='center'
    justifyContent='flex-start'
    bg='#e4e0e1'
    color='black'
    _dark={{
      bg: '#181C1D',
      color: 'white',
    }}
    transition='all 0.15s ease-out'
    {...props}
  />
);
