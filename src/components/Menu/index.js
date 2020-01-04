import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MenuItem from './MenuItem';
import Typography from '@material-ui/core/Typography';

class Menu extends PureComponent {
  title() {
    return (
      <Typography component="div" variant="subtitle1" onClick={this.props.onTitleClick}>
        {this.props.title}
      </Typography>
    );
  }

  renderItems() {
    return this.props.items.map((item) => this.renderItem(item));
  }

  renderItem(item) {
    return (
      <MenuItem
        title={item.title}
        key={item.id}
        onClick={(event) => this.props.onMenuItemClick(event, item)}
      />
    );
  }

  render() {
    return (
      <List subheader={this.title()} className={this.props.className}>
        {this.renderItems()}
      </List>
    );
  }
}

const itemPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(itemPropType),
    })
  ),
  className: PropTypes.string,
  onTitleClick: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};

export default Menu;
