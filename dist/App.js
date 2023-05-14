/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-27 08:56:36
 * @LastEditTime: 2023-05-14 15:27:45
 * @LastEditors: Ran junlin
 */
import React from 'react';
import Button, { ButtonSize } from './components/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import Icon from './components/Icon';
import Upload from './components/Upload';
library.add(fas); //全部引入icon
export default function App() {
    var scrollYProgress = useScroll().scrollYProgress;
    var scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    // const menuList = [
    //   { index: 1, name: 'home', title: '首页', disabled: false },
    //   { index: 2, name: 'about', title: '关于我', disabled: true, isSubMenu: 1 },
    //   { index: 3, name: 'contacts', title: '联系我', disabled: false },
    // ];
    return (React.createElement(React.Fragment, null,
        React.createElement(motion.div, { className: "progress-bar", style: { scaleX: scaleX } }),
        React.createElement("div", { className: "App", style: { height: '6000px' } },
            React.createElement("h1", { className: "cs-primary" }, "Button"),
            React.createElement("span", { className: "cs-primary" }, "Button"),
            React.createElement(Button, null,
                React.createElement(Icon, { icon: "coffee", theme: "dark" })),
            React.createElement(Button, { autoFocus: true, btnType: "primary" },
                "Primary",
                React.createElement(Icon, { icon: "i-cursor", theme: "primary" })),
            React.createElement(Button, { btnType: "danger", size: ButtonSize.Large }, "Danger"),
            React.createElement(Button, { btnType: "default", size: ButtonSize.Small, disabled: true }, "Danger"),
            React.createElement(Button, { btnType: "link", size: ButtonSize.Large, href: "https://react.docschina.org/learn", target: "_blank" }, "Link"),
            React.createElement("hr", null),
            React.createElement("h1", null, "menu"),
            React.createElement(Menu, { defaultIndex: "0", mode: "horizontal" },
                React.createElement(MenuItem, { key: "1", name: "home" }, "home"),
                React.createElement(MenuItem, { key: "2", name: "about" }, "about"),
                React.createElement(MenuItem, { key: "3", name: "cart" }, "cart"),
                React.createElement(MenuItem, { key: "4", name: "me" }, "me"),
                React.createElement(SubMenu, { title: "mme", expandTrigger: "hover" },
                    React.createElement(MenuItem, { key: "5", name: "mne" }, "mne1"),
                    React.createElement(MenuItem, { key: "6", name: "mne" }, "mne2"),
                    React.createElement(MenuItem, { key: "66", name: "mne" }, "mne3"))),
            React.createElement("hr", null),
            React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", drag: true },
                React.createElement(Icon, { icon: "upload", size: "5x", theme: "secondary" }),
                React.createElement("p", null, "Drag file over to here")))));
}
