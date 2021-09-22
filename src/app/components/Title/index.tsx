import React from 'react';
import style from './style.css';

export namespace Title {
  export interface Props {
  }
}

export const Title = ({ }: Title.Props): JSX.Element => {
  return (
    <div className={style.title}>
      <h4>ADD AN ITEM</h4>
    </div>
  );
};
