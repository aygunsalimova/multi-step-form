import { configureStore } from '@reduxjs/toolkit'
import { formModeSlice } from './slices/cardSlice'
import { pageStepSlice } from './slices/pageStepSlice'
import { formDataSlice } from './slices/formDataSlice';
import { planSlice } from './slices/planSlice';
import { addOnsSlice } from './slices/addOnsSlice';
import sessionStorageMiddleware from './sessionStorageMiddleware';

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    formMode: formModeSlice.reducer,
    pageStep: pageStepSlice.reducer,
    formData: formDataSlice.reducer,
    plan: planSlice.reducer,
    addOns: addOnsSlice.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;