import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { GetStaticProps } from 'next'

/* define type of playlistItems resource as Data */
type Data = {
  "id": string,
  "snippet": {  
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      medium: {
        "url": string,    
      }
    },
    "channelTitle": string,
    "videoOwnerChannelTitle": string,
    "videoOwnerChannelId": string,
    "playlistId": string, 
    "resourceId": {
      "kind": string,
      "videoId": string,
    }
  }
};
/* Fetch Youtube API */
export const getStaticProps: GetStaticProps<{ data: Data[] }> = async (
  context
) => {
  const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const REQUEST_URL = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=20&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`;
  const response = await fetch(REQUEST_URL);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 30,
  }
}

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text color="text">
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{'this is example '}
        <Code>TypeScript</Code>.
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
        
         
        </ListItem>
        <ListItem>
        
    
       
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
