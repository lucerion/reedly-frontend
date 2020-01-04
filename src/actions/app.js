const APP_ACTIONS = {
  updateLinks: 'UPDATE_LINKS',
  updateFeeds: 'UPDATE_FEEDS',
  updateFeedEntries: 'UPDATE_FEED_ENTRIES',
  toggleSidebar: 'TOGGLE_SIDEBAR',
};

const updateLinks = (links) => ({ type: APP_ACTIONS.updateLinks, links });

const updateFeeds = (feeds) => ({ type: APP_ACTIONS.updateFeeds, feeds });

const updateFeedEntries = (feedEntries) => ({ type: APP_ACTIONS.updateFeedEntries, feedEntries });

const toggleSidebar = () => ({ type: APP_ACTIONS.toggleSidebar });

export {
  APP_ACTIONS,
  updateLinks,
  updateFeeds,
  updateFeedEntries,
  toggleSidebar,
};
