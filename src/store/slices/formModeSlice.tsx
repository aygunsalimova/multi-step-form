// store/slices/formModeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

// Function to load the state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('formMode');
    if (serializedState === null) {
      return { mode: false }; // Default initial state
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return { mode: false }; // Default initial state in case of error
  }
};

// Function to save the state to local storage
const saveStateToLocalStorage = (state: { mode: boolean }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('formMode', serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

const initialState = loadStateFromLocalStorage();

export const formModeSlice = createSlice({
  name: 'formMode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
      saveStateToLocalStorage(state); // Save state to local storage whenever it changes
    },
  },
});

export const { toggleMode } = formModeSlice.actions;

export default formModeSlice.reducer;
