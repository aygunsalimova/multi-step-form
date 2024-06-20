// src/store/slices/addOnsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddOnsState {
  selectedAddOns: string[];
}

const initialState: AddOnsState = {
  selectedAddOns: [],
};

export const addOnsSlice = createSlice({
  name: 'addOns',
  initialState,
  reducers: {
    setAddOns(state, action: PayloadAction<{ selectedAddOns: string[] }>) {
      state.selectedAddOns = action.payload.selectedAddOns;
    },
  },
});

export const { setAddOns } = addOnsSlice.actions;

