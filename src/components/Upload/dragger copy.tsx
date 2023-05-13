import React, { useState, DragEvent, Children } from 'react';
import classNames from 'classnames';

export interface DangerProps {
  onFile: (files: FileList) => void;
  className?: string;
  children?: any;
}
const Danger: React.FC<DangerProps> = ({ className, ...rest }) => {
  const [dragOver, setDragOver] = useState(false);
  const classNamesInstance = classNames('cs-dragOver', {
    'is-dragOver': dragOver,
  });
  const handleOnDragOver = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };

  return (
    <div
      className={classNamesInstance}
      {...rest}
    >
      {rest.children}
    </div>
  );
};
export default Danger;
