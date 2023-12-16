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
  fetchClassLessonsForWeek,
  fetchTeacherLessonsForDay,
  fetchTeacherLessonsForWeek
} from "./diary-thunks";

export const diarySlice = createSlice({
  name: 'diary',
  initialState: {
    currentDay: customDateNow,
    currentWeek: getCurrentWeek(customDateNow),
    dayLessons: [] as LessonData[],
    weekDaysLessons: [] as LessonData[][]
  },
  reducers: {
    setCurrentDay(state, action: PayloadAction<CustomDate>) {
      const date = action.payload;
      state.currentDay = date;
      if (!state?.currentWeek?.find(d =>
        customDateToString(d) === customDateToString(date)
      )) state.currentWeek = getCurrentWeek(date);
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
  }
})

export const {
  setCurrentDay
} = diarySlice.actions;