import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { selectGuideCategories } from './guideCategoriesSlice';

export const getGuides = createAsyncThunk(
  'helpCenterApp/guides/getGuides',
  async (categorySlug) => {
    const url = categorySlug
      ? `/api/help-center/guides/${categorySlug}`
      : '/api/help-center/guides';
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  }
);

const guidesAdapter = createEntityAdapter({});

export const { selectAll: selectGuides, selectById: selectGuideById } = guidesAdapter.getSelectors(
  (state) => state.helpCenterApp.guides
);

const guidesSlice = createSlice({
  name: 'helpCenterApp/guides',
  initialState: guidesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getGuides.fulfilled]: guidesAdapter.setAll,
  },
});

export const selectGroupedGuides = createSelector(
  [selectGuides, selectGuideCategories],
  (guides, categories) => {
    return categories.map((category) => ({
      ...category,
      guides: _.filter(guides, { categoryId: category.id }),
    }));
  }
);

export default guidesSlice.reducer;
