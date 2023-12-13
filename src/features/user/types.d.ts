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

interface LessonData {
  id: number;
  date: string;
  time: string;
  task: string;
  nclass: number;
  teacher: number;
  subject: number;
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