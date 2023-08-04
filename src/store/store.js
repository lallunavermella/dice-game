import { configureStore } from "@reduxjs/toolkit";

import { boardReducer, diceReducer } from "./index";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      dice: diceReducer,
      board: boardReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
