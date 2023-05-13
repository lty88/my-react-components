import Menu from './Menu';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
var TransMenu = Menu;
TransMenu.Item = MenuItem; // for old browsers, it won't support submenu. Use SubMenu instead.
TransMenu.SubMenu = SubMenu; // for old browsers, it won't support submenu. Use Menu instead.
export default TransMenu;
