import gql from 'graphql-tag';

const CATEGORY_FIELDS = gql`
  fragment categoryFields on Category {
    id
    title: name
  }
`;

export { CATEGORY_FIELDS };
