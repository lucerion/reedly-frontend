import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppContext } from '../../contexts';

const SidebarButton = () => (
  <AppContext.Consumer>
    {({ toggleSidebar }) => (
      <IconButton edge="start" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
    )}
  </AppContext.Consumer>
);

export default SidebarButton;
