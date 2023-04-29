/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-27 08:56:36
 * @LastEditTime: 2023-04-29 19:03:22
 * @LastEditors: Ran junlin
 */

import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/button';

import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';

export default function App() {
  const menuList = [
    { index: 1, name: 'home', title: '首页', disabled: false },
    { index: 2, name: 'about', title: '关于我', disabled: true },
    { index: 3, name: 'contacts', title: '联系我', disabled: false },
  ];
  return (
    <div className="App">
      <h1>Button</h1>
      <Button>1</Button>
      <Button autoFocus btnType={ButtonType.Primary}>
        Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.large}>
        Danger
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.large} disabled>
        Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.large}
        href="http://www.baidu.com"
        target="_blank"
      >
        Link
      </Button>
      <hr />
      <h1>menu</h1>
      <Menu
        defaultIndex={1}
        onSelect={(index) => {
          alert(index);
        }}
      >
        {menuList.map(({ index, name, title, disabled }) => {
          return (
            <MenuItem index={index} key={name} disabled={disabled}>
              {title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
