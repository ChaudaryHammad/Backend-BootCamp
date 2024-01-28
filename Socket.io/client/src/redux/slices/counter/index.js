import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: { value: 0 }, // Use an object with a 'value' property
  name: 'counter',
  reducers: {
    increment: (state) => {
      return { value: state.value + 1 };
    },
    decrement: (state) => {
      return { value: state.value - 1 };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
