import React from 'react';
import { Column } from './Column';
import style from './style.css';

export namespace Grid {
  export interface Props {
    children: React.ReactNode,
  }
}

export const Grid = ({ children }: Grid.Props): JSX.Element => {
  return (
    <div className={style.row}>
        {children}
    </div>
  );
};

Grid.Column = Column;