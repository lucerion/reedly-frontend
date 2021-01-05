import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuItem = ({ title, onClick }) => (
  <ListItem button onClick={onClick} >
    <ListItemText primary={title} />
  </ListItem>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
