const APP_ACTIONS = {
  updateLinks: 'UPDATE_LINKS',
  updateFeeds: 'UPDATE_FEEDS',
  updateContent: 'UPDATE_CONTENT',
  toggleSidebar: 'TOGGLE_SIDEBAR',
};

const updateLinks = (links) => ({ type: APP_ACTIONS.updateLinks, links });

const updateFeeds = (feeds) => ({ type: APP_ACTIONS.updateFeeds, feeds });

const updateContent = (content) => ({ type: APP_ACTIONS.updateContent, content });

const toggleSidebar = () => ({ type: APP_ACTIONS.toggleSidebar });

export {
  APP_ACTIONS,
  updateLinks,
  updateFeeds,
  updateContent,
  toggleSidebar,
};
