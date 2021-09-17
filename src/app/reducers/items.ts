import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ItemActions } from 'app/actions/items';
import { ItemModel } from 'app/models';

const initialState: RootState.ItemState = [
  {
    id: 1,
    text: 'Item',
    column_id: 0
  }
];

export const itemsReducer = handleActions<RootState.ItemState, ItemModel>(
  {
    [ItemActions.Type.ADD_ITEM]: (state, action) => {
      if (action.payload && action.payload.text) {
        return [
          {
            id: state.reduce((max, item) => Math.max(item.id || 1, max), 0) + 1,
            text: action.payload.text,
            column_id: action.payload.column_id,
          },
          ...state
        ];
      }
      return state;
    },
    [ItemActions.Type.DELETE_ITEM]: (state, action) => {
      return state.filter((item) => item.id !== (action.payload as any));
    },
    [ItemActions.Type.EDIT_ITEM]: (state, action) => {
      return state.map((item) => {
        if (!item || !action || !action.payload) {
          return item;
        }
        return (item.id || 0) === action.payload.id ? { ...item, text: action.payload.text } : item;
      });
    },
  },
  initialState
);
