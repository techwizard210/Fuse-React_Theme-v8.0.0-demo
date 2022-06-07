import { combineReducers } from '@reduxjs/toolkit';
import chats from './chatsSlice';
import chat from './chatSlice';
import contacts from './contactsSlice';
import user from './userSlice';

const reducer = combineReducers({
  user,
  contacts,
  chats,
  chat,
});

export default reducer;
