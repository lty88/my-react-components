import React from 'react';
export interface DangerProps {
    onFile: (files: FileList) => void;
    className?: string;
    children?: any;
}
declare const Danger: React.FC<DangerProps>;
export default Danger;
