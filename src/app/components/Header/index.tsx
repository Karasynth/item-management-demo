import React from 'react';
import {  Grid } from 'app/components';

export namespace Header {
  export interface Props {
  }
}

export const Header = ({ }: Header.Props): JSX.Element => {
  return (
    <header style={{marginBottom: 50}}>
      <h1>Marvelous!</h1>
      <Grid>
        <Grid.Column size='col-7'>
          <p style={{margin: 0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </Grid.Column>
      </Grid>
    </header>
  );
};
