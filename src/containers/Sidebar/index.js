import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import FeedsMenu from './FeedsMenu';
import LinksMenu from './LinksMenu';

import './sidebar.css';

const styles = {
  drawer: {
    paper: 'content',
  },
};

const Sidebar = ({ isOpen }) => {
  return (
    <Box className="sidebar" display={isOpen ? '' : 'none'}>
      <Drawer variant="permanent" classes={styles.drawer}>
        <LinksMenu />
        <FeedsMenu />
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
