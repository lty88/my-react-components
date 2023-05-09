/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-29 13:09:01
 * @LastEditTime: 2023-05-04 15:45:01
 * @LastEditors: Ran junlin
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  name: string | number;
  style?: React.CSSProperties;
  children?: any;
}

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  disabled,
  className,
  style,
  children,
  ...rest
}: MenuItemProps) => {
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (context.onSelected && !disabled && typeof index === 'string') {
      context.onSelected(index, rest.name);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
