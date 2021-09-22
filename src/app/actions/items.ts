import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { ItemModel } from 'app/models';

export namespace ItemActions {
  export enum Type {
    ADD_ITEM = 'ADD_ITEM',
    EDIT_ITEM_TEXT = 'EDIT_ITEM_TEXT',
    EDIT_ITEM_COLUMN = "EDIT_ITEM_COLUMN",
    DELETE_ITEM = 'DELETE_ITEM',
    CLEAR_NEW_ITEM = 'CLEAR_NEW_ITEM',
  }

  export const addItem = createAction<ItemModel>(Type.ADD_ITEM);
  export const editItemText = createAction<string>(Type.EDIT_ITEM_TEXT);
  export const editItemColmun = createAction<number>(Type.EDIT_ITEM_COLUMN);
  export const deleteItem = createAction<ItemModel['id']>(Type.DELETE_ITEM);
  export const clearNewItem = createAction(Type.CLEAR_NEW_ITEM);
}

export type ItemActions = Omit<typeof ItemActions, 'Type'>;

export const useItemActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ItemActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ItemActions;
};
