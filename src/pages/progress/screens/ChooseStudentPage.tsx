import {FlatList} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {setSelectedStudent} from "../../../features/progress/store/progress-store";
import {ChooseStudentItem} from "../../../entities/student/components/ChooseStudentItem";
import {CustomText} from "../../../shared/ui/CustomText";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseStudent'
>;

type Props = {
  navigation: TeacherNavigationProp;
  studentList: StudentData[];
};

export const ChooseStudentPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {selectedClass, classesWithStudents} = useAppSelector((state: RootState) => state.progress);
  const studentsList = classesWithStudents.find(cl =>
    cl.id === selectedClass.id)?.students;

  const onPressHandler = (s: StudentData) => {
    dispatch(setSelectedStudent(s));
    navigation.navigate('ChooseSubject');
  }

  return (
    <PageLayout>
      {studentsList?.length ? <FlatList
        contentContainerStyle={{gap: 20}}
        data={studentsList}
        renderItem={({item}) =>
          <ChooseStudentItem student={item} key={item.user.login} onPressHandler={onPressHandler}/>}
      /> : <CustomText text={'Cписок учеников пуст'} type={'title'} />}
    </PageLayout>
  );
};