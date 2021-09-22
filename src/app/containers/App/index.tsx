import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { Header, Grid, AddItemPanel, ItemTable, Title } from 'app/components';
import {ItemModel} from "app/models"


export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

function filterItems (items:ItemModel[], filter="", columndId=1) {
  return items.filter( (i:ItemModel) => {
    if (filter) {
      return ( (i.text || "").toLowerCase() ).includes(filter.toLowerCase()) && i.column_id === columndId;
    }
    return i.column_id === columndId
  })
}

export const App = ({ history, location }: App.Props) => {
  // const dispatch = useDispatch();

  const { items, filter} = useSelector((state: RootState) => {
    return {
      items: state.items,
      filter: state.filter,
    };
  });

  const column1Items = React.useMemo(() => filterItems(items, filter, 1), [items, filter] );
  const column2Items = React.useMemo(() => filterItems(items, filter, 2), [items, filter] );

  return (
    <div className={style.normal}>
      <Header />
      <Title />
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
              <ItemTable 
                title='COLUMN 1'
                items={column1Items}
              />
            </Grid.Column>
            <Grid.Column size='col-6'>
              <ItemTable 
                title='COLUMN 2'
                items={column2Items}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};
