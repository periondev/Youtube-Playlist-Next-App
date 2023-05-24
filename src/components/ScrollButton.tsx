import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 480) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showTopBtn && (
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
      )}
    </>
  );
};
