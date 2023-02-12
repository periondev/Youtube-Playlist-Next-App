import Image from 'next/image';
import Head from 'next/head';
import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { Heading, SimpleGrid, Box } from '@chakra-ui/layout';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

/* define type of playlistItems resource as Data */
type Data = {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
    playlistId: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
};

/* Fetch Youtube API */
export const getStaticProps: GetStaticProps<{ data: Data[] }> = async (context) => {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const REQUEST_URL = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`;
  const response = await fetch(REQUEST_URL);
  const data = await response.json();
  console.log(data);
  console.log(typeof data.items);
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

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container height='100vh'>
    <Head>
      <title>My Youtube Collection</title>
      <meta name='discription' content='A YouTube playlist with video player'></meta>
    </Head>
    <Box>
      <Hero />
    </Box>
    <Main>
      <Box>
        <Text color='text'>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{'this is example '}
          <Code>TypeScript</Code>.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {data.map(
          (video: { id: string; snippet: { title: string; thumbnails: { medium: {} } } }) => {
            return (
              <Box key={video.id}>
                {/* <Image
                  width={video.snippet.thumbnails.medium.width}
                  height={medium.height}
                  src={medium.url}
                  alt='MV thumbnail'
                  style={{ height: 'auto' }}
                /> */}
                <Heading as='h5' fontSize='sm' textAlign='left'>
                  {video.snippet.title}
                </Heading>
              </Box>
            );
          }
        )}
      </SimpleGrid>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
