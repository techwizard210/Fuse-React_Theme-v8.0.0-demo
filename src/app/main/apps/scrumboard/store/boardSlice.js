import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '@history';
import _ from '@lodash';
import { showMessage } from 'app/store/fuse/messageSlice';
import reorder, { reorderQuoteMap } from './reorder';
import { removeCard } from './cardSlice';
import { newList, removeList } from './listsSlice';
import { newCard } from './cardsSlice';

/**
 * Get Board
 */
export const getBoard = createAsyncThunk(
  'scrumboardApp/board/get',
  async (boardId, { dispatch }) => {
    try {
      const response = await axios.get(`/api/scrumboard/boards/${boardId}`);
      const data = await response.data;
      return data;
    } catch (error) {
      dispatch(
        showMessage({
          message: error.response.data,
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      );

      history.push({
        pathname: '/apps/scrumboard/boards',
      });
      return null;
    }
  }
);

/**
 * Update Board
 */
export const updateBoard = createAsyncThunk(
  'scrumboardApp/board/update',
  async (newData, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.put(`/api/scrumboard/boards/${board.id}`, newData);

    const data = await response.data;

    return data;
  }
);

/**
 * Reorder Board List
 */
export const reorderList = createAsyncThunk(
  'scrumboardApp/board/reorderList',
  async (result, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;
    const { lists } = board;

    const ordered = reorder(_.merge([], lists), result.source.index, result.destination.index);

    const response = await axios.put(`/api/scrumboard/boards/${board.id}`, { lists: ordered });

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'List Order Saved',
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
 * Reorder Board Card
 */
export const reorderCard = createAsyncThunk(
  'scrumboardApp/board/reorderCard',
  async ({ source, destination }, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;
    const { lists } = board;

    const ordered = reorderQuoteMap(_.merge([], lists), source, destination);

    const response = await axios.put(`/api/scrumboard/boards/${board.id}`, { lists: ordered });

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'Card Order Saved',
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
 * Delete Board
 */
export const deleteBoard = createAsyncThunk(
  'scrumboardApp/board/delete',
  async (params, { dispatch, getState }) => {
    const { board } = getState().scrumboardApp;

    const response = await axios.delete(`/api/scrumboard/boards/${board.id}`);

    history.push({
      pathname: '/apps/scrumboard/boards',
    });

    const data = await response.data;

    return data;
  }
);

const boardsSlice = createSlice({
  name: 'scrumboardApp/boards',
  initialState: null,
  reducers: {
    resetBoard: (state, action) => null,
    addLabel: (state, action) => {
      state.labels = [...state.labels, action.payload];
    },
  },
  extraReducers: {
    [getBoard.fulfilled]: (state, action) => action.payload,
    [updateBoard.fulfilled]: (state, action) => action.payload,
    [reorderList.fulfilled]: (state, action) => action.payload,
    [reorderCard.fulfilled]: (state, action) => action.payload,
    [deleteBoard.fulfilled]: (state, action) => {
      state = {};
    },
    [removeCard.fulfilled]: (state, action) => {
      const cardId = action.payload;

      state.lists = state.lists.map((list) => ({
        ...list,
        cards: _.reject(list.cards, (id) => id === cardId),
      }));
    },
    [removeList.fulfilled]: (state, action) => {
      const listId = action.payload;

      state.lists = _.reject(state.lists, { id: listId });
    },
    [newList.fulfilled]: (state, action) => {
      state.lists = [...state.lists, { id: action.payload.id, cards: [] }];
    },
    [newCard.fulfilled]: (state, action) => {
      const cardData = action.payload;
      state.lists = state.lists.map((list) =>
        list.id === cardData.listId ? { ...list, cards: [...list.cards, cardData.id] } : list
      );
    },
  },
});

export const { resetBoard, addLabel } = boardsSlice.actions;

export const selectBoard = ({ scrumboardApp }) => scrumboardApp.board;

export default boardsSlice.reducer;
