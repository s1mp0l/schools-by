import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchClassStudents, fetchStudentCurrentMarks, fetchStudentYearMarks} from "./progress-thunks";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    studentsList: [] as StudentData[],
    selectedSubject: {} as SubjectData,
    selectedClass: {} as ClassData,
    selectedStudent: {} as StudentData,
    selectedLesson: {} as LessonData,
    currentMarks: [] as MarkData[],
    yearMarks: [] as MarkData[],
  },
  reducers: {
    setSelectedSubject(state, action: PayloadAction<SubjectData>) {
      state.selectedSubject = action.payload;
    },
    setSelectedClass(state, action: PayloadAction<ClassData>) {
      state.selectedClass = action.payload;
    },
    setSelectedStudent(state, action: PayloadAction<StudentData>) {
      state.selectedStudent = action.payload;
    },
    setSelectedLesson(state, action: PayloadAction<LessonData>) {
      state.selectedLesson = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchClassStudents.fulfilled, (state, action) => {
      state.studentsList = action.payload;
    })
    builder.addCase(fetchStudentYearMarks.fulfilled, (state, action) => {
      state.yearMarks = action.payload;
    })
    builder.addCase(fetchStudentCurrentMarks.fulfilled, (state, action) => {
      state.currentMarks = action.payload;
    })
  }
})

export const {
  setSelectedSubject,
  setSelectedClass,
  setSelectedStudent,
  setSelectedLesson
} = progressSlice.actions;