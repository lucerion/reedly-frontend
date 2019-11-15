import { useQuery } from '@apollo/react-hooks';
import { FEEDS_QUERY } from '../queries/feeds';
import { groupByCategory } from '../helpers';

const getFeeds = () => {
  const {
    data: {
      feeds = [],
    },
  } = useQuery(FEEDS_QUERY);

  return feeds;
};

const getFeedsGroupedByCategory = () => groupByCategory(getFeeds());

export { getFeedsGroupedByCategory };
