/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-27 08:56:36
 * @LastEditTime: 2023-05-07 14:14:13
 * @LastEditors: Ran junlin
 */

import React, { useRef } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import Icon from './components/Icon';
import { LoremIpsum } from './components/LoremIpsum/LoremIpsum';

library.add(fas); //全部引入icon
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // const menuList = [
  //   { index: 1, name: 'home', title: '首页', disabled: false },
  //   { index: 2, name: 'about', title: '关于我', disabled: true, isSubMenu: 1 },
  //   { index: 3, name: 'contacts', title: '联系我', disabled: false },
  // ];
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="App" style={{ height: '6000px' }}>
        <h1 className="cs-primary">Button</h1>
        <span className="cs-primary">Button</span>
        <Button>
          <Icon icon="coffee" theme="dark"></Icon>
        </Button>

        <Button autoFocus btnType={ButtonType.Primary}>
          Primary
          <Icon icon="i-cursor" theme="primary"></Icon>
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
          href="https://react.docschina.org/learn"
          target="_blank"
        >
          Link
        </Button>
        <hr />
        <h1>menu</h1>
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
      </div>
    </>
  );
}
