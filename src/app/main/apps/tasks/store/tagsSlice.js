import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTags = createAsyncThunk('tasksApp/tags/getTags', async (params, { getState }) => {
  const response = await axios.get('/api/tasks/tags');

  const data = await response.data;

  return data;
});

const tagsAdapter = createEntityAdapter({});

export const { selectAll: selectTags, selectById: selectTagsById } = tagsAdapter.getSelectors(
  (state) => state.tasksApp.tags
);

const tagsSlice = createSlice({
  name: 'tasksApp/tags',
  initialState: tagsAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getTags.fulfilled]: tagsAdapter.setAll,
  },
});

export default tagsSlice.reducer;
