import React from 'react';
import style from './style.css';

export namespace InputField {
  export interface Props {
    placeholder: string,
    icon?: string,
  }
}

export const InputField = ({ placeholder='', icon }: InputField.Props): JSX.Element => {
  return (
    <div style={{width: "100%", position: 'relative'}}>
      <input 
        type='text'
        className={style.input}
        placeholder={placeholder}
      />
      {icon && 
        <i 
          className={icon}
          style={{
            position: 'absolute',
            right: 15,
            top: 12,
            color: 'white'
          }}
        />
      }
    </div>
  );
};