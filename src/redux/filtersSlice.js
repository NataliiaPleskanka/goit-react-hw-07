import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, actions) {
      return actions.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const getFilter = (state) => state.filter;
export const filterReducer = filterSlice.reducer;
