import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Menu = ({ items = [] }) => {
  const renderItems = (items) => items.map((text, index) => renderItem(index, text));

  const renderItem = (key, text) => (
    <ListItem key={key}>
      <ListItemText primary={text} />
    </ListItem>
  );

  return (
    <List>
      {renderItems(items)}
    </List>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default Menu;
