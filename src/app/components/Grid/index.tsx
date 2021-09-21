import React from 'react';
import { Column } from './Column';
import styleSheet from './style.css';

export namespace Grid {
  export interface Props {
    children: React.ReactNode,
    style?: any,
  }
}

export const Grid = ({ children, style }: Grid.Props): JSX.Element => {
  return (
    <div className={styleSheet.row} style={style}>
        {children}
    </div>
  );
};

Grid.Column = Column;