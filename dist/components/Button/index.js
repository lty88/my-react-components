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
 * @Date: 2023-04-27 11:50:02
 * @LastEditTime: 2023-05-14 00:43:26
 * @LastEditors: Ran junlin
 */
import React from 'react';
import classNames from 'classnames';
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "large";
    ButtonSize["Small"] = "small";
})(ButtonSize || (ButtonSize = {}));
export var EButtonType;
(function (EButtonType) {
    EButtonType["Primary"] = "primary";
    EButtonType["Default"] = "default";
    EButtonType["Danger"] = "danger";
    EButtonType["Link"] = "link";
})(EButtonType || (EButtonType = {}));
var Button = function (_a) {
    var _b;
    var className = _a.className, btnType = _a.btnType, children = _a.children, size = _a.size, disabled = _a.disabled, restProps = __rest(_a, ["className", "btnType", "children", "size", "disabled"]);
    var classes = classNames('btn', (_b = {},
        _b["btn-".concat(btnType)] = btnType,
        _b["btn-".concat(size)] = size,
        _b.disabled = btnType === EButtonType.Link && disabled,
        _b));
    if (btnType === EButtonType.Link && restProps.href) {
        return (React.createElement("a", __assign({ className: classes }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes }, restProps, { disabled: disabled }), children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: EButtonType.Primary,
};
export default Button;
