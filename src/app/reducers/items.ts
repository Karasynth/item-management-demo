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
    column_id: 1
  },
  {
    id: 3,
    text: 'Item #3',
    column_id: 1
  },
  {
    id: 4,
    text: 'Item #4',
    column_id: 1
  },
  {
    id: 5,
    text: 'Item #5',
    column_id: 1
  },
  {
    id: 6,
    text: 'Item #6',
    column_id: 1
  },
  {
    id: 7,
    text: 'Item #7',
    column_id: 1
  },
  {
    id: 8,
    text: 'Item #8',
    column_id: 2
  },
  {
    id: 9,
    text: 'Item #9',
    column_id: 2
  },
  {
    id: 10,
    text: 'Item #10',
    column_id: 2
  },
  {
    id: 11,
    text: 'Item #1',
    column_id: 2
  },
  {
    id: 12,
    text: 'Item #12',
    column_id: 2
  },
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
