import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { selectFaqCategories } from './faqCategoriesSlice';

export const getFaqs = createAsyncThunk('helpCenterApp/faqs/getFaqs', async () => {
  const response = await axios.get('api/help-center/faqs');
  const data = await response.data;

  return data;
});

const faqsAdapter = createEntityAdapter({});

export const { selectAll: selectFaqs, selectById: selectFaqById } = faqsAdapter.getSelectors(
  (state) => state.helpCenterApp.faqs
);

const faqsSlice = createSlice({
  name: 'helpCenterApp/faqs',
  initialState: faqsAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getFaqs.fulfilled]: faqsAdapter.setAll,
  },
});

export const selectGroupedFaqs = createSelector(
  [selectFaqs, selectFaqCategories],
  (faqs, categories) => {
    return categories.map((category) => ({
      ...category,
      faqs: _.filter(faqs, { categoryId: category.id }),
    }));
  }
);

export default faqsSlice.reducer;
