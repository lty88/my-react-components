var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
 * @Date: 2023-05-03 21:48:38
 * @LastEditTime: 2023-05-06 20:03:44
 * @LastEditors: Ran junlin
 */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import Icon from '../Icon';
import AnimationExample from '../Transition/transition';
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children, rest = __rest(_a, ["index", "title", "className", "children"]);
    var _b = useState(false), menuOpen = _b[0], setOpen = _b[1];
    var context = useContext(MenuContext);
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical',
    });
    var onHandleClickMenuOpen = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var handleOnMouseEvent = function (e, toggle) {
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
    var handleEventType = rest.expandTrigger === 'click'
        ? {
            onClick: onHandleClickMenuOpen,
        }
        : {
            onMouseEnter: function (e) { return handleOnMouseEvent(e, true); },
            onMouseLeave: function (e) { return handleOnMouseEvent(e, false); }, // 在子菜单结束时发送事件。例如，选择“CodeGeeX”菜
        };
    var renderChildren = function () {
        var subMenuClasses = classNames('cs-submenu', {
            'menu-opened': menuOpen,
        });
        var childComponent = React.Children.map(children, function (child, i) {
            var childEl = child;
            if (childEl.type.displayName === 'MenuItem') {
                return React.cloneElement(childEl, {
                    index: "".concat(index, "-").concat(i),
                });
            }
            else {
                console.error('childEl is not a MenuItem');
            }
        });
        return (React.createElement(AnimationExample, { animation: 'zoom-in-left' },
            React.createElement("ul", { className: subMenuClasses }, childComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, handleEventType),
        React.createElement("div", { className: "submenu-title" },
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu'; // Used for debugging. （例如，选择“CodeGeeX”菜单项时，该值为5。） 例如，选择“Code
SubMenu.defaultProps = {
    expandTrigger: 'click',
};
export default SubMenu;
