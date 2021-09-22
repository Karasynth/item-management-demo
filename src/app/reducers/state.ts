import { ItemModel } from 'app/models';

export interface RootState {
  items: RootState.ItemState;
  newItem: RootState.NewItemState; 
  router?: any;
}

export namespace RootState {
  export type ItemState = ItemModel[];
  export type NewItemState = ItemModel;
}