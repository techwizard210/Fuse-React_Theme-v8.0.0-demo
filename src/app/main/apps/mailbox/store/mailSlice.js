import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';
import history from '@history';
import { getMails } from './mailsSlice';

export const getMail = createAsyncThunk('mailboxApp/mail/getMail', async (routeParams) => {
  let url = '/api/mailbox/mails/';
  if (routeParams.folderHandle) {
    url += `${routeParams.folderHandle}/${routeParams.mailId}`;
  }

  if (routeParams.labelHandle) {
    url += `labels/${routeParams.labelHandle}/${routeParams.mailId}`;
  }

  if (routeParams.filterHandle) {
    url += `filters/${routeParams.filterHandle}/${routeParams.mailId}`;
  }

  try {
    const response = await axios.get(url);

    const data = await response.data;

    return data;
  } catch (error) {
    history.push({ pathname: `/apps/mailbox` });

    return null;
  }
});

const mailSlice = createSlice({
  name: 'mailboxApp/mail',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getMail.fulfilled]: (state, action) => action.payload,
    [getMails.fulfilled]: (state, action) => {
      const mails = action.payload.data;

      if (!state) {
        return null;
      }

      const mail = _.find(mails, { id: state.id });

      return mail || null;
    },
  },
});

export const selectMail = ({ mailboxApp }) => mailboxApp.mail;

export default mailSlice.reducer;
