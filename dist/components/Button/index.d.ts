import React from 'react';
export declare enum ButtonSize {
    Large = "large",
    Small = "small"
}
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export declare enum EButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
