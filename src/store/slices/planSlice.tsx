// src/store/slices/planSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlanState {
  id: string | null;
  text: string;
  price: string;
  icon: string;
  period: string;
}

const initialState: PlanState = {
  id: null,
  text: '',
  price: '',
  icon: '',
  period: "Monthly"
};

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlan(state, action: PayloadAction<PlanState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPlan } = planSlice.actions;
