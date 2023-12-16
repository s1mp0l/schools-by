import {View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {SubjectYearMarks} from "../../../entities/mark/components/SubjectYearMarks";
import {SubjectCurrentMarks} from "../../../entities/mark/components/SubjectCurrentMarks";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {RootState} from "../../../app/store";

export const ProgressSubjectDetailPage = () => {
  const {
    selectedStudent,
    selectedSubject,
    studentSubjects,
  } = useAppSelector((state) => state.progress)

  const dispatch = useAppDispatch();
  const {isTeacher, data} = useAppSelector((state: RootState) => state.user);

  const student = isTeacher ?
    selectedStudent :
    (data as StudentData);

  const subjectWithMarks = studentSubjects.find(s =>
    s.id === selectedSubject.id
  );
  const studentMarks = subjectWithMarks?.marks || [] as MarkData[];

  return (
    <View>
      <PageLayout>
        <SubjectYearMarks data={subjectWithMarks} />
        <SubjectCurrentMarks marks={studentMarks} />
      </PageLayout>
    </View>
  );
};