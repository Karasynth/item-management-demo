import { combineReducers } from 'redux';
import { RootState } from './state';
import { itemsReducer } from './items';
import { newItemReducer } from './newItem';
import { filterReducer } from './filter';

export { RootState };

export const rootReducer = combineReducers({
  items: itemsReducer,
  newItem: newItemReducer,
  filter: filterReducer,
});
