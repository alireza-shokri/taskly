import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItemList(state, action) {
      const isItem = state.list.find(
        (item) =>
          item.title.toLowerCase() === action.payload.title.toLowerCase(),
      );
      if (isItem) return;
      state.list.push(action.payload);
    },
    deleteItemList(state, action) {
      state.list = state.list.filter((item) => item.title !== action.payload);
    },
  },
});

export default listSlice.reducer;
export const { addItemList, deleteItemList } = listSlice.actions;
