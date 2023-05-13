var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-29 13:00:59
 * @LastEditTime: 2023-05-05 16:06:31
 * @LastEditors: Ran junlin
 */
import React, { useState, createContext } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({
    index: '0',
    mode: 'horizontal',
});
var Menu = function (_a) {
    var defaultIndex = _a.defaultIndex, className = _a.className, mode = _a.mode, style = _a.style, children = _a.children, onSelect = _a.onSelect, rest = __rest(_a, ["defaultIndex", "className", "mode", "style", "children", "onSelect"]);
    var _b = useState(defaultIndex), currentActive = _b[0], setActive = _b[1];
    var classes = classNames('cs-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal', // horizontal or vertical?
    });
    var handleClick = function (index, name) {
        console.log('menu click', index);
        setActive(index);
        if (onSelect) {
            onSelect(index, name);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        mode: mode,
        onSelected: handleClick,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childEl = child;
            var displayName = childEl.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childEl, { index: index.toString() });
            }
            else {
                console.error('child is not MenuItem');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '1',
    mode: 'horizontal', //'vertical' or 'horizontal' (default) | 'auto' (auto-adjust width) |'static' (
}; // default menu items and modes.  You can also pass dynamic data as children.  E.g. <Menu
export default Menu;
