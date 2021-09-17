import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Header } from 'app/components';


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export const App = ({ history, location }: App.Props) => {
  // const dispatch = useDispatch();
  
  const {  } = useSelector((state: RootState) => {
    return {
    };
  });

  return (
    <div className={style.normal}>
      <Header />
    </div>
  );
};
