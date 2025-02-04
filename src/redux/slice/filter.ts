import { createSlice } from "@reduxjs/toolkit";
import { SortItem } from "../../types/types";
type FilterProps = {
  activId: number;
  sortItem: SortItem;
};

const initialState: FilterProps = {
  activId: 0,
  sortItem: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    activIdFunck: (state, action) => {
      state.activId = action.payload;
    },
    activeSort: (state, action) => {
      state.sortItem = action.payload;
    },
  },
});

export const { activIdFunck, activeSort } = filter.actions;

export default filter.reducer;
