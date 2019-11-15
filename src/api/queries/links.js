import gql from 'graphql-tag';
import { CATEGORY_FIELDS } from './categories';

const LINK_FIELDS = gql`
  fragment linkFields on Link {
    id
    category {
      ...categoryFields
    }
  }

  ${CATEGORY_FIELDS}
`;

const LINKS_QUERY = gql`
  query links {
    links {
      ...linkFields
    }
  }

  ${LINK_FIELDS}
`;

export { LINKS_QUERY };
