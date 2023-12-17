import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchAddStudentMark,
  fetchAllStudentMarks, fetchClassesStudents,
  fetchClassLessons,
} from "./progress-thunks";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    // studentsList: [] as StudentData[],
    selectedSubject: {} as SubjectData,
    selectedClass: {} as ClassData,
    selectedStudent: {} as StudentData,
    selectedLesson: {} as LessonData,

    classesWithStudents: {} as ClassWithStudents[],
    classLessons: [] as LessonData[],
    studentSubjects: [] as SubjectWithYearMarks[]
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
    builder.addCase(fetchClassesStudents.fulfilled, (state, action) => {
      state.classesWithStudents = action.payload;
    })
    builder.addCase(fetchClassLessons.fulfilled, (state, action) => {
      state.classLessons = action.payload;
    })
    builder.addCase(fetchAllStudentMarks.fulfilled, (state, action) => {
      state.studentSubjects = action.payload;
    })
    builder.addCase(fetchAllStudentMarks.rejected, (state) => {
      console.log('rejected');
      state.studentSubjects = [] as SubjectWithYearMarks[];
    })
    builder.addCase(fetchAddStudentMark.fulfilled, (state, action) => {
      const addedMark = action.payload;
      const addedSubject = state.studentSubjects.find(s =>
        s.id === addedMark.subject
      );
      if (!addedSubject) state.studentSubjects =
        [...state.studentSubjects, ({
          ...state.selectedSubject,
          marks: [],
          yearMark: 0,
          semesterMarks: [],
          currentSemesterMark: 0,
        } as SubjectWithYearMarks)
        ];

      const subject = state.studentSubjects?.find(s =>
        s.id === addedMark.subject);

      if (subject) {
        subject?.marks?.push(addedMark)
        const newCurrentSemMark =
        subject.currentSemesterMark = subject?.marks ?
          +(subject?.marks?.reduce((s, m) =>
              s += m.value, 0)
            / subject?.marks?.length).toFixed(2) : 0;
      }
    })
  }
})

export const {
  setSelectedSubject,
  setSelectedClass,
  setSelectedStudent,
  setSelectedLesson
} = progressSlice.actions;