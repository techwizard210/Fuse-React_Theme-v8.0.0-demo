import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('scrumboardApp/labels/getLabels', async (boardId) => {
  const response = await axios.get(`/api/scrumboard/boards/${boardId}/labels`);
  const data = await response.data;

  return data;
});

const labelsAdapter = createEntityAdapter({});

export const { selectAll: selectLabels, selectById: selectLabelById } = labelsAdapter.getSelectors(
  (state) => state.scrumboardApp.labels
);

const labelsSlice = createSlice({
  name: 'scrumboardApp/labels',
  initialState: labelsAdapter.getInitialState({}),
  reducers: {
    resetLabels: (state, action) => {},
  },
  extraReducers: {
    [getLabels.fulfilled]: labelsAdapter.setAll,
  },
});

export const { resetLabels } = labelsSlice.actions;

export default labelsSlice.reducer;
