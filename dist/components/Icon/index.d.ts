import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
    className?: string;
}
declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
