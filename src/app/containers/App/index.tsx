import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Header, Grid, AddItemPanel, ItemTable } from 'app/components';


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
      <Grid>
        <Grid.Column size='col-3'>
          <AddItemPanel /> 
        </Grid.Column>
        <Grid.Column size='col-9'>
          <Grid 
            style={{
              backgroundColor: 'white',
              padding: 5,
            }}
          >
            <Grid.Column size='col-6'>
              <ItemTable title='COLUMN 1'/>
            </Grid.Column>
            <Grid.Column size='col-6'>
              <ItemTable title='COLUMN 2'/>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};
