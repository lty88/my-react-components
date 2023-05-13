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
 * @Date: 2023-04-29 13:09:01
 * @LastEditTime: 2023-05-04 15:45:01
 * @LastEditors: Ran junlin
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
var MenuItem = function (_a) {
    var index = _a.index, disabled = _a.disabled, className = _a.className, style = _a.style, children = _a.children, rest = __rest(_a, ["index", "disabled", "className", "style", "children"]);
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    var handleClick = function () {
        if (context.onSelected && !disabled && typeof index === 'string') {
            context.onSelected(index, rest.name);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
