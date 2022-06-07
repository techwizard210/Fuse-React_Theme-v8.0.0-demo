import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('analyticsDashboardApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/analytics/widgets');

  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'analyticsDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ analyticsDashboardApp }) => analyticsDashboardApp.widgets;

export default widgetsSlice.reducer;
