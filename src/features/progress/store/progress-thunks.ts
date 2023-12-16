import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../../../shared/lib/api";

interface FetchCurrentMarksProps {
  studentId: number;
  subjectId: number;
}

interface FetchAddStudentMarkProps {
  studentId: number;
  lessonId: number;
  value: number;
}

// /** Запрашивает список учеников класса. */
// export const fetchClassStudents = createAsyncThunk<
//   StudentData[],
//   number
// >(
//   'progress/fetchClassStudents',
//   async (id: number) => {
//
//     const response = await API.request({
//       path: `students/class_id=${id}`,
//       method: 'GET',
//     });
//
//     return (await response.json()) as StudentData[];
//   });
//
// /** Запрашивает четвертные и годовую оценки ученика. */
// export const fetchStudentYearMarks = createAsyncThunk<
//   SubjectWithYearMarks[],
//   number
// >(
//   'progress/fetchStudentYearMarks',
//   async (studentId: number) => {
//
//     const responseYearMarks = await API.request({
//       path: `marks/quarterly`,
//       method: 'GET',
//       query: {
//         student_id: studentId.toString()
//       }
//     });
//     const semesterMarks = (await responseYearMarks.json()) as MarkData[];
//     const subjects = Array.from(new Set(marks.map(m => m.subject)));
//
//     const subjectsWithMarks: SubjectWithYearMarks[] = [];
//
//     await Promise.all(subjects.map(async (s) => {
//       const responseSubject = await API.request({
//         path: `subjects/${s}`,
//         method: 'GET',
//       });
//       const subjectData = (await responseSubject.json()) as SubjectData;
//       const subjectMarks = marks.filter(m => m.subject == subjectData.id);
//       const subjectMarksSum = subjectMarks.reduce((counter, m) =>
//         counter += m.value, 0
//       );
//       const subject: SubjectWithYearMarks = ({
//         ...subjectData,
//         semestermarks: subjectMarks,
//         yearMark: +(subjectMarksSum / subjectMarks.length).toFixed(1)
//       });
//       subjectsWithMarks.push(subject)
//     }))
//
//     return subjectsWithMarks;
//   });
//
// /** Запрашивает оценки ученика в этом семестре по заданному предмету. */
// export const fetchStudentCurrentMarks = createAsyncThunk<
//   MarkData[],
//   FetchCurrentMarksProps
// >(
//   'progress/fetchStudentCurrentMarks',
//   async (fetchMarksData: FetchCurrentMarksProps) => {
//
//     const {studentId, subjectId } = fetchMarksData;
//
//     const response = await API.request({
//       path: `students/semester_marks`,
//       query: {
//         student_id: studentId.toString(),
//         subject_id: subjectId.toString()
//       },
//       method: 'GET',
//     });
//     return (await response.json()) as MarkData[];
//   });

/** Запрашивает список учеников класса. */
export const fetchClassesStudents = createAsyncThunk<
  ClassWithStudents[],
  ClassData[]
>(
  'progress/fetchClassesStudents',
  async (classes: ClassData[]) => {

    const classData: ClassWithStudents[] = classes.map(cl => ({...cl, students: []}));

    for (let i = 0; i < classData.length; i++) {
      const response = await API.request({
        path: `students/class_id=${classes[i].id}`,
        method: 'GET',
      });

      classData[i].students = (await response.json()) as StudentData[];
    }

    return classData;
  });

/** Запрашивает уроки все указанного класса. */
export const fetchClassLessons = createAsyncThunk<
  LessonData[],
  number
>(
  'progress/fetchClassLessons',
  async (classId: number) => {

    const response = await API.request({
      path: `lessons/class_id=${classId}`,
      method: 'GET',
    });
    return (await response.json()) as LessonData[];
  });

/** Запрашивает уроки все указанного класса. */
export const fetchAllStudentMarks = createAsyncThunk<
  SubjectWithYearMarks[],
  number
>(
  'progress/fetchAllStudentMarks',
  async (studentId: number) => {

    const responseMarks = await API.request({
      path: `marks/${studentId}`,
      method: 'GET',
    });
    const marks = (await responseMarks.json()) as MarkData[];

    const responseSemesterMarks = await API.request({
      path: `marks/quarterly`,
      method: 'GET',
      query: {
        student_id: studentId.toString()
      }
    });
    const semesterMarks = (await responseSemesterMarks.json()) as MarkData[];

    const subjects = Array.from(
      new Set([...marks, ...semesterMarks].map(m => m.subject))
    );

    const subjectsWithMarks: SubjectWithYearMarks[] = [];

    await Promise.all(subjects.map(async (s) => {
      const responseSubject = await API.request({
        path: `subjects/${s}`,
        method: 'GET',
      });
      const subjectData = (await responseSubject.json()) as SubjectData;

      const subjectMarks = marks.filter(m => m.subject == subjectData.id);
      const subjectSemesterMarks = semesterMarks.filter(m => m.subject == subjectData.id);

      const subjectCurrentSemesterMarksSum = subjectMarks.reduce((counter, m) =>
        counter += m.value, 0
      );
      const subjectCurrentSemesterMark =
        +(subjectCurrentSemesterMarksSum / subjectMarks.length).toFixed(1) || 0;

      const subjectSemesterMarksSum = subjectSemesterMarks.reduce((counter, m) =>
        counter += m.value, 0
      );

      const yearMark = subjectSemesterMarks.length < 4 && subjectCurrentSemesterMark ?
        (+((subjectSemesterMarksSum + subjectCurrentSemesterMark)
          / (subjectSemesterMarks.length + 1)).toFixed(1) || 0) :
        (+(subjectSemesterMarksSum / subjectSemesterMarks.length).toFixed(1) || 0);

      const subject = ({
        ...subjectData,
        marks: subjectMarks,
        semesterMarks: subjectSemesterMarks,
        currentSemesterMark: subjectCurrentSemesterMark,
        yearMark
      });
      subjectsWithMarks.push(subject)
    }))

    return subjectsWithMarks;
  });

/** Запрашивает уроки все указанного класса. */
export const fetchAddStudentMark = createAsyncThunk<
  MarkData,
  FetchAddStudentMarkProps
>(
  'progress/fetchAddStudentMark',
  async (fetchData: FetchAddStudentMarkProps) => {

    const {studentId, lessonId, value} = fetchData;

    const responseSubject = await API.request({
      path: `marks`,
      method: 'POST',
      query: {
        student_id: studentId.toString(),
        lesson_id: lessonId.toString()
      },
      body: JSON.stringify({
        value: value
      })
    });

    const response = (await responseSubject.json()) as MarkData;
    console.log(response);
    return response;
  });