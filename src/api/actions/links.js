import { LINKS_QUERY } from '../queries';

const getLinks = async ({ client, params }) => {
  const {
    data: {
      links,
    },
  } = await client.query({ variables: params, query: LINKS_QUERY });

  return links;
};

export { getLinks };
