import { combineReducers } from 'redux';
import { RootState } from './state';
import { itemsReducer } from './items';
import { newItemReducer } from './newItem';

// import {persistStore, persistReducer} from "redux-persist";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, itemsReducer);

export { RootState };

export const rootReducer = combineReducers({
  items: persistedReducer,
  newItem: newItemReducer,
});
