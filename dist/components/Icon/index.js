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
 * @Date: 2023-05-05 16:30:29
 * @LastEditTime: 2023-05-06 18:56:38
 * @LastEditors: Ran junlin
 */
import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
var Icon = function (_a) {
    var _b;
    var className = _a.className, theme = _a.theme, restProps = __rest(_a, ["className", "theme"]);
    var classes = classNames('cs-icon', className, (_b = {},
        _b["icon-".concat(theme)] = theme,
        _b)); // Add class name or array of class names to Icon. 描述自然数或列表中的class名称或列表。 如果className是数组，则每个元素应用于一个classNames。 如果没有给出className，则 Icon 应该是一个一个classNames。 类似于：<FontAwesomeIcon className="pe-7s-coin"/>。 参见：https://fortawesome.github.io/react-font
    return React.createElement(FontAwesomeIcon, __assign({ className: classes }, restProps));
};
export default Icon;
