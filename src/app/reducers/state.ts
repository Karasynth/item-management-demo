import { ItemModel } from 'app/models';

export interface RootState {
  items: RootState.ItemState;
  router?: any;
}

export namespace RootState {
  export type ItemState = ItemModel[];
}
