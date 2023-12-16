import {API} from "../../../shared/lib/api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {customDateToString} from "../../../shared/lib/utils";
import {RootState} from "../../../app/store";

interface FetchClassLessonsForDayProps {
  classId: number;
  date: string;
}

interface FetchClassLessonsForWeekProps {
  classId: number;
  dates: string[];
}

interface FetchTeacherLessonsForDayProps {
  teacherId: number;
  date: string;
}

interface FetchTeacherLessonsForWeekProps {
  teacherId: number;
  dates: string[];
}

/** Запрашивает уроки все указанного класса на день. */
export const fetchClassLessonsForDay = createAsyncThunk<
  LessonData[],
  FetchClassLessonsForDayProps
>(
  'progress/fetchClassLessonsForDay',
  async (
    fetchData: FetchClassLessonsForDayProps, {getState}
  ) => {

    const {currentWeek, weekDaysLessons} = (getState() as RootState).diary;
    const inWeek = currentWeek?.findIndex(d =>
      customDateToString(d) === fetchData.date
    );
    if (inWeek !== -1) return weekDaysLessons[inWeek];

    const response = await API.request({
      path: `lessons/for_class_id=${fetchData.classId}`,
      method: 'GET',
      query: {
        date: fetchData.date
      }
    });
    return (await response.json()) as LessonData[];
  });

/** Запрашивает уроки все указанного класса на неделю. */
export const fetchClassLessonsForWeek = createAsyncThunk<
  LessonData[][],
  FetchClassLessonsForWeekProps
>(
  'progress/fetchClassLessonsForWeek',
  async (fetchData: FetchClassLessonsForWeekProps
  ) => {

    const weekDaysLessons = [] as LessonData[][];

    for (let i = 0; i < fetchData.dates.length; i++) {
      const response = await API.request({
        path: `lessons/for_class_id=${fetchData.classId}`,
        method: 'GET',
        query: {
          date: fetchData.dates[i]
        }
      });
      weekDaysLessons.push((await response.json()) as LessonData[]);
    }

    return weekDaysLessons;
  });

/** Запрашивает уроки все указанного класса на день. */
export const fetchTeacherLessonsForDay = createAsyncThunk<
  LessonData[],
  FetchTeacherLessonsForDayProps
>(
  'progress/fetchTeacherLessonsForDay',
  async (
    fetchData: FetchTeacherLessonsForDayProps, {getState}
  ) => {

    const {currentWeek, weekDaysLessons} = (getState() as RootState).diary;
    const inWeek = currentWeek?.findIndex(d =>
      customDateToString(d) === fetchData.date
    );
    if (inWeek !== -1) return weekDaysLessons[inWeek];

    const response = await API.request({
      path: `lessons/teacher_id=${fetchData.teacherId}`,
      method: 'GET',
      query: {
        date: fetchData.date
      }
    });
    return (await response.json()) as LessonData[];
  });

/** Запрашивает уроки все указанного класса на неделю. */
export const fetchTeacherLessonsForWeek = createAsyncThunk<
  LessonData[][],
  FetchTeacherLessonsForWeekProps
>(
  'progress/fetchTeacherLessonsForWeek',
  async (fetchData: FetchTeacherLessonsForWeekProps
  ) => {

    const weekDaysLessons = [] as LessonData[][];

    for (let i = 0; i < fetchData.dates.length; i++) {
      const response = await API.request({
        path: `lessons/teacher_id=${fetchData.teacherId}`,
        method: 'GET',
        query: {
          date: fetchData.dates[i]
        }
      });
      weekDaysLessons.push((await response.json()) as LessonData[]);
    }

    return weekDaysLessons;
  });