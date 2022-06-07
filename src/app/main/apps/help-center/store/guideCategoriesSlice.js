import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';

export const getGuideCategories = createAsyncThunk(
  'helpCenterApp/guideCategories/get',
  async () => {
    const response = await axios.get('api/help-center/guides/categories');
    const data = await response.data;

    return data;
  }
);

const guideCategoriesAdapter = createEntityAdapter({});

export const { selectAll: selectGuideCategories, selectById: selectGuideCategorieseById } =
  guideCategoriesAdapter.getSelectors((state) => state.helpCenterApp.guideCategories);

const guideCategoriesSlice = createSlice({
  name: 'helpCenterApp/guideCategories',
  initialState: guideCategoriesAdapter.getInitialState(),
  extraReducers: {
    [getGuideCategories.fulfilled]: guideCategoriesAdapter.setAll,
  },
});

export const selectGuideCategorieseBySlug = (slug) =>
  createSelector([selectGuideCategories], (categories) => {
    return _.find(categories, { slug });
  });

export default guideCategoriesSlice.reducer;
