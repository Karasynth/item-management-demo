import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ItemActions } from 'app/actions/items';
import { ItemModel } from 'app/models';

const initialState: RootState.ItemState = [
  {
    id: 1,
    text: 'Item #1',
    column_id: 1
  },
  {
    id: 2,
    text: 'Item #2',
    column_id: 2
  },
  {
    id: 3,
    text: 'Item #3',
    column_id: 1
  }
];

export const itemsReducer = handleActions<RootState.ItemState, ItemModel>(
  {
    [ItemActions.Type.ADD_ITEM]: (state, action) => {
      if (action.payload) {
        return [
          ...state,
          {
            id: state.reduce((max, item) => Math.max(item.id || 1, max), 0) + 1,
            text: action.payload.text,
            column_id: action.payload.column_id,
          },
        ];
      }
      return state;
    },
    [ItemActions.Type.DELETE_ITEM]: (state, action) => {
      return state.filter((item) => item.id !== (action.payload as any));
    },
  },
  initialState
);
