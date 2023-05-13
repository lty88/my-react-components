import { FC } from 'react';
import Menu, { MenuProps } from './Menu';
import SubMenu, { SubMenuProps } from './SubMenu';
import MenuItem, { MenuItemProps } from './MenuItem';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem; // for old browsers, it won't support submenu. Use SubMenu instead.
TransMenu.SubMenu = SubMenu; // for old browsers, it won't support submenu. Use Menu instead.
export default TransMenu;
