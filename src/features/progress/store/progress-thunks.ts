import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../../shared/lib/api";

interface FetchCurrentMarksProps {
  studentId: number;
  subjectId: number;
}

export const fetchClassStudents = createAsyncThunk<
  StudentData[],
  number
>(
  'progress/fetchClassStudents', async (id: number) => {

    const response = await API.request({
      path: `students/class_id=${id}`,
      method: 'GET',
    });

    return (await response.json()) as StudentData[];
  });

export const fetchStudentYearMarks = createAsyncThunk<
  MarkData[],
  number
>(
  'progress/fetchStudentYearMarks', async (studentId: number) => {

    const response = await API.request({
      path: `students/class_id=${studentId}`,
      method: 'GET',
    });

    return (await response.json()) as MarkData[];
  });

export const fetchStudentCurrentMarks = createAsyncThunk<
  MarkData[],
  FetchCurrentMarksProps
>(
  'progress/fetchStudentCurrentMarks', async (fetchMarksData: FetchCurrentMarksProps) => {

    const {studentId, subjectId } = fetchMarksData;

    const response = await API.request({
      path: `students/semester_marks`,
      query: {
        student_id: studentId.toString(),
        subject_id: subjectId.toString()
      },
      method: 'GET',
    });
    return (await response.json()) as MarkData[];
  });