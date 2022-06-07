import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFilters = createAsyncThunk('mailboxApp/filters/getFilters', async () => {
  const response = await axios.get('/api/mailbox/filters');
  const data = await response.data;

  return data;
});

const filtersAdapter = createEntityAdapter({});

export const { selectAll: selectFilters, selectById: selectFilterById } =
  filtersAdapter.getSelectors((state) => state.mailboxApp.filters);

const filtersSlice = createSlice({
  name: 'mailboxApp/filters',
  initialState: filtersAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getFilters.fulfilled]: filtersAdapter.setAll,
  },
});

export default filtersSlice.reducer;
