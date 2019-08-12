import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Menu from '../../components/Menu';
import { CATEGORIES_QUERY } from '../../api/queries/categories';

import './sidebar.css';

const MENU_TITLES = {
  links: 'Links',
  feeds: 'Feeds',
};

const Sidebar = ({ isOpen }) => {
  const {
    data: {
      linksCategories = [],
      feedsCategories = [],
    } = {},
  } = useQuery(CATEGORIES_QUERY);

  return (
    <Box className="sidebar" display={isOpen ? '' : 'none'}>
      <Drawer variant="permanent" classes={{ paper: 'content' }}>
        <Menu className="menu" title={MENU_TITLES.links} items={linksCategories} key="links" />
        <Menu
          className="menu"
          title={MENU_TITLES.feeds}
          items={feedsCategories}
          key="feeds"
          subMenuClassName="submenu"
        />
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
