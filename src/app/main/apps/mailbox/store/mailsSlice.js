import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import { selectFolders } from './foldersSlice';
import { selectLabels } from './labelsSlice';
import { selectFilters } from './filtersSlice';

export const getMails = createAsyncThunk(
  'mailboxApp/mails/getMails',
  async (routeParams, { getState }) => {
    routeParams = routeParams || getState().mailboxApp.mails.routeParams;

    let url = '/api/mailbox/mails/';
    if (routeParams.folderHandle) {
      url += routeParams.folderHandle;
    }

    if (routeParams.labelHandle) {
      url += `labels/${routeParams.labelHandle}`;
    }

    if (routeParams.filterHandle) {
      url += `filters/${routeParams.filterHandle}`;
    }
    const response = await axios.get(url);
    const data = await response.data;

    return { data, routeParams };
  }
);

export const setActionToMails = createAsyncThunk(
  'mailboxApp/mails/setActionToMails',
  async ({ type, value, ids }, { dispatch, getState }) => {
    const { mails } = getState().mailboxApp;
    const { selectedMailIds } = mails;

    const response = await axios.post('/api/mailbox/actions', {
      type,
      value,
      ids,
    });

    const data = await response.data;

    dispatch(getMails());

    return data;
  }
);

const mailsAdapter = createEntityAdapter({});

export const { selectAll: selectMails, selectById: selectMailById } = mailsAdapter.getSelectors(
  (state) => state.mailboxApp.mails
);

const mailsSlice = createSlice({
  name: 'mailboxApp/mails',
  initialState: mailsAdapter.getInitialState({
    searchText: '',
    routeParams: {},
    selectedMailIds: [],
  }),
  reducers: {
    setMailsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    selectAllMails: (state, action) => {
      state.selectedMailIds = state.ids;
    },
    deselectAllMails: (state, action) => {
      state.selectedMailIds = [];
    },
    selectMailsByParameter: (state, action) => {
      const [parameter, value] = action.payload;
      state.selectedMailIds = state.ids.filter((id) => state.entities[id][parameter] === value);
    },
    toggleInSelectedMails: (state, action) => {
      const mailId = action.payload;
      state.selectedMailIds = state.selectedMailIds.includes(mailId)
        ? state.selectedMailIds.filter((id) => id !== mailId)
        : [...state.selectedMailIds, mailId];
    },
  },
  extraReducers: {
    [getMails.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      mailsAdapter.setAll(state, data);
      state.routeParams = routeParams;
      state.selectedMailIds = [];
    },
  },
});

export const {
  setMailsSearchText,
  selectAllMails,
  deselectAllMails,
  selectMailsByParameter,
  toggleInSelectedMails,
} = mailsSlice.actions;

export const selectMailsTitle = (routeParams) =>
  createSelector([selectFolders, selectLabels, selectFilters], (folders, labels, filters) => {
    let title;
    if (routeParams.folderHandle) {
      title = _.find(folders, { slug: routeParams.folderHandle })?.title;
    }

    if (routeParams.labelHandle) {
      title = _.find(labels, { slug: routeParams.labelHandle })?.title;
    }

    if (routeParams.filterHandle) {
      title = _.find(filters, { slug: routeParams.filterHandle })?.title;
    }
    return title;
  });

export const selectSearchText = ({ mailboxApp }) => mailboxApp.mails.searchText;

export const selectSelectedMailIds = ({ mailboxApp }) => mailboxApp.mails.selectedMailIds;

export default mailsSlice.reducer;
