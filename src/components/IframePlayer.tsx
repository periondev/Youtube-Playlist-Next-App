import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AspectRatio, Box, Center, Flex } from '@chakra-ui/react';
type Props = {
  id: string;
};
const IframePlayer = (playerProps: Props) => {
  const { id } = playerProps;
  const src = `https://www.youtube.com/embed/${id}?enablejsapi=1`;
  return (
    <iframe
      title='current video'
      src={src}
      width='480px'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; fullscreen'
    />
  );
};

export { IframePlayer };
