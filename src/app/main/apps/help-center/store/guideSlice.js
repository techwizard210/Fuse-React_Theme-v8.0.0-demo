import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGuide = createAsyncThunk(
  'helpCenterApp/guide/get',
  async ({ categorySlug, guideSlug }) => {
    const response = await axios.get(`/api/help-center/guides/${categorySlug}/${guideSlug}`);

    const data = await response.data;

    return data;
  }
);

const guideSlice = createSlice({
  name: 'helpCenterApp/guide',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getGuide.fulfilled]: (state, action) => action.payload,
  },
});

export const selectGuide = ({ helpCenterApp }) => helpCenterApp.guide;

export default guideSlice.reducer;
