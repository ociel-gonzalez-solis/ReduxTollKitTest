import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, { payload }) => {
      state.value += payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
