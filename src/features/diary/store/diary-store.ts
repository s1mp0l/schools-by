import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  customDateFromDateObj,
  customDateNow,
  customDateToString,
  getCurrentWeek,
  parseDateString, sortLessonsByTime
} from "../../../shared/lib/utils";
import {fetchClassLessons} from "../../progress/store/progress-thunks";
import {
  fetchClassLessonsForDay,
  fetchClassLessonsForWeek, fetchLessonWithStudentMarks,
  fetchTeacherLessonsForDay,
  fetchTeacherLessonsForWeek, updateAbsenceStatus
} from "./diary-thunks";
import {updateNoteSeenStatus} from "../../user/store/user-thunks";

export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    currentDay: customDateNow,
    currentWeek: getCurrentWeek(customDateNow),
    dayLessons: [] as LessonData[],
    weekDaysLessons: [] as LessonData[][],
    selectedLesson: {} as LessonWithStudentsMarks,
    selectedLessonId: 0,
    selectedStudent: {} as StudentData,
  },
  reducers: {
    setCurrentDay(state, action: PayloadAction<CustomDate>) {
      const date = action.payload;
      state.currentDay = date;
      if (!state?.currentWeek?.find(d =>
        customDateToString(d) === customDateToString(date)
      )) state.currentWeek = getCurrentWeek(date);
    },
    setSelectedLessonId(state, action: PayloadAction<number>) {
      state.selectedLessonId = action.payload;
      state.selectedLesson = {} as LessonWithStudentsMarks;
    },
    setDiarySelectedStudent(state, action: PayloadAction<StudentData>) {
      state.selectedStudent = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchClassLessonsForDay.fulfilled, (state, action) => {
      state.dayLessons = sortLessonsByTime(action.payload);
    })
    builder.addCase(fetchClassLessonsForWeek.fulfilled, (state, action) => {
      state.weekDaysLessons = action.payload.map(day => sortLessonsByTime(day));
    })
    builder.addCase(fetchTeacherLessonsForDay.fulfilled, (state, action) => {
      state.dayLessons = sortLessonsByTime(action.payload);
    })
    builder.addCase(fetchTeacherLessonsForWeek.fulfilled, (state, action) => {
      state.weekDaysLessons = action.payload.map(day => sortLessonsByTime(day));
    })
    builder.addCase(fetchLessonWithStudentMarks.fulfilled, (state, action) => {
      state.selectedLesson = action.payload;
    })
    builder.addCase(updateAbsenceStatus.fulfilled, (state, action) => {
      const absence = action.payload;
      if (state.selectedLesson.id !== absence.lesson) return;
      const student = state.selectedLesson.students.find(s =>
        s.id === absence.student
      );
      if (student) student.absence = absence;
    })
  }
})

export const {
  setCurrentDay,
  setSelectedLessonId,
  setDiarySelectedStudent
} = diarySlice.actions;