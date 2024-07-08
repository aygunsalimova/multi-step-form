import { configureStore } from '@reduxjs/toolkit'
import { formModeSlice } from './slices/formModeSlice'
import { pageStepSlice } from './slices/pageStepSlice'
import { formDataSlice } from './slices/formDataSlice';
import { planSlice } from './slices/planSlice';
import { addOnsSlice } from './slices/addOnsSlice';

export const store = configureStore({
  reducer: {
    formMode: formModeSlice.reducer,
    pageStep: pageStepSlice.reducer,
    formData: formDataSlice.reducer,
    plan: planSlice.reducer,
    addOns: addOnsSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;