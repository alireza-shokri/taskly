import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addItemTag(state, action) {
      const isTag = state.tags.find(
        (tag) => tag.title.toLowerCase() === action.payload.title.toLowerCase(),
      );
      if (isTag) return;
      state.tags.push(action.payload);
    },
    deleteItemTag(state, action) {
      state.tags = state.tags.filter((item) => item.title !== action.payload);
    },
  },
});

export default tagsSlice.reducer;
export const { addItemTag, deleteItemTag } = tagsSlice.actions;
