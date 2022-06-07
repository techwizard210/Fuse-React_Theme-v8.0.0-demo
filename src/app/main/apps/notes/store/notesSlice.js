import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotes = createAsyncThunk('notesApp/notes/getNotes', async (routeParams) => {
  const { filter, id } = routeParams;

  let url;

  if (routeParams.filter === 'labels') {
    url = `/api/notes/labels/${id}`;
  }

  if (routeParams.filter === 'archive') {
    url = `/api/notes/archive`;
  }

  if (routeParams.filter === 'reminders') {
    url = `/api/notes/reminders`;
  }

  if (!routeParams.filter) {
    url = `/api/notes`;
  }

  const response = await axios.get(url);
  const data = await response.data;

  return data;
});

export const createNote = createAsyncThunk('notesApp/notes/createNote', async (note) => {
  const response = await axios.post('/api/notes', note);
  const data = await response.data;

  return data;
});

export const updateNote = createAsyncThunk('notesApp/notes/updateNote', async (note) => {
  const response = await axios.put(`/api/notes/${note.id}`, note);
  const data = await response.data;

  return data;
});

export const removeNote = createAsyncThunk(
  'notesApp/notes/removeNote',
  async (id, { dispatch, getState }) => {
    const response = await axios.delete(`/api/notes/${id}`);
    const data = await response.data;

    dispatch(closeNoteDialog());

    return data;
  }
);

const notesAdapter = createEntityAdapter({});

export const {
  selectAll: selectNotes,
  selectEntities: selectNotesEntities,
  selectById: selectNoteById,
} = notesAdapter.getSelectors((state) => state.notesApp.notes);

const notesSlice = createSlice({
  name: 'notesApp/notes',
  initialState: notesAdapter.getInitialState({
    searchText: '',
    noteDialogId: null,
    variateDescSize: true,
  }),
  reducers: {
    setNotesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
    resetNotesSearchText: (state, action) => {
      state.searchText = '';
    },
    toggleVariateDescSize: (state, action) => {
      state.variateDescSize = !state.variateDescSize;
    },
    openNoteDialog: (state, action) => {
      state.noteDialogId = action.payload;
    },
    closeNoteDialog: (state, action) => {
      state.noteDialogId = action.null;
    },
  },
  extraReducers: {
    [getNotes.fulfilled]: notesAdapter.setAll,
    [createNote.fulfilled]: notesAdapter.addOne,
    [updateNote.fulfilled]: notesAdapter.upsertOne,
    [removeNote.fulfilled]: notesAdapter.removeOne,
  },
});

export const {
  setNotesSearchText,
  resetNotesSearchText,
  toggleVariateDescSize,
  openNoteDialog,
  closeNoteDialog,
} = notesSlice.actions;

export const selectVariateDescSize = ({ notesApp }) => notesApp.notes.variateDescSize;

export const selectSearchText = ({ notesApp }) => notesApp.notes.searchText;

export const selectDialogNoteId = ({ notesApp }) => notesApp.notes.noteDialogId;

export const selectDialogNote = createSelector(
  [selectDialogNoteId, selectNotesEntities],
  (noteId, notesEntities) => {
    return notesEntities[noteId];
  }
);

export default notesSlice.reducer;
