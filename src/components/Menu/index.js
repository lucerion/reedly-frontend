import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MenuItem from './MenuItem';
import Typography from '@material-ui/core/Typography';

const Menu = ({ title, items, className, renderMenuItem }) => {
  const header = <Typography component="div" variant="subtitle1">{title}</Typography>;

  const renderItem = (item) => <MenuItem title={item.title} key={item.id} />;

  const renderItems = (items) => items.map((item) => (renderMenuItem && renderMenuItem(item)) || renderItem(item));

  return (
    <List subheader={header} className={className}>
      {renderItems(items)}
    </List>
  );
};

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
});

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(itemPropType),
    })
  ),
  className: PropTypes.string,
  renderMenuItem: PropTypes.func,
};

export default Menu;
