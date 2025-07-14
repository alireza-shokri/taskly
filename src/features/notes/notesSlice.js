import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.unshift(action.payload);
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const getNotesLen = (state) => state.notes.notes.length;

export default notesSlice.reducer;
export const { addNote, deleteNote } = notesSlice.actions;
