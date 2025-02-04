import { createSlice } from "@reduxjs/toolkit";
type searchProps = {
  value: string | null;
};

const initialState: searchProps = {
  value: null,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFunck: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchFunck } = search.actions;
export default search.reducer;
