import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import ListModel from '../model/ListModel';

/**
 * Get Board Lists
 */
export const getLists = createAsyncThunk('scrumboardApp/lists/get', async (boardId) => {
  const response = await axios.get(`/api/scrumboard/boards/${boardId}/lists`);

  const data = await response.data;

  return data;
});

/**
 * Create List
 */
export const newList = createAsyncThunk(
  'scrumboardApp/lists/new',
  async (list, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.post(`/api/scrumboard/boards/${board.id}/lists`, ListModel(list));

    const data = await response.data;

    return data;
  }
);

/**
 * Update list
 */
export const updateList = createAsyncThunk(
  'scrumboardApp/lists/update',
  async ({ id, newData }, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.put(`/api/scrumboard/boards/${board.id}/lists/${id}`, newData);

    const data = await response.data;

    return data;
  }
);

/**
 * Remove list
 */
export const removeList = createAsyncThunk(
  'scrumboardApp/lists/remove',
  async (id, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.delete(`/api/scrumboard/boards/${board.id}/lists/${id}`);

    await response.data;

    return id;
  }
);
const listsAdapter = createEntityAdapter({});

export const { selectAll: selectLists, selectById: selectListById } = listsAdapter.getSelectors(
  (state) => state.scrumboardApp.lists
);

const listsSlice = createSlice({
  name: 'scrumboardApp/lists',
  initialState: listsAdapter.getInitialState({}),
  reducers: {
    resetLists: (state, action) => {},
  },
  extraReducers: {
    [getLists.fulfilled]: listsAdapter.setAll,
    [updateList.fulfilled]: listsAdapter.setOne,
    [removeList.fulfilled]: listsAdapter.removeOne,
    [newList.fulfilled]: listsAdapter.addOne,
  },
});

export const { resetLists } = listsSlice.actions;

export default listsSlice.reducer;
