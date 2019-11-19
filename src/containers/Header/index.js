import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SidebarButton from './SidebarButton';

import './header.css';

const Header = () => (
  <AppBar position="fixed" color="default" className="header">
    <Toolbar>
      <SidebarButton />
      <Typography variant="h6">
        Reedly
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
