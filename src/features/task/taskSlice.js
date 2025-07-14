import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.unshift(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    statusTask(state, action) {
      const findItem = state.tasks.find((item) => item.id === action.payload);
      findItem.status = !findItem.status;
    },
  },
});

export const getTaskLen = (state) => state.tasks.tasks.length;

export default taskSlice.reducer;
export const { addTask, deleteTask, statusTask } = taskSlice.actions;
