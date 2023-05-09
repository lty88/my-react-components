import React from 'react';
import { motion } from 'framer-motion';

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right';

interface IAnimationExample {
  animation?: AnimationName;
  classNames?: any;
  children: any;
  wrapper?: boolean;
  appear?: boolean;
}
const AnimationExample: React.FC<IAnimationExample> = ({
  animation,
  classNames,
  children,
  ...restProps
}: IAnimationExample) => {
  return (
    <motion.div animate={animation} {...restProps}>
      {children}
    </motion.div>
  );
};

export default AnimationExample;
