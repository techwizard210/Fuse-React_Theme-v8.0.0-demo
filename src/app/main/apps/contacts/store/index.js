import { combineReducers } from '@reduxjs/toolkit';
import tags from './tagsSlice';
import contacts from './contactsSlice';
import countries from './countriesSlice';
import contact from './contactSlice';

const reducer = combineReducers({
  tags,
  countries,
  contacts,
  contact,
});

export default reducer;
