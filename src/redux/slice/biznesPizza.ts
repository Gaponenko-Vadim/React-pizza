import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface PizzaItem {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

interface PizzaState {
  items: PizzaItem[];
  status: "loading" | "success" | "error";
}

const initialState: PizzaState = {
  items: [],
  status: "loading",
};

export const pizzaAxios = createAsyncThunk(
  "pizza/pizzaAxios",
  async (params: {
    activeIndex: number;
    activeSortProperty: string;
    search: string;
    paginationIteam: number;
  }) => {
    const { activeIndex, activeSortProperty, search, paginationIteam } = params;
    const { data } = await axios.get(
      `https://669d26e115704bb0e3054723.mockapi.io/item?page=${paginationIteam}&limit=4&category=${
        activeIndex > 0 ? activeIndex : ""
      }&sortby=${activeSortProperty}${search}`
    );

    return data;
  }
);

const biznesPizza = createSlice({
  name: "biznesPizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(pizzaAxios.pending, (state) => {
        state.items = [];
      })
      .addCase(
        pizzaAxios.fulfilled,
        (state, action: PayloadAction<PizzaItem[]>) => {
          state.items = action.payload;
          state.status = "success";
        }
      )
      .addCase(pizzaAxios.rejected, (state) => {
        state.items = [];
        state.status = "error";
      });
  },
});

export const { setItems } = biznesPizza.actions;
export default biznesPizza.reducer;
