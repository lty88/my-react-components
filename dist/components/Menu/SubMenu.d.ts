import React from 'react';
export type expandTriggers = 'hover' | 'click';
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    expandTrigger?: expandTriggers;
    [key: string]: any;
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
