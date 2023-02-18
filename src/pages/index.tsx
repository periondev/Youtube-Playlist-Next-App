import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Link as ChakraLink, Text, Image } from '@chakra-ui/react';
import { Heading, SimpleGrid, Box, Flex, Center, ListItem, List } from '@chakra-ui/layout';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';

/*Define object type of playlistItems resource 
reference: https://developers.google.com/youtube/v3/docs/playlistItems*/
type Medium = {
  medium: {
    url: string;
    width: number;
    height: number;
  };
};
type Snippet = {
  channelId: string;
  title: string;
  description: string;
  thumbnails: Medium;
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

//todo
//const Player = dynamic(() => import('../components/Player'), { ssr: false });
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
    revalidate: 30,
  };
};

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentVideo, setCurrentVideo] = useState(data[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <Container height='100vh'>
      <Head>
        <title>My Youtube Collection</title>
        <meta name='discription' content='A YouTube playlist with video player'></meta>
      </Head>
      <Hero />

      {/* <Player id={currentVideo.snippet.resourceId.videoId} playing={playing} /> */}

      <Main>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {data.map((video: Data) => {
            return (
              <Box key={video.id}>
                <Center>
                  <Image
                    width={video.snippet.thumbnails.medium.width}
                    height='auto'
                    src={video.snippet.thumbnails.medium.url || 'https://via.placeholder.com/300'}
                    alt='MV thumbnail'
                  />
                </Center>
                <Heading as='h5' fontSize='sm' textAlign='center'>
                  {video.snippet.title}
                </Heading>
              </Box>
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
