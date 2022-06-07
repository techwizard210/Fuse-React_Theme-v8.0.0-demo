import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLabels = createAsyncThunk('mailboxApp/labels/getLabels', async () => {
  const response = await axios.get('/api/mailbox/labels');
  const data = await response.data;

  return data;
});

const labelsAdapter = createEntityAdapter({});

export const {
  selectAll: selectLabels,
  selectEntities: selectLabelsEntities,
  selectById: selectLabelById,
} = labelsAdapter.getSelectors((state) => state.mailboxApp.labels);

const labelsSlice = createSlice({
  name: 'mailboxApp/labels',
  initialState: labelsAdapter.getInitialState(null),
  reducers: {},
  extraReducers: {
    [getLabels.fulfilled]: labelsAdapter.setAll,
  },
});

export default labelsSlice.reducer;
