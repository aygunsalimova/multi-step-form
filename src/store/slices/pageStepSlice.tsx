import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    pageStep: 1,
  };

export const pageStepSlice = createSlice({
    name: 'pageStep',
    initialState,
    reducers: {
        incrementPageStep: (state) => {
          state.pageStep += 1;
        },
        decrementPageStep: (state) => {
          state.pageStep -= 1;
        },
      },
})

export const { incrementPageStep, decrementPageStep } = pageStepSlice.actions;