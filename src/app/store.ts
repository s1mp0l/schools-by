import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;