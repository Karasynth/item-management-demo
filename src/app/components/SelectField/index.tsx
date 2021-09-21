import React from 'react';
import style from './style.css';

export namespace SelectField {
  export interface Props {
    placeholder: string,
  }
}

export const SelectField = ({ placeholder='', }: SelectField.Props): JSX.Element => {
  return (
    <select
      className={style.input}
      placeholder={placeholder}
      value={""}
    >
      <option disabled> {placeholder} </option>
      <option value={1}>COLUMN 1</option>
      <option value={2}>COLUMN 2</option>
    </select>
  );
};
