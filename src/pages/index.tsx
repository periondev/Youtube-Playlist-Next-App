import Head from 'next/head';
//import { Player } from '../components/Player';
import { IframePlayer } from '../components/IframePlayer';
import {
  Link as ChakraLink,
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  AspectRatio,
  Tooltip,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { Heading, SimpleGrid, Box, Flex, Center, Stack, Spacer, VStack } from '@chakra-ui/layout';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';

/*Define object type of playlistItems resource 
reference: https://developers.google.com/youtube/v3/docs/playlistItems*/
type High = {
  high: {
    url: string;
    width: number;
    height: number;
  };
};
type Snippet = {
  channelId: string;
  title: string;
  description: string;
  thumbnails: High;
  channelTitle: string;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
  playlistId: string;
  resourceId: {
    kind: string;
    videoId: string;
  };
};
type Data = {
  id: string;
  snippet: Snippet;
};

/* Fetch Youtube API */
export const getStaticProps: GetStaticProps<{ data: Data[] }> = async (context) => {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const REQUEST_URL = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`;
  const response = await fetch(REQUEST_URL);
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data.items },
    revalidate: 20,
  };
};

const scrollToTop = () => {
  window.scrollTo({ top: 80, behavior: 'smooth' });
};

const Index = ({ data }) => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  const [playing, setPlaying] = useState(false);
  //const [hasWindow, setHasWindow] = useState(false);
  //solve React 18 Next.js >12 react-player hydration error:
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setHasWindow(true);
  //   }
  // }, []);

  return (
    <Container height='100vh'>
      <Head>
        <title>My Youtube Collection</title>
        <meta name='discription' content='A YouTube playlist with video player'></meta>
      </Head>
      <Hero />
      {/* {hasWindow && <Player id={currentVideo.snippet.resourceId.videoId} playing={playing} />} */}
      <IframePlayer video_id={currentVideo.snippet.resourceId.videoId} autoPlay={playing} />
      <Main>
        <SimpleGrid columns={[1, 2, 3]} spacing={14}>
          {data.map((video: Data) => {
            return (
              <Card key={video.id}>
                <CardBody pb='0'>
                  <AspectRatio maxW='560px' ratio={16 / 9}>
                    <Image
                      src={video.snippet.thumbnails.high.url || 'https://via.placeholder.com/300'}
                      alt={`${video.snippet.title} thumbnail`}
                    />
                  </AspectRatio>
                  <Stack mt={3} spacing={2}>
                    <Heading as='h5' fontSize='sm'>
                      {video.snippet.title}
                    </Heading>
                    <Text>{video.snippet.videoOwnerChannelTitle}</Text>
                  </Stack>
                </CardBody>
                <CardFooter mb='0'>
                  <Spacer />
                  <Button
                    rightIcon={<ArrowRightIcon />}
                    onClick={() => {
                      setCurrentVideo(video);
                      scrollToTop();
                      setPlaying(true);
                    }}
                  >
                    Play
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
      </Main>
      <DarkModeSwitch />
      <Footer>
        <Text>Made by Peri🐢</Text>
      </Footer>
      <CTA />
    </Container>
  );
};
export default Index;
