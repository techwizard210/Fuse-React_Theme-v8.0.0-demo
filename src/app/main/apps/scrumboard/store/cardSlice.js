import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

/**
 * Update Card
 */
export const updateCard = createAsyncThunk(
  'scrumboardApp/card/update',
  async (newData, { dispatch, getState }) => {
    const { board, card } = getState().scrumboardApp;

    const response = await axios.put(
      `/api/scrumboard/boards/${board.id}/cards/${card.data.id}`,
      newData
    );

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'Card Saved',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    );

    return data;
  }
);

/**
 * Remove Card
 */
export const removeCard = createAsyncThunk(
  'scrumboardApp/card/removeCard',
  async (params, { dispatch, getState }) => {
    const { board, card } = getState().scrumboardApp;

    const response = await axios.delete(`/api/scrumboard/boards/${board.id}/cards/${card.data.id}`);

    const data = await response.data;

    dispatch(closeCardDialog());

    return data;
  }
);

const cardSlice = createSlice({
  name: 'scrumboardApp/card',
  initialState: {
    dialogOpen: false,
    data: null,
  },
  reducers: {
    openCardDialog: (state, action) => {
      state.dialogOpen = true;
      state.data = action.payload;
    },
    closeCardDialog: (state, action) => {
      state.dialogOpen = false;
      state.data = null;
    },
  },
  extraReducers: {
    [updateCard.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { openCardDialog, closeCardDialog } = cardSlice.actions;

export const selectCardDialogOpen = ({ scrumboardApp }) => scrumboardApp.card.dialogOpen;
export const selectCardData = ({ scrumboardApp }) => scrumboardApp.card.data;

export default cardSlice.reducer;
