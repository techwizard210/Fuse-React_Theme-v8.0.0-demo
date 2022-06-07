import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Get Members
 */
export const getMembers = createAsyncThunk('scrumboardApp/members/getMembers', async (boardId) => {
  const response = await axios.get(`/api/scrumboard/members`);
  const data = await response.data;

  return data;
});

const membersAdapter = createEntityAdapter({});

export const { selectAll: selectMembers, selectById: selectMemberById } =
  membersAdapter.getSelectors((state) => state.scrumboardApp.members);

const membersSlice = createSlice({
  name: 'scrumboardApp/members',
  initialState: membersAdapter.getInitialState({}),
  reducers: {
    resetMembers: (state, action) => {},
  },
  extraReducers: {
    [getMembers.fulfilled]: membersAdapter.setAll,
  },
});

export const { resetMembers } = membersSlice.actions;

export default membersSlice.reducer;
