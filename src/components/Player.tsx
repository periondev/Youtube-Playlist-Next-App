import ReactPlayer from 'react-player/lazy';
import { Box } from '@chakra-ui/react';
type Props = {
  id: string;
  playing: boolean;
};
const Player = (playerProps: Props) => {
  const { id, playing } = playerProps;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Box>
      <ReactPlayer url={url} playing={playing} width='100%' height='100%' />
    </Box>
  );
};

export { Player };
