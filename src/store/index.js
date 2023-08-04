import { createSlice } from "@reduxjs/toolkit";

export const diceSlice = createSlice({
  name: "dice",
  initialState: {
    value: 1,
  },
  reducers: {
    rollDice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    value: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(rollDice, (state, action) => {
      const rollResult = action.payload;
      const numPositions = rollResult <= 2 ? 1 : rollResult <= 4 ? 3 : 5;
      state.value += numPositions;

      if (state.value > 100) {
        state.value = 100;
      }
    });
  },
});

export const { rollDice } = diceSlice.actions;

export const selectDiceState = (state) => state.dice.value;
export const selectBoardState = (state) => state.board.value;

export const diceReducer = diceSlice.reducer;
export const boardReducer = boardSlice.reducer;
