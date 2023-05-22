import { FaPlay } from 'react-icons/fa';
import { IframePlayer } from '../components/IframePlayer';
import { Text, Card, CardBody, CardFooter, AspectRatio, Button, Link } from '@chakra-ui/react';
import { Heading, SimpleGrid, Spacer, VStack, Box } from '@chakra-ui/layout';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { ScrollToTopBtn } from '../components/ScrollButton';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { Data } from '../lib/types';

/* Fetch Youtube API */
export const getStaticProps: GetStaticProps<{ data: Data[] }> = async (context) => {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const REQUEST_URL =
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}` ||
    'http://127.0.0.1';
  const response = await fetch(REQUEST_URL);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data.items },
    revalidate: 15,
  };
};

const scrollToTop = () => {
  window.scrollTo({ top: 70, behavior: 'smooth' });
};

const Index = ({ data }) => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  // const [playing, setPlaying] = useState(false);
  // <IframePlayer autoPlay={playing}>
  const ratio = 16 / 9;

  return (
    <Container>
      <Hero />
      <IframePlayer video_id={currentVideo.snippet.resourceId.videoId} />
      <Main>
        <SimpleGrid columns={[1, 2, 3]} spacingX={10} spacingY={14}>
          {data.map((video: Data) => (
            <Card
              key={video.id}
              borderRadius='1em'
              bg='#faf9f9'
              _dark={{
                bg: '#242A2B',
                color: 'white',
              }}
            >
              <CardBody p='0'>
                <AspectRatio ratio={ratio}>
                  <Image
                    title='thumb nail'
                    src={video.snippet.thumbnails.high.url || 'https://via.placeholder.com/300'}
                    alt={`${video.snippet.title} thumbnail`}
                    style={{ borderTopLeftRadius: '1em', borderTopRightRadius: '1em' }}
                    width={560}
                    height={560 / ratio}
                  />
                </AspectRatio>
                <Box p={4}>
                  <Heading as='h5' fontSize='md'>
                    {video.snippet.title}
                  </Heading>
                  <Text color='text'>{video.snippet.videoOwnerChannelTitle}</Text>
                </Box>
              </CardBody>
              <CardFooter p={4} pt='0'>
                <Spacer />
                <Button
                  title='play button'
                  onClick={() => {
                    setCurrentVideo(video);
                    scrollToTop();
                    //setPlaying(true);
                  }}
                  variant='outline'
                  colorScheme='teal'
                  rounded='xl'
                  size='md'
                >
                  <FaPlay />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Main>
      <DarkModeSwitch />
      <ScrollToTopBtn />
      <Footer>
        <VStack m={3} textAlign='center'>
          <Text fontSize='lg'>
            Designed and Built by{' '}
            <Link href='https://github.com/PeriYumYum' isExternal>
              Peri👒
            </Link>{' '}
            ©2023
          </Text>
          <CTA />
          <Box pos='relative' pt={8} bottom='0'>
            <Text color='teal'>
              <Link
                href='https://www.flaticon.com/free-icons/lesson'
                title='lesson icons'
                isExternal
              >
                Lesson icons created by Freepik - Flaticon
              </Link>
            </Text>
          </Box>
        </VStack>
      </Footer>
    </Container>
  );
};
export default Index;
