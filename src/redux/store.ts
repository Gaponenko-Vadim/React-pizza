import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./slice/counterSlice";
import filter from "./slice/filter";
import search from "./slice/search";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    filter,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
