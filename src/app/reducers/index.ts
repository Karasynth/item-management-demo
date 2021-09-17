import { combineReducers } from 'redux';
import { RootState } from './state';
import { itemsReducer } from './items';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  items: itemsReducer
});
