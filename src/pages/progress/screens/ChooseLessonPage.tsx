import {PageLayout} from "../../../shared/ui/PageLayout";
import {setSelectedLesson} from "../../../features/progress/store/progress-store";
import {useAppDispatch} from "../../../app/hooks";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseLesson'
>;

type Props = {
  navigation: TeacherNavigationProp;
};

export const ChooseLessonPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const lessons = [];

  const onPressHandler = (c: LessonData) => {
    dispatch(setSelectedLesson(c));
    navigation.navigate('AddMark');
  }

  return (
    <PageLayout>
      {/*<FlatList*/}
      {/*  contentContainerStyle={{gap: 20}}*/}
      {/*  data={lessons}*/}
      {/*  renderItem={({item}) =>*/}
      {/*    <ChooseStudentItem student={item} key={item.user.login} onPressHandler={onPressHandler}/>}*/}
      {/*/>*/}
    </PageLayout>
  );
};

export default ChooseLessonPage;