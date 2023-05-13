import React from 'react';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (SelectedIndex: string, name: string | number) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children?: any;
}
interface IMenuContent {
    index: string;
    mode: MenuMode;
    onSelected?: SelectCallback;
}
export declare const MenuContext: React.Context<IMenuContent>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
