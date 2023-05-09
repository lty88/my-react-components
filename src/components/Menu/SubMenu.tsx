/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-03 21:48:38
 * @LastEditTime: 2023-05-06 20:03:44
 * @LastEditors: Ran junlin
 */
import React, { FunctionComponentElement, useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import { MenuItemProps } from './MenuItem';
import Icon from '../Icon';
import AnimationExample from '../Transition/transition';

export type expandTriggers = 'hover' | 'click';

export interface SubMenuProps {
  index?: string; // 选择的子菜单项的索引值，从0开始计数。 （例如，选择
  title: string; // “CodeGeeX”菜单项时，该值为5。） （例如，选择“
  className?: string;
  expandTrigger?: expandTriggers; // 显示“加”或“减”按钮的文本或图像。 （例如，选择“Code
  [key: string]: any; // Allows for additional props to be added to the <SubMenu> element. 例如，选择“CodeGeeX”菜单
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
  ...rest
}) => {
  const [menuOpen, setOpen] = useState(false);
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });

  const onHandleClickMenuOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  const handleOnMouseEvent = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault();
    setOpen(toggle); // Toggle state.
  };

  // const handleEventType =
  //   context.mode === 'horizontal'
  //     ? {
  //         onClick: onHandleClickMenuOpen,
  //       }
  //     : {
  //         onMouseEnter: (e: React.MouseEvent) => handleOnMouseEvent(e, true), // 在子菜单开始时发送事件。例如，选择“CodeGeeX”菜单。 （例如，选择“CodeGeeX”菜单）。 （例如，选择“CodeGeeX”菜单）。 选择“CodeGeeX”菜单时，发送事件。 （例如，选择“CodeGeeX”菜单）。 （例如，选择“CodeGeeX”菜单）。 选择“Code
  //         onMouseLeave: (e: React.MouseEvent) => handleOnMouseEvent(e, false), // 在子菜单结束时发送事件。例如，选择“CodeGeeX”菜
  //       };
  const handleEventType =
    rest.expandTrigger === 'click'
      ? {
          onClick: onHandleClickMenuOpen,
        }
      : {
          onMouseEnter: (e: React.MouseEvent) => handleOnMouseEvent(e, true), // 在子菜单开始时发送事件。例如，选择“CodeGeeX”菜单。 （例如，选择“CodeGeeX”菜单）。 （例如，选择“CodeGeeX”菜单）。 选择“CodeGeeX”菜单时，发送事件。 （例如，选择“CodeGeeX”菜单）。 （例如，选择“CodeGeeX”菜单）。 选择“Code
          onMouseLeave: (e: React.MouseEvent) => handleOnMouseEvent(e, false), // 在子菜单结束时发送事件。例如，选择“CodeGeeX”菜
        };

  const renderChildren = () => {
    const subMenuClasses = classNames('cs-submenu', {
      'menu-opened': menuOpen,
    });
    const childComponent = React.Children.map(children, (child, i) => {
      const childEl = child as FunctionComponentElement<MenuItemProps>;
      if (childEl.type.displayName === 'MenuItem') {
        return React.cloneElement(childEl, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('childEl is not a MenuItem');
      }
    });
    return (
      <AnimationExample animation='zoom-in-left'>
        <ul className={subMenuClasses}>{childComponent}</ul>
      </AnimationExample>
    );
  };

  return (
    <li key={index} className={classes} {...handleEventType}>
      <div className="submenu-title">
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu'; // Used for debugging. （例如，选择“CodeGeeX”菜单项时，该值为5。） 例如，选择“Code

SubMenu.defaultProps = {
  expandTrigger: 'click',
};

export default SubMenu;
