import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const SubMenuItem = ({ name }) => (
  <ListItem button>
    <Typography variant="body2">
      <ListItemText disableTypography primary={name} />
    </Typography>
  </ListItem>
);

SubMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubMenuItem;
