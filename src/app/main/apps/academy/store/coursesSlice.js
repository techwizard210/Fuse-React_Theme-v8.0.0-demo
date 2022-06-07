import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCourses = createAsyncThunk('academyApp/courses/getCourses', async () => {
  const response = await axios.get('/api/academy/courses');

  const data = await response.data;

  return data;
});

const coursesAdapter = createEntityAdapter({});

export const { selectAll: selectCourses, selectById: selectCourseById } =
  coursesAdapter.getSelectors((state) => state.academyApp.courses);

const coursesSlice = createSlice({
  name: 'academyApp/courses',
  initialState: coursesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getCourses.fulfilled]: coursesAdapter.setAll,
  },
});

export default coursesSlice.reducer;
