import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFaqsMost = createAsyncThunk('helpCenterApp/faqsMost/get', async () => {
  const response = await axios.get('/api/help-center/faqs/most-asked');
  const data = await response.data;

  return data;
});

const faqsMostAdapter = createEntityAdapter({});

export const { selectAll: selectFaqsMost, selectById: selectFaqsMostById } =
  faqsMostAdapter.getSelectors((state) => state.helpCenterApp.faqsMost);

const faqsMostSlice = createSlice({
  name: 'helpCenterApp/faqsMost',
  initialState: faqsMostAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getFaqsMost.fulfilled]: faqsMostAdapter.setAll,
  },
});

export default faqsMostSlice.reducer;
