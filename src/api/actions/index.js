import client from '../client';
import { getLinks as getLinksAction } from './links';
import { getFeeds as getFeedsAction } from './feeds';
import { getFeedEntries as getFeedEntriesAction } from './feed_entries';

const getLinks = (params = {}) => getLinksAction({ client, params });
const getFeeds = () => getFeedsAction({ client });
const getFeedEntries = (params = {}) => getFeedEntriesAction({ client, params });

export { getLinks, getFeeds, getFeedEntries };
