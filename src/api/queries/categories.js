import gql from 'graphql-tag';

const CATEGORY_FIELDS = gql`
  fragment categoryFields on Category {
    id
    name
  }
`;

const FEED_FIELDS = gql`
  fragment feedFields on Feed {
    id
    name: title
  }
`;

const CATEGORIES_QUERY = gql`
  query categories {
    linksCategories: categories(type: "link") {
      ...categoryFields
    }

    feedsCategories: categories(type: "feed") {
      ...categoryFields

      items: feeds {
        ...feedFields
      }
    }
  }

  ${CATEGORY_FIELDS}
  ${FEED_FIELDS}
`;

export { CATEGORIES_QUERY };
