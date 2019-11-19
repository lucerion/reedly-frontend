import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DropdownMenuItem from './DropdownMenuItem';

const renderItems = (items, onItemClick) => items.map((item) => renderItem(item, onItemClick));

const renderItem = (item, onItemClick) => (
  <DropdownMenuItem title={item.title} key={item.id} onClick={(event) => onItemClick(event, item)} />
);

const renderExpandIcon = (isOpen, onClick) => (
  isOpen ? <ExpandLess onClick={onClick} /> : <ExpandMore onClick={onClick} />
);

const DropDownMenu = ({ title, items, className, onClick, onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <ListItem button>
        <ListItemText onClick={onClick} primary={title} />
        {renderExpandIcon(isOpen, toggle)}
      </ListItem>
      <Collapse in={isOpen}>
        <List disablePadding className={className}>
          {renderItems(items, onMenuItemClick)}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

DropDownMenu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};

export default DropDownMenu;
