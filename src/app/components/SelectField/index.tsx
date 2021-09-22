import React from 'react';
import style from './style.css';

export namespace SelectField {
  export interface Props {
    placeholder: string,
    value: number,
    onChange: any,
  }
}

export const SelectField = ({ placeholder='', value, onChange}: SelectField.Props): JSX.Element => {

  const handleOnChange = (e:any) => {
    onChange( e.target.value)
  };

  return (
    <select
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      style={{color: value> 0? "white" : "#c3c7cd"}}
    >
      <option value={0} style={{color: '#c3c7cd'}}>{placeholder}</option>
      <option value={1} className={style.option}>COLUMN 1</option>
      <option value={2} className={style.option}>COLUMN 2</option>
    </select>
  );
};
