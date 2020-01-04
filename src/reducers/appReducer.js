import { APP_ACTIONS } from '../actions';

const appReducer = (state, action) => {
  const { toggleSidebar, updateLinks, updateFeeds, updateContent } = APP_ACTIONS;
  const { type, links, feeds, content } = action;
  const { isSidebarOpen } = state;

  switch (type) {
  case updateLinks:
    return { ...state, links };
  case updateFeeds:
    return { ...state, feeds };
  case updateContent:
    return { ...state, content };
  case toggleSidebar:
    return { ...state, isSidebarOpen: !isSidebarOpen };
  default:
    throw new Error(`'${action.type}' not found!`);
  }
};

export default appReducer;
