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

  const handleAddItem = React.useCallback((): void => {
    itemActions.addItem(newItem); 
  }, [ItemActions]);

  return (
    <div className={style.addItemPanel}>
      <InputField 
        placeholder='ENTER ITEM'
        value={newItem.text}
      />
      <SelectField 
        placeholder='CHOOSE COLUMN'
        value={newItem.column_id}
      />
      <button 
        className={style.addItemButton}
        style={{margin: "100px 0 15px 0"}}
        onClick={handleAddItem}
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
        value=""
      />
    </div>
  );
};
