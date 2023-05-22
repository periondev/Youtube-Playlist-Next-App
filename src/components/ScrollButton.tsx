import { IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const ScrollToTopBtn = () => {
  return (
    <IconButton
      position='fixed'
      bottom={4}
      right={4}
      icon={<FaArrowUp />}
      aria-label='Scroll to top'
      onClick={scrollToTop}
      isRound={true}
      opacity={0.7}
      bg='#bab1b3'
      _hover={{ bg: '#948589' }}
      _dark={{
        bg: '#353D40',
        _hover: { bg: '#536063' },
      }}
    />
  );
};
