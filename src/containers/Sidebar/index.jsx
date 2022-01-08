import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import { AppConsumer } from '../../store';
import Menu from '../../components/Menu';
import FeedsMenu from './FeedsMenu';
import { groupByCategory } from '../../helpers';

import './sidebar.css';

const MENU_TITLES = {
  links: 'Links',
  feeds: 'Feeds',
};

const MENU_STYLES = {
  drawer: {
    paper: 'content',
  },
};

const renderLinksMenu = (links, updateLinks) => (
  <Menu
    className="menu"
    title={MENU_TITLES.links}
    items={groupByCategory(links)}
    key={MENU_TITLES.links}
    onTitleClick={() => updateLinks()}
    onMenuItemClick={(_event, category) => updateLinks({ category_id: category.id })}
  />
);

const renderFeedsMenu = (feeds, updateFeedEntries) => {
  const onMenuItemClick = (_event, { id, items }) => {
    const isCategory = !!items;
    const params = isCategory ? { category_id: id } : { feed_id: id };

    updateFeedEntries(params);
  };

  return (
    <FeedsMenu
      className="menu"
      title={MENU_TITLES.feeds}
      items={groupByCategory(feeds)}
      key={MENU_TITLES.feeds}
      onTitleClick={() => updateFeedEntries()}
      onMenuItemClick={onMenuItemClick}
    />
  );
};

const Sidebar = () => (
  <AppConsumer>
    {({ isSidebarOpen, links, feeds, updateFeedEntries, updateLinks }) => (
      <Box className="sidebar" display={isSidebarOpen ? '' : 'none'}>
        <Drawer variant="permanent" classes={MENU_STYLES.drawer}>
          {renderLinksMenu(links, updateLinks)}
          {renderFeedsMenu(feeds, updateFeedEntries)}
        </Drawer>
      </Box>
    )}
  </AppConsumer>
);

export default Sidebar;
