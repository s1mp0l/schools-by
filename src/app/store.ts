import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../features/user";
import {diarySlice} from "../features/diary/store/diary-store";
import {progressSlice} from "../features/progress/store/progress-store";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    diary: diarySlice.reducer,
    progress: progressSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;