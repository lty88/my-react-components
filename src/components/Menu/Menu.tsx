/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-29 13:00:59
 * @LastEditTime: 2023-05-05 16:06:31
 * @LastEditors: Ran junlin
 */
import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical'; // horizontal or vertical? 不一定要写整个enum，可以从2开始递增，
type SelectCallback = (SelectedIndex: string, name: string | number) => void;
export interface MenuProps {
  defaultIndex?: string; // 默认选中项的索引，默认为0 （数组类型的选择器可以接受
  className?: string; // 类别名称 （可选） （default: ''） （）或多个类别名称 （
  mode: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback; // 选中项的索引回调函数或空 （default: undefined） （）
  children?: any;
}

interface IMenuContent {
  index: string;
  mode: MenuMode;
  onSelected?: SelectCallback;
}

export const MenuContext = createContext<IMenuContent>({
  index: '0',
  mode: 'horizontal',
});

const Menu: React.FC<MenuProps> = ({
  defaultIndex,
  className,
  mode,
  style,
  children,
  onSelect,
  ...rest
}: MenuProps) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('cs-menu', className, {
    'menu-vertical': mode === 'vertical', // vertical or horizontal
    'menu-horizontal': mode === 'horizontal', // horizontal or vertical?
  });

  const handleClick = (index: string, name: string | number) => {
    console.log('menu click', index);
    setActive(index);
    if (onSelect) {
      onSelect(index, name);
    }
  };

  const passedContext: IMenuContent = {
    index: currentActive ? currentActive : '0',
    mode: mode,
    onSelected: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child: any, index: number) => {
      const childEl = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childEl.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childEl, { index: index.toString() });
      } else {
        console.error('child is not MenuItem');
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '1',
  mode: 'horizontal', //'vertical' or 'horizontal' (default) | 'auto' (auto-adjust width) |'static' (
}; // default menu items and modes.  You can also pass dynamic data as children.  E.g. <Menu

export default Menu;
