import React from 'react';
import Menu from '../../components/Menu';
import DropdownMenu from '../../components/DropdownMenu';

class FeedsMenu extends Menu {
  renderDropdownMenu(item) {
    const { id, title, items } = item;

    return (
      <DropdownMenu
        className="submenu"
        title={title}
        items={items}
        key={id}
        onClick={(event) => this.props.onMenuItemClick(event, item)}
        onMenuItemClick={this.props.onMenuItemClick}
      />
    );
  }

  renderItem(item) {
    const { items } = item;

    return items && items.length ? this.renderDropdownMenu(item) : super.renderItem(item);
  }
}

export default FeedsMenu;
