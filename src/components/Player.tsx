import ReactPlayer from 'react-player/lazy';
import { Box, Flex } from '@chakra-ui/react';
type Props = {
  id: string;
  playing: boolean;
};
const Player = (playerProps: Props) => {
  const { id, playing } = playerProps;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Flex>
      <ReactPlayer url={url} playing={playing} />
    </Flex>
  );
};

export { Player };
