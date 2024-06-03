import { configureStore } from '@reduxjs/toolkit'
import { formModeSlice } from './slices/cardSlice'
import { pageStepSlice } from './slices/pageStepSlice'

export const store = configureStore({
  reducer: {
    formMode: formModeSlice.reducer,
    pageStep: pageStepSlice.reducer
  }
})
