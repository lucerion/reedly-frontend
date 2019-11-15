import React from 'react';
import Menu from '../../components/Menu';
import { getLinksGroupedByCategory } from '../../api/actions/links';
import { MENU_TITLES } from './constants';

const LinksMenu = () => {
  const links = getLinksGroupedByCategory();

  return (
    <Menu
      className="menu"
      title={MENU_TITLES.links}
      items={links}
      key="links"
    />
  );
};

export default LinksMenu;
