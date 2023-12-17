import {FlatList} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {ChooseSubjectItem} from "../../../entities/subject/components/ChooseSubjectItem";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {setSelectedSubject} from "../../../features/progress/store/progress-store";
import {useEffect} from "react";
import {fetchAllStudentMarks} from "../../../features/progress/store/progress-thunks";
import {ProgressCurrentParamList} from "../../../processes/progress/ProgressCurrentNavigator";
import {CustomText} from "../../../shared/ui/CustomText";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseSubject'
>;

type ProgressCurrentNavigationProp = StackNavigationProp<
  ProgressCurrentParamList,
  'ChooseSubject'
>;

type Props = {
  navigation: TeacherNavigationProp | ProgressCurrentNavigationProp;
};

export const ChooseSubjectPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch()

  const {data, isTeacher} = useAppSelector((state: RootState) => state.user);
  const {studentSubjects, selectedStudent} =
    useAppSelector((state: RootState) => state.progress);

  const studentId = isTeacher ? selectedStudent.id : (data as StudentData).id;
  useEffect(() => {
    if (!studentId) return;
    dispatch(fetchAllStudentMarks(studentId));
  }, [studentId]);

  const onPressHandler = (s: SubjectData) => {
    dispatch(setSelectedSubject(s));
    if (isTeacher) (navigation as TeacherNavigationProp).navigate('SubjectDetail');
    else (navigation as ProgressCurrentNavigationProp).navigate('SubjectDetail');
  }

  const subjects = isTeacher ?
    (data as TeacherData).subjects.map(s => {
      return studentSubjects.find(sb => sb.id === s.id) ||
        {...s, marks: [], yearMark: 0, currentSemesterMark: 0, semesterMarks: []} as SubjectWithYearMarks
    }) :
    studentSubjects;

  return (
    <PageLayout>
      {subjects?.length ? <FlatList
        contentContainerStyle={{gap: 20}}
        data={subjects}
        extraData={selectedStudent}
        renderItem={({item, index}) =>
          <ChooseSubjectItem subject={item} key={`${item.title} ${index}`} onPressHandler={onPressHandler}/>}
      /> : <CustomText text={'Нет оценок ни по одному из предметов'} type={'title'}/>}
    </PageLayout>
  );
};