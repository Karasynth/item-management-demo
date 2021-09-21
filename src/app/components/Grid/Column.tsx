import React from 'react';
import style from './style.css';

export namespace Column {
  export interface Props {
    children: React.ReactNode,
    size: string,
  }
}

export const Column = ({ size, children }: Column.Props): JSX.Element => {
  return (
    <div className={style.column}>
        {children}
    </div>
  );
};
