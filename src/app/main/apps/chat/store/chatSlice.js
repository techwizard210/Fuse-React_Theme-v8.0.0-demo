import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getChats } from './chatsSlice';

export const getChat = createAsyncThunk(
  'chatApp/chat/getChat',
  async (contactId, { dispatch, getState }) => {
    const response = await axios.get(`/api/chat/chats/${contactId}`);

    const data = await response.data;

    return data;
  }
);

export const sendMessage = createAsyncThunk(
  'chatApp/chat/sendMessage',
  async ({ messageText, chatId, contactId }, { dispatch, getState }) => {
    const response = await axios.post(`/api/chat/chats/${contactId}`, messageText);

    const data = await response.data;

    dispatch(getChats());

    return data;
  }
);

const chatSlice = createSlice({
  name: 'chatApp/chat',
  initialState: [],
  reducers: {
    removeChat: (state, action) => action.payload,
  },
  extraReducers: {
    [getChat.fulfilled]: (state, action) => action.payload,
    [sendMessage.fulfilled]: (state, action) => [...state, action.payload],
  },
});

export const selectChat = ({ chatApp }) => chatApp.chat;

export default chatSlice.reducer;
