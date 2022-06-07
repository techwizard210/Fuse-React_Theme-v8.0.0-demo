import { combineReducers } from '@reduxjs/toolkit';
import items from './itemsSlice';

const reducer = combineReducers({
  items,
});

export default reducer;
