/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-08 16:34:45
 * @LastEditTime: 2023-05-08 21:22:10
 * @LastEditors: Ran junlin
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';
import SubMenu from '../components/Menu/SubMenu';

export default {
  title: 'Menu',
  component: Menu,
};

export const Menus: ComponentStory<typeof Menu> = () => (
  <Menu defaultIndex="0" mode="horizontal">
    <MenuItem key="1" name="home">
      home
    </MenuItem>
    <MenuItem key="2" name="about">
      about
    </MenuItem>
    <MenuItem key="3" name="cart">
      cart
    </MenuItem>
    <MenuItem key="4" name="me">
      me
    </MenuItem>
    <SubMenu title="mme" expandTrigger="hover">
      <MenuItem key="5" name="mne">
        mne1
      </MenuItem>
      <MenuItem key="6" name="mne">
        mne2
      </MenuItem>
      <MenuItem key="66" name="mne">
        mne3
      </MenuItem>
    </SubMenu>
  </Menu>
);
Menus.storyName = 'Menu';
