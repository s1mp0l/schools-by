type UserType = 'teacher' | 'student' | 'parent';

interface UserData {
  id: number;
  userType: string;
  login: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  notes;
}

interface NoteData {
  id: number;
  title: string;
  text: string;
  seenStatus: boolean;
}

interface LoginData {
  login: string;
  password: string;
}

interface ServerError {
  message: string;
}

type UserUnionData = StudentData | TeacherData | ParentData;

interface StudentData {
  id: number;
  user: UserData;
  parents: number[];
  nclass: ClassData;
}

interface ParentData {
  id: number;
  user: UserData;
  students: StudentData[];
}

interface TeacherData {
  id: number;
  user: UserData;
  classes: ClassData[];
  subjects: SubjectData[];
}

interface ClassData {
  id: number;
  letter: string;
  grade: number;
}

interface SubjectData {
  id: number;
  title: string;
}

interface SubjectWithMarks extends SubjectData {
  marks: MarkData[];
}

interface LessonData {
  id: number;
  date?: string;
  time?: string;
  task: string;
  classroom: string;
  nclass: string;
  teacher: number;
  subject: string;
}

interface MarkData {
  id: number;
  value: number;
  lessonDate: string;

  comment?: string;
  isSem?: boolean;
  isYear?: boolean;

  semester?: number;
  student?: number;
  lesson?: number;
  subject?: number;
}

interface SettingsData {
  id: number;
  lang: string;
  darkTheme: boolean;
  fontSize: number;
  notificationsOn: boolean;
  user: number;
}

interface CustomDate {
  day: number;
  month: number;
  year: number;
  weekDayIndex: number;
  weekDayFullName: string;
  weekDayShortName: string;
}

interface LessonWithMark extends LessonData {
  mark: number | null;
}

interface SubjectWithYearMarks extends SubjectWithMarks {
  yearMark: number;
  currentSemesterMark: number;
  semesterMarks: MarkData[];
}

interface MarkListItemProps {
  value: number;
  text: string;
  color?: string;
  isAddButton?: boolean;
}

interface ClassWithStudents extends ClassData {
  students: StudentData[];
}