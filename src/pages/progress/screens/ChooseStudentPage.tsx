import {FlatList} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {fetchClassStudents} from "../../../features/progress/store/progress-thunks";
import {setSelectedStudent} from "../../../features/progress/store/progress-store";
import {ChooseStudentItem} from "../../../entities/student/components/ChooseStudentItem";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseStudent'
>;

type Props = {
  navigation: TeacherNavigationProp;
};

export const ChooseStudentPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {selectedClass, studentsList} = useAppSelector((state: RootState) => state.progress);

  useEffect(() => {
    dispatch(fetchClassStudents(selectedClass.id));
  }, []);

  const onPressHandler = (s: StudentData) => {
    dispatch(setSelectedStudent(s));
    navigation.navigate('SubjectDetail');
  }

  return (
    <PageLayout>
      <FlatList
        contentContainerStyle={{gap: 20}}
        data={studentsList}
        renderItem={({item}) =>
          <ChooseStudentItem student={item} key={item.user.login} onPressHandler={onPressHandler}/>}
      />
    </PageLayout>
  );
};