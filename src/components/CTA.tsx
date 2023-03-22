import { Link as ChakraLink, Button, Flex } from '@chakra-ui/react';

export const CTA = () => (
  <Flex w='60vw' maxW='xl'>
    <Button
      as={ChakraLink}
      isExternal
      href='https://github.com/PeriYumYum/youtube-playlist-next-app.git'
      variant='outline'
      color='teal'
      border='2px'
      borderColor='teal'
      rounded='button'
      flexGrow={2}
      mx={2}
    >
      View Repo
    </Button>
  </Flex>
);
