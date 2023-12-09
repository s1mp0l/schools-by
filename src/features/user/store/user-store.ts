import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser, updateNoteSeenStatus} from "./user-thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as UserData,
    loading: false
  },
  reducers: {
    setUser(state, action: PayloadAction<UserData>) {
      state.user = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(fetchUser.rejected, state => {
      state.loading = false
    })
    builder.addCase(updateNoteSeenStatus.fulfilled, (state, action) => {
      const userNotes = state.user.notes as NoteData[];
      const newNotes = userNotes.map(n => n.id !== action.payload.id ? n : action.payload)
      state.user = {...state.user, notes: newNotes}
      state.loading = false
    })
  }
})

export const { setUser } = userSlice.actions;