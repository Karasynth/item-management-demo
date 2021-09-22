import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { FilterActions } from 'app/actions/filter';

const initialState: string = "";

export const filterReducer = handleActions<RootState.FilterState, string>(
  {
    [FilterActions.Type.SET_FILTER]: (state, action) => {
      return action.payload;
    },
  },
  initialState
);
