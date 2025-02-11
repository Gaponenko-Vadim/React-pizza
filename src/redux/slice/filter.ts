import { createSlice } from "@reduxjs/toolkit";
import { SortItem } from "../../types/types";
type FilterProps = {
  activId: number;
  paginationIteam: number;
  sortItem: SortItem;
};

const initialState: FilterProps = {
  activId: 0,
  paginationIteam: 1,
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
    setPaginationIteam: (state, action) => {
      state.paginationIteam = action.payload;
    },
    setFilters: (state, action) => {
      state.sortItem = action.payload.sortItem || state.sortItem; // Защита от undefined
      state.paginationIteam = action.payload.paginationIteam;
      state.activId = action.payload.activId || 0;
    },
  },
});

export const { activIdFunck, activeSort, setFilters, setPaginationIteam } =
  filter.actions;

export default filter.reducer;
