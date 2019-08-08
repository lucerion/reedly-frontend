import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MenuButton = ({ onClick }) => (
  <IconButton edge="start" onClick={onClick}>
    <MenuIcon />
  </IconButton>
);

MenuButton.propTypes = {
  onClick: PropTypes.func,
};

export default MenuButton;