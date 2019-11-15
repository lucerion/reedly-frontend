import { useQuery } from '@apollo/react-hooks';
import { LINKS_QUERY } from '../queries/links';
import { groupByCategory } from '../helpers';

const getLinks = () => {
  const {
    data: {
      links = [],
    },
  } = useQuery(LINKS_QUERY);

  return links;
};

const getLinksGroupedByCategory = () => groupByCategory(getLinks());

export { getLinksGroupedByCategory };
