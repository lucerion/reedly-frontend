import gql from 'graphql-tag';
import { CATEGORY_FIELDS } from './categories';

const FEED_FIELDS = gql`
  fragment feedFields on Feed {
    id
    title
    category {
      ...categoryFields
    }
  }

  ${CATEGORY_FIELDS}
`;

const FEEDS_QUERY = gql`
  query feeds {
    feeds {
      ...feedFields
    }
  }

  ${FEED_FIELDS}
`;

export { FEEDS_QUERY };
