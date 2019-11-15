import React from 'react';
import Menu from '../../components/Menu';
import DropdownMenu from '../../components/DropdownMenu';
import { getFeedsGroupedByCategory } from '../../api/actions/feeds';
import { MENU_TITLES } from './constants';

const FeedsMenu = () => {
  const feeds = getFeedsGroupedByCategory();

  const renderMenuItem = (item) => {
    const { id, title, items } = item;

    if (items && items.length) {
      return (
        <DropdownMenu
          className="submenu"
          title={title}
          items={items}
          key={id}
        />
      );
    }
  };

  return (
    <Menu
      className="menu"
      title={MENU_TITLES.feeds}
      items={feeds}
      key="feeds"
      renderMenuItem={renderMenuItem}
    />
  );
};

export default FeedsMenu;
