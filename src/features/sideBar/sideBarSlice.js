import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarVisible: false,
  inputValue: "",
  dragStartX: 0,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarVisible(state, action) {
      state.isSidebarVisible = action.payload
        ? action.payload
        : !state.isSidebarVisible;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setDragStartX(state, action) {
      state.dragStartX = action.payload;
    },
  },
});

export const getNotesLen = (state) => state.notes.notes.length;

export default sidebarSlice.reducer;
export const { setSidebarVisible, setInputValue, setDragStartX } =
  sidebarSlice.actions;
