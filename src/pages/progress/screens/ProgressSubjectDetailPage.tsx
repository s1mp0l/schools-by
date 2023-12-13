import {View} from "react-native";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {SubjectYearMarks} from "../../../entities/mark/components/SubjectYearMarks";
import {SubjectCurrentMarks} from "../../../entities/mark/components/SubjectCurrentMarks";
import {fetchStudentCurrentMarks, fetchStudentYearMarks} from "../../../features/progress/store/progress-thunks";
import {PageLayout} from "../../../shared/ui/PageLayout";

export const ProgressSubjectDetailPage = () => {
  const {
    currentMarks,
    yearMarks,
    selectedStudent,
    selectedSubject
  } = useAppSelector((state) => state.progress)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStudentYearMarks(selectedStudent.id));
    dispatch(fetchStudentCurrentMarks({studentId: selectedStudent.id, subjectId: selectedSubject.id}));
  }, []);

  return (
    <View>
      <PageLayout>
        <SubjectYearMarks marks={yearMarks} />
        <SubjectCurrentMarks marks={currentMarks} />
      </PageLayout>
    </View>
  );
};