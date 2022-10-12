import { configureStore } from "@reduxjs/toolkit";
import { citySlice } from "./citySlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [citySlice.name]: citySlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
