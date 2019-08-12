import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SubMenu from './SubMenu';

const MenuItem = ({ name, items, subMenuClassName }) => {
  if (items && items.length) {
    return <SubMenu title={name} items={items} className={subMenuClassName} />;
  }

  return (
    <ListItem>
      <ListItemText primary={name} />
    </ListItem>
  );
};

MenuItem.propTypes = {
  subMenuClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MenuItem;
