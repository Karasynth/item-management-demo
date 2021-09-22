import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { ItemModel } from 'app/models';

export namespace ItemActions {
  export enum Type {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
  }

  export const addItem = createAction<ItemModel>(Type.ADD_ITEM);
  export const deleteItem = createAction<ItemModel['id']>(Type.DELETE_ITEM);
}

export type ItemActions = Omit<typeof ItemActions, 'Type'>;

export const useItemActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ItemActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ItemActions;
};
