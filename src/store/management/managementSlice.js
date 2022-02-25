import { createSlice } from '@reduxjs/toolkit'

export const managementSlice = createSlice({
  name: 'management',
  initialState: {
    token: null,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = managementSlice.actions

export default managementSlice.reducer