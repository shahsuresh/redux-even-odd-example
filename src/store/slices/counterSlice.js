import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count = state.count + 1;
    },
    decreaseCount: (state, action) => {
      state.count = state.count - 1;
    },
    resetCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
