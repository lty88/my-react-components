import React, { useState, createContext } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical'; // horizontal or vertical? 不一定要写整个enum，可以从2开始递增，
type SelectCallback = (SelectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number; // 默认选中项的索引，默认为0 （数组类型的选择器可以接受
  className?: string; // 类别名称 （可选） （default: ''） （）或多个类别名称 （
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback; // 选中项的索引回调函数或空 （default: undefined） （）
  children?: any;
}

interface IMenuContent {
  index: number;
  onSelected?: SelectCallback;
}

export const MenuContext = createContext<IMenuContent>({ index: 0 });

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
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContent = {
    index: currentActive ? currentActive : 0,
    onSelected: handleClick,
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
