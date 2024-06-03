import { createSlice } from '@reduxjs/toolkit'

export const formModeSlice = createSlice({
  name: 'formMode',
  initialState: {
    mode: false
  },
  reducers: {
    // toggleMode: (state, action) => {
    //     state.mode = action.payload
    // }  
    // dispatchin ichine value gondermek lazimdi
    // toggle mode without args
     toggleMode: (state) => {
        state.mode = !state.mode
    } 
  }
})

export const { toggleMode } = formModeSlice.actions
