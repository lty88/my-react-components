/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-29 13:09:01
 * @LastEditTime: 2023-04-29 18:45:04
 * @LastEditors: Ran junlin
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
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
    console.log(index);
    if (context.onSelected && !disabled) {
      context.onSelected(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
