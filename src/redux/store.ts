import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./slice/counterSlice";
import filter from "./slice/filter";
import search from "./slice/search";
import pizzaSlice from "./slice/pizzaSlice";
import biznesPizza from "./slice/biznesPizza";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    filter,
    search,
    pizzaSlice,
    biznesPizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
