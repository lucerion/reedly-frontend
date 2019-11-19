import { FEEDS_QUERY } from '../queries';

const getFeeds = async ({ client }) => {
  const {
    data: {
      feeds,
    },
  } = await client.query({ query: FEEDS_QUERY });

  return feeds;
};

export { getFeeds };
