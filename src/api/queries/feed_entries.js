import gql from 'graphql-tag';
import { FEED_FIELDS } from './feeds';

const FEED_ENTRY_FIELDS = gql`
  fragment feedEntryFields on FeedEntry {
    id
    title
    content
    published
    feed {
      ...feedFields
    }
  }

  ${FEED_FIELDS}
`;

const FEED_ENTRIES_QUERY = gql`
  query feedEntries($feed_id: ID, $category_id: ID) {
    feedEntries(feed_id: $feed_id, category_id: $category_id) {
      ...feedEntryFields
    }
  }

  ${FEED_ENTRY_FIELDS}
`;

export { FEED_ENTRIES_QUERY };
