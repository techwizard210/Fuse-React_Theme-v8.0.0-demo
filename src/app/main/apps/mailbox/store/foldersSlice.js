import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';

export const getFolders = createAsyncThunk('mailboxApp/folders/getFolders', async () => {
  const response = await axios.get('/api/mailbox/folders');
  const data = await response.data;

  return data;
});

const foldersAdapter = createEntityAdapter({});

export const { selectAll: selectFolders, selectById: selectFolderById } =
  foldersAdapter.getSelectors((state) => state.mailboxApp.folders);

const foldersSlice = createSlice({
  name: 'mailboxApp/folders',
  initialState: foldersAdapter.getInitialState({}),
  reducers: {},
  extraReducers: {
    [getFolders.fulfilled]: foldersAdapter.setAll,
  },
});

export const selectSpamFolderId = createSelector([selectFolders], (folders) => {
  return _.find(folders, { slug: 'spam' })?.id;
});

export const selectTrashFolderId = createSelector([selectFolders], (folders) => {
  return _.find(folders, { slug: 'trash' })?.id;
});

export default foldersSlice.reducer;
