// Define object type of playlistItems resource
// Reference: https://developers.google.com/youtube/v3/docs/playlistItems/

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

export type Data = {
  id: string;
  snippet: Snippet;
};
