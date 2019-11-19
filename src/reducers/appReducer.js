import { APP_ACTIONS } from '../actions';

const appReducer = (state, action) => {
  const { toggleSidebar, updateLinks, updateFeeds, updateFeedEntries } = APP_ACTIONS;
  const { type, links, feeds, feedEntries } = action;
  const { isSidebarOpen } = state;

  switch (type) {
  case updateLinks:
    return { ...state, links };
  case updateFeeds:
    return { ...state, feeds };
  case updateFeedEntries:
    return { ...state, feedEntries };
  case toggleSidebar:
    return { ...state, isSidebarOpen: !isSidebarOpen };
  default:
    throw new Error(`'${action.type}' not found!`);
  }
};

export default appReducer;
