import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';

export const getLabels = createAsyncThunk('calendarApp/labels/getLabels', async () => {
  const response = await axios.get('/api/calendar/labels');
  const data = await response.data;

  return data;
});

export const addLabel = createAsyncThunk(
  'calendarApp/labels/addLabel',
  async (newLabel, { dispatch }) => {
    const response = await axios.post('/api/calendar/labels', newLabel);
    const data = await response.data;

    return data;
  }
);

export const updateLabel = createAsyncThunk(
  'calendarApp/labels/updateLabel',
  async (label, { dispatch }) => {
    const response = await axios.put(`/api/calendar/labels/${label.id}`, label);
    const data = await response.data;

    return data;
  }
);

export const removeLabel = createAsyncThunk(
  'calendarApp/labels/removeLabel',
  async (labelId, { dispatch }) => {
    const response = await axios.delete(`/api/calendar/labels/${labelId}`);
    const data = await response.data;

    return data;
  }
);

const labelsAdapter = createEntityAdapter({});

export const {
  selectAll: selectLabels,
  selectIds: selectLabelIds,
  selectById: selectLabelById,
} = labelsAdapter.getSelectors((state) => state.calendarApp.labels);

const labelsSlice = createSlice({
  name: 'calendarApp/labels',
  initialState: labelsAdapter.getInitialState({
    selectedLabels: [],
    labelsDialogOpen: false,
  }),
  reducers: {
    toggleSelectedLabels: (state, action) => {
      state.selectedLabels = _.xor(state.selectedLabels, [action.payload]);
    },
    openLabelsDialog: (state, action) => {
      state.labelsDialogOpen = true;
    },
    closeLabelsDialog: (state, action) => {
      state.labelsDialogOpen = false;
    },
  },
  extraReducers: {
    [getLabels.fulfilled]: (state, action) => {
      labelsAdapter.setAll(state, action.payload);
      state.selectedLabels = action.payload.map((item) => item.id);
    },
    [addLabel.fulfilled]: labelsAdapter.addOne,
    [updateLabel.fulfilled]: labelsAdapter.upsertOne,
    [removeLabel.fulfilled]: labelsAdapter.removeOne,
  },
});

export const selectSelectedLabels = ({ calendarApp }) => calendarApp.labels.selectedLabels;
export const selectFirstLabelId = ({ calendarApp }) => calendarApp.labels.ids[0];
export const selectLabelsDialogOpen = ({ calendarApp }) => calendarApp.labels.labelsDialogOpen;

export const { toggleSelectedLabels, openLabelsDialog, closeLabelsDialog } = labelsSlice.actions;

export default labelsSlice.reducer;
