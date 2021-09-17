import React from 'react';

export namespace Header {
  export interface Props {
  }
}

export const Header = ({ }: Header.Props): JSX.Element => {
  return (
    <header>
      <h1>Marvelous</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
    </header>
  );
};
