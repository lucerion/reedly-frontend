import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuItem = ({ title }) => {
  return (
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuItem;
