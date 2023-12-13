import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const diarySlice = createSlice({
  name: "progress",
  initialState: {
    currentDay: '',
  },
  reducers: {
    setCurrentDay(state, action: PayloadAction<string>) {
      state.currentDay = action.payload;
    },
  },
})

export const {
  setCurrentDay
} = diarySlice.actions;