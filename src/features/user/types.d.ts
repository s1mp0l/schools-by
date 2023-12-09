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