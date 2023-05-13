import React from 'react';
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    name: string | number;
    style?: React.CSSProperties;
    children?: any;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
