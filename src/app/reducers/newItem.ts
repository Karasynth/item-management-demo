import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ItemActions } from 'app/actions/items';

const initialState: RootState.NewItemState = {
  id: 0,
  text: '',
  column_id: 0
};

export const newItemReducer = handleActions<RootState.NewItemState, any>(
  {
    [ItemActions.Type.EDIT_ITEM_COLUMN]: (state, action) => {
      return {
        ...state,
        column_id: parseInt(action.payload) 
      }
    },
    [ItemActions.Type.EDIT_ITEM_TEXT]: (state, action) => {
      return {
        ...state,
        text: action.payload
      }
    },
    [ItemActions.Type.CLEAR_NEW_ITEM]: (state, action) => {
      return initialState;
    },
  },
  initialState
);
