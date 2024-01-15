import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
  actualValue: number[];
};

const initialState: CounterType = { count: 0, actualValue: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
    decrement: (state) => {
      state.count = state.count - 1;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
      if (state.count % 5 === 0) {
        state.actualValue.push(state.count);
      }
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
