import { FEED_ENTRIES_QUERY } from '../queries';

const getFeedEntries = async ({ client, params }) => {
  const {
    data: {
      feedEntries,
    },
  } = await client.query({ variables: params, query: FEED_ENTRIES_QUERY });

  return feedEntries;
};

export { getFeedEntries };
