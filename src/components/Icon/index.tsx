/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-05 16:30:29
 * @LastEditTime: 2023-05-06 18:56:38
 * @LastEditors: Ran junlin
 */
import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
  className?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  theme,
  ...restProps
}) => {
  const classes = classNames('cs-icon', className, {
    [`icon-${theme}`]: theme,
  }); // Add class name or array of class names to Icon. 描述自然数或列表中的class名称或列表。 如果className是数组，则每个元素应用于一个classNames。 如果没有给出className，则 Icon 应该是一个一个classNames。 类似于：<FontAwesomeIcon className="pe-7s-coin"/>。 参见：https://fortawesome.github.io/react-font

  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>;
};

export default Icon;
