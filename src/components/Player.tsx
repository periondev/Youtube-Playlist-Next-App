import ReactPlayer from 'react-player/lazy';
import { Box, Flex, AspectRatio } from '@chakra-ui/react';
type Props = {
  id: string;
  playing: boolean;
};
const Player = (playerProps: Props) => {
  const { id, playing } = playerProps;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Box w={['100%', 560, 640]}>
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <ReactPlayer url={url} playing={playing} />
      </AspectRatio>
    </Box>
  );
};

export { Player };
