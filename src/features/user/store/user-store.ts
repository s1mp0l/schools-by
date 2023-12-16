import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllTeachers, fetchUser, updateNoteSeenStatus} from "./user-thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isTeacher: false,
    data: {} as UserUnionData,
    loading: false,
    authError: '',
    allTeachers: [] as TeacherData[],
  },
  reducers: {
    setUser(state, action: PayloadAction<UserUnionData>) {
      state.data = action.payload;
      state.isTeacher = action.payload?.user?.userType === 'teacher';
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      if (action.payload.user.userType === 'teacher') state.isTeacher = true;
      state.loading = false;
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.authError = action.payload as string;
      } else {
        state.authError = action.error.message || '';
      }
    })
    builder.addCase(updateNoteSeenStatus.fulfilled, (state, action) => {
      const userNotes = state.data.user.notes as NoteData[];
      state.data.user.notes = userNotes.map(n => n.id !== action.payload.id ? n : action.payload)
      state.loading = false
    })
    builder.addCase(fetchAllTeachers.fulfilled, (state, action) => {
      state.allTeachers = action.payload;
    })
  }
})

export const { setUser } = userSlice.actions;