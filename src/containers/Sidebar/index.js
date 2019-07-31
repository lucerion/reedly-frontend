import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Menu from '../../components/Menu';

import './sidebar.css';

const Sidebar = ({ isOpen }) => (
  <Box className="sidebar" display={isOpen ? '' : 'none'}>
    <Drawer variant="permanent" classes={{ paper: 'content' }}>
      <Menu />
    </Drawer>
  </Box>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
