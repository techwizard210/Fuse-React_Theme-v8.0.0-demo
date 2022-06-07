import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFaqCategories = createAsyncThunk('helpCenterApp/faqCategories/get', async () => {
  const response = await axios.get('api/help-center/faqs/categories');
  const data = await response.data;
  return data;
});

const faqCategoriesAdapter = createEntityAdapter({});

export const { selectAll: selectFaqCategories, selectById: selectFaqCategoryById } =
  faqCategoriesAdapter.getSelectors((state) => state.helpCenterApp.faqCategories);

const faqCategoriesSlice = createSlice({
  name: 'helpCenterApp/faqCategories',
  initialState: faqCategoriesAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getFaqCategories.fulfilled]: faqCategoriesAdapter.setAll,
  },
});

export default faqCategoriesSlice.reducer;
