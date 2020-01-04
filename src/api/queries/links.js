import gql from 'graphql-tag';
import { CATEGORY_FIELDS } from './categories';

const LINK_FIELDS = gql`
  fragment linkFields on Link {
    id
    title: url
    content: description
    category {
      ...categoryFields
    }
  }

  ${CATEGORY_FIELDS}
`;

const LINKS_QUERY = gql`
  query links($category_id: ID) {
    links(category_id: $category_id) {
      ...linkFields
    }
  }

  ${LINK_FIELDS}
`;

export { LINKS_QUERY };
