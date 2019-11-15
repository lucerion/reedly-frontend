import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  text: {
    noWrap: true,
    variant: 'body2',
  },
};

const DropdownMenuItem = ({ title }) => (
  <ListItem button>
    <ListItemText primary={title} primaryTypographyProps={styles.text} />
  </ListItem>
);

DropdownMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DropdownMenuItem;
