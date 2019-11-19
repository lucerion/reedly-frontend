export const APP_ACTIONS = {
  updateLinks: 'UPDATE_LINKS',
  updateFeeds: 'UPDATE_FEEDS',
  updateFeedEntries: 'UPDATE_FEED_ENTRIES',
  toggleSidebar: 'TOGGLE_SIDEBAR',
};

export const updateLinks = (links) => ({ type: APP_ACTIONS.updateLinks, links });

export const updateFeeds = (feeds) => ({ type: APP_ACTIONS.updateFeeds, feeds });

export const updateFeedEntries = (feedEntries) => ({ type: APP_ACTIONS.updateFeedEntries, feedEntries });

export const toggleSidebar = () => ({ type: APP_ACTIONS.toggleSidebar });
