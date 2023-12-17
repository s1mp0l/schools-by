import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllTeachers, fetchUser, updateNoteSeenStatus} from "./user-thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    parentStudents: [] as StudentData[],
    selectedStudentIndex: 0,
    parentData: {} as ParentData,
    isTeacher: false,
    isParent: false,
    data: {} as UserUnionData,
    loading: false,
    authError: '',
    allTeachers: [] as TeacherData[],
  },
  reducers: {
    setUser(state, action: PayloadAction<UserUnionData>) {
      state.data = action.payload;
      state.isParent = false;
      state.isTeacher = false;
      state.parentStudents = [];
      state.selectedStudentIndex = 0;
      state.parentData = {} as ParentData;
      if (state?.data?.user) {
        state.data.user.firstName = state.data.user.firstName.trim();
        state.data.user.lastName = state.data.user.lastName.trim();
        state.data.user.patronymic = state.data.user.patronymic.trim();
        state.isTeacher = action.payload?.user?.userType === 'teacher';
      }
    },
    setParentActiveStudent(state, action: PayloadAction<number>) {
      state.data = state.parentStudents[action.payload];
      state.selectedStudentIndex = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload.user.userType === 'teacher') state.isTeacher = true;
      if (action.payload.user.userType === 'parent') {
        const parentData = action.payload as ParentData;
        state.isParent = true;
        state.parentStudents = parentData.students;
        state.selectedStudentIndex = 0;
        state.parentData = parentData;
        state.data = parentData.students[0];
      } else {
        state.data = action.payload;
      }
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
      if (state.isParent) {
        state.parentData.user.notes = userNotes.map(n => n.id !== action.payload.id ? n : action.payload)
      } else {
        state.data.user.notes = userNotes.map(n => n.id !== action.payload.id ? n : action.payload)
      }

      state.loading = false
    })
    builder.addCase(fetchAllTeachers.fulfilled, (state, action) => {
      state.allTeachers = action.payload;
      state.allTeachers = state.allTeachers.map(t => ({
        ...t,
        user: {
          ...t.user,
          patronymic: t.user.patronymic.trim(),
          firstName: t.user.firstName.trim(),
          lastName: t.user.lastName.trim(),
        }
      }))
    })
  }
})

export const { setUser, setParentActiveStudent } = userSlice.actions;