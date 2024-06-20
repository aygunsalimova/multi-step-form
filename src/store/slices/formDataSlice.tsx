// src/store/slices/formDataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

const initialState: IFormInput = {
  name: '',
  email: '',
  phone: '',
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<IFormInput>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formDataSlice.actions;


