import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../contexts';
import { getFeedEntries, getLinks, getFeeds } from '../api/actions';
import { appReducer } from '../reducers';
import { toggleSidebar, updateLinks, updateFeeds, updateContent } from '../actions';

const INITIAL_STATE = {
  links: [],
  feeds: [],
  content: [],
  isSidebarOpen: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      dispatch(updateLinks(await getLinks()));
      dispatch(updateFeeds(await getFeeds()));
      dispatch(updateContent(await getFeedEntries()));
    })();
  }, []);

  const { isSidebarOpen, links, feeds, content } = state;

  const value = {
    isSidebarOpen,
    toggleSidebar: () => dispatch(toggleSidebar()),
    links,
    feeds,
    content,
    updateFeedEntries: (params) => {
      getFeedEntries(params).then((feedEntries) => dispatch(updateContent(feedEntries)));
    },
    updateLinks: (params) => getLinks(params).then((links) => dispatch(updateContent(links))),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
