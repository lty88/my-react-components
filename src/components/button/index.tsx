/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-27 11:50:02
 * @LastEditTime: 2023-05-08 16:51:28
 * @LastEditors: Ran junlin
 */
import React from 'react';
import classNames from 'classnames';
// import './_style.scss';
export enum ButtonSize {
  large = 'large',
  small = 'small',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = ({
  className,
  btnType,
  children,
  size,
  disabled,
  ...restProps
}) => {
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && restProps.href) {
    return (
      <a className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} {...restProps} disabled={disabled}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false, // default disabled state is false.  true by default.  useful for'submit' button.  probably want something like this for '
  btnType: ButtonType.Primary,
};

export default Button;
