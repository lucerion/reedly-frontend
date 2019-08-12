import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MenuItem from './MenuItem';
import Typography from '@material-ui/core/Typography';

const Menu = ({ title, items, className, subMenuClassName }) => {
  const header = <Typography component="div" variant="subtitle1">{title}</Typography>;

  const renderItems = (items) => items.map(({ id, name, items }) => (
    <MenuItem name={name} items={items} key={id} subMenuClassName={subMenuClassName} />
  ));

  return (
    <List subheader={header} className={className}>
      {renderItems(items)}
    </List>
  );
};

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

Menu.propTypes = {
  className: PropTypes.string,
  subMenuClassName: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(itemPropType),
    })
  ),
};

export default Menu;
