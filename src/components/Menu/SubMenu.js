import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SubMenuItem from './SubMenuItem';

const SubMenu = ({ title, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderItems = (items) => items.map(({ id, name }) => (
    <SubMenuItem name={name} key={id} />
  ));

  const renderExpandIcon = (isOpen) => isOpen ? <ExpandLess /> : <ExpandMore />;

  return (
    <React.Fragment>
      <ListItem button onClick={toggle}>
        <ListItemText primary={title} />
        {renderExpandIcon(isOpen)}
      </ListItem>
      <Collapse in={isOpen}>
        <List disablePadding className={className}>
          {renderItems(items)}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

SubMenu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default SubMenu;
