import { Link as ChakraLink, Button } from '@chakra-ui/react';

import { Container } from './Container';

export const CTA = () => (
  <Container flexDirection='row' position='fixed' bottom={0} width='full' maxWidth='3xl' py={3}>
    <Button
      as={ChakraLink}
      isExternal
      href='https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui'
      variant='outline'
      colorScheme='purple'
      rounded='button'
      flexGrow={2}
      mx={2}
      width='full'
    >
      View Repo
    </Button>
  </Container>
);
