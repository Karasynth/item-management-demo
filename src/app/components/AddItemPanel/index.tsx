import React from 'react';
import { InputField, SelectField } from 'app/components';
import style from "./style.css";
import {ItemActions, useItemActions } from 'app/actions'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/reducers';

export namespace AddItemPanel {
  export interface Props {
  }
}

export const AddItemPanel = ({  }: AddItemPanel.Props): JSX.Element => {

  const dispatch = useDispatch();
  const itemActions = useItemActions(dispatch);

  const newItem = useSelector((state: RootState) => {
    return state.newItem;
  });

  const handleAddItem = React.useCallback((i): void => {
    itemActions.addItem(i); 
    itemActions.clearNewItem(); 
  }, [ItemActions]);

  const handleTextChange = React.useCallback((value): void => {
    itemActions.editItemText(value); 
  }, [ItemActions]);

  const handleColumnChange = React.useCallback((value): void => {
    itemActions.editItemColmun(value); 
  }, [ItemActions]);

  return (
    <div className={style.addItemPanel}>
      <InputField 
        placeholder='ENTER ITEM'
        value={newItem.text}
        onChange={handleTextChange}
      />
      <SelectField 
        placeholder='CHOOSE COLUMN'
        value={newItem.column_id}
        onChange={handleColumnChange}
      />
      <button 
        className={style.addItemButton}
        style={{margin: "100px 0 15px 0"}}
        onClick={()=>handleAddItem(newItem)}
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
        onChange={handleTextChange}
        value=""
      />
    </div>
  );
};
