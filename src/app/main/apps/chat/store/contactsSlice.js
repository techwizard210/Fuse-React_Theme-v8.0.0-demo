import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk('chatApp/contacts/getContacts', async (params) => {
  const response = await axios.get('/api/chat/contacts', { params });

  const data = await response.data;

  return data;
});

const contactsAdapter = createEntityAdapter({});

export const { selectAll: selectContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.chatApp.contacts);

const contactsSlice = createSlice({
  name: 'chatApp/contacts',
  initialState: contactsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getContacts.fulfilled]: contactsAdapter.setAll,
  },
});

export default contactsSlice.reducer;
