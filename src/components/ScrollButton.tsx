import React, { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showBottomBtn, setShowBottomBtn] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 900) {
      setShowTopBtn(true);
      setShowBottomBtn(false);
    } else {
      setShowTopBtn(false);
      setShowBottomBtn(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
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
      {showBottomBtn && (
        <IconButton
          position='fixed'
          bottom={4}
          right={4}
          icon={<FaArrowDown />}
          aria-label='Scroll to bottom'
          onClick={scrollToBottom}
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
