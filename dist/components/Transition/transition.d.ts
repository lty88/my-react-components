import React from 'react';
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
interface IAnimationExample {
    animation?: AnimationName;
    classNames?: any;
    children: any;
    wrapper?: boolean;
    appear?: boolean;
}
declare const AnimationExample: React.FC<IAnimationExample>;
export default AnimationExample;
