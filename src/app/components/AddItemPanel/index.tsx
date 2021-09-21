import React from 'react';
import { InputField, SelectField } from 'app/components';
import style from "./style.css"

export namespace AddItemPanel {
  export interface Props {
  }
}

export const AddItemPanel = ({  }: AddItemPanel.Props): JSX.Element => {
  return (
    <div className={style.addItemPanel}>
      <InputField 
        placeholder='ENTER ITEM'
      />
      <SelectField 
        placeholder='CHOOSE COLUMN'
      />
      <button 
        className={style.addItemButton}
        style={{margin: "100px 0 15px 0",}}
      >
        ADD ITEM
      </button>

      <label 
        className={style.label}
      >
        SEARCH AN ITEM
      </label>
      <InputField 
        placeholder='SEARCH'
        icon="fa fa-search"
      />
    </div>
  );
};
