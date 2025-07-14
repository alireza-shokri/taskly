import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./common/Tags/TagsSlice";
import listSlice from "./common/Lists/listSlice";
import tasksSlice from "./features/task/taskSlice";
import notesSlice from "./features/notes/notesSlice";
import SideBarSlice from "./features/sideBar/sideBarSlice";
// تابع برای بارگذاری state ذخیره‌شده
const loadState = () => {
  try {
    const persistedState = {};
    ['list', 'tags', 'tasks', 'notes'].forEach(sliceName => {
      const serializedState = localStorage.getItem(`redux-${sliceName}`);
      if (serializedState !== null) {
        persistedState[sliceName] = JSON.parse(serializedState);
      }
    });
    return persistedState;
  } catch (err) {
    console.error('Error loading state from localStorage', err);
    return undefined;
  }
};

const preloadedState = loadState();

// ساخت store
const store = configureStore({
  reducer: {
    list: listSlice,
    tags: tagsSlice,
    tasks: tasksSlice,
    notes: notesSlice,
    sideBar:SideBarSlice
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  try {
    Object.keys(state).forEach(sliceName => {
      if(sliceName!=='sideBar')
      localStorage.setItem(`redux-${sliceName}`, JSON.stringify(state[sliceName]));
    });
  } catch (err) {
    console.error('Err saving state to localStorage', err);
  }
});

export default store;
