import { AspectRatio, Box } from '@chakra-ui/react';
type Props = {
  video_id: string;
  autoPlay: boolean;
};
const IframePlayer = (playerProps: Props) => {
  const { video_id, autoPlay } = playerProps;
  const video_src = `https://www.youtube.com/embed/${video_id}?enablejsapi=1&autoplay=${autoPlay}`;
  return (
    <Box w={['100%', 600, 640]} boxShadow='xl' my={10}>
      <AspectRatio maxW='100%' ratio={16 / 9}>
        <iframe
          title='current video'
          src={video_src}
          width='480px'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; fullscreen'
        />
      </AspectRatio>
    </Box>
  );
};

export { IframePlayer };
