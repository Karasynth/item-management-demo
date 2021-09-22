import { handleActions } from 'redux-actions';
import { RootState } from './state';
//import { ItemActions } from 'app/actions/items';
import { ItemModel } from 'app/models';

const initialState: RootState.NewItemState = {
  id: 0,
  text: 'aaaaaaaaa',
  column_id: 2
};

export const newItemReducer = handleActions<RootState.NewItemState, ItemModel>(
  {
    // [ItemActions.Type.EDIT_ITEM]: (state, action) => {
    //   return // state.filter((item) => item.id !== (action.payload as any));
    // },
  },
  initialState
);
