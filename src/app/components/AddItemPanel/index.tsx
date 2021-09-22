import React from 'react';
import { InputField, SelectField } from 'app/components';
import style from "./style.css";
import {ItemActions, useItemActions, useFilterActions, FilterActions } from 'app/actions'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/reducers';

export namespace AddItemPanel {
  export interface Props {
  }
}

export const AddItemPanel = ({  }: AddItemPanel.Props): JSX.Element => {

  const dispatch = useDispatch();
  const itemActions = useItemActions(dispatch);
  const filterActions = useFilterActions(dispatch);

  const {newItem, filter} = useSelector((state: RootState) => {
    return {
      newItem: state.newItem,
      filter: state.filter,
    };
  });

  const handleAddItem = React.useCallback((item): void => {
    if (!item.text) {
      alert("Please enter item text.");
    }
    else if (item.column_id == 0) {
      alert("Please select a column.");
    }
    else {
      itemActions.addItem(item); 
      itemActions.clearNewItem(); 
    }
  }, [ItemActions]);

  const handleTextChange = React.useCallback((value): void => {
    itemActions.editItemText(value); 
  }, [ItemActions]);

  const handleColumnChange = React.useCallback((value): void => {
    itemActions.editItemColmun(value); 
  }, [ItemActions]);

  const handleSearchChange = React.useCallback((value): void => {
    filterActions.setFilter(value); 
  }, [FilterActions]);

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
        onChange={handleSearchChange}
        value={filter}
      />
    </div>
  );
};
