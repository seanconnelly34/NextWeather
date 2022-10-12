import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  selectedCity: "",
};

// Actual Slice
export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCityState(state, action) {
      state.selectedCity = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.selectedCity,
        };
      },
    },
  },
});

export const { setCityState } = citySlice.actions;

export const selectCityState = (state) => state.city.selectedCity;

export default citySlice.reducer;
