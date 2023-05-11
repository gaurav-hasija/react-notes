import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload); // Add the payload to the notes array
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload); // Filter out the note with the specified ID
    },
    updateNote: (state, action) => {
      const { id, title, note } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex >= 0) {
        state.notes[noteIndex].title = title;
        state.notes[noteIndex].note = note;
      }
    },
    searchNotes: (state, action) => {
      const { value } = action.payload;
      state.filteredNotes = state.notes.filter(
        (noteItem) =>
          (noteItem.title && noteItem.title.includes(value)) ||
          (noteItem.name && noteItem.name.includes(value))
      );
    },
  },
});

// Export the action creators for use in components
export const { addNote, deleteNote, updateNote, searchNotes } =
  noteSlice.actions;

export default noteSlice.reducer;
