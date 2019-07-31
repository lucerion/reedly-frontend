import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuButton from '../../components/MenuButton';

import './header.css';

const Header = ({ onMenuButtonClick }) => (
  <AppBar position="fixed" color="default" className="header">
    <Toolbar>
      <MenuButton onClick={onMenuButtonClick} />
      <Typography variant="h6">
        Reedly
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default Header;
