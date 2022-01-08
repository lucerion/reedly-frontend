import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppConsumer } from '../../store';

const SidebarButton = () => (
  <AppConsumer>
    {({ toggleSidebar }) => (
      <IconButton edge="start" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
    )}
  </AppConsumer>
);

export default SidebarButton;
