import {PageLayout} from "../../../shared/ui/PageLayout";
import {setSelectedLesson} from "../../../features/progress/store/progress-store";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {useEffect} from "react";
import {fetchClassLessons} from "../../../features/progress/store/progress-thunks";
import {FlatList, View} from "react-native";
import {DayLesson} from "../../../entities/lesson/components/DayLesson";
import {CustomText} from "../../../shared/ui/CustomText";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseLesson'
>;

type Props = {
  navigation: TeacherNavigationProp;
};

export const ChooseLessonPage = ({navigation}: Props) => {
  const {classLessons, selectedClass, selectedSubject, studentSubjects} =
    useAppSelector(state => state.progress);
  const {isTeacher, data} = useAppSelector(state => state.user);
  const teacherId = (data as TeacherData).id;
  const dispatch = useAppDispatch();

  const lessons = classLessons.filter(l =>
    l.subject === selectedSubject.title &&
    studentSubjects.every(subject =>
      subject.marks.every(m =>
        m.lesson !== l.id
      )
    )
  );

  useEffect(() => {
    dispatch(fetchClassLessons(selectedClass.id))
  }, []);

  const onPressHandler = (c: LessonData) => {
    dispatch(setSelectedLesson(c));
    navigation.navigate('AddMark');
  }

  if (!isTeacher) return <CustomText text={'Вы должны быть учителем чтобы добавлять оценку!'} type={'title'} />

  return (
    <PageLayout>
      <FlatList
        contentContainerStyle={{gap: 20}}
        data={lessons}
        renderItem={({item}) =>
          <View>
            <CustomText text={item?.date || ''} type={'subTitle'} />
            <DayLesson lesson={{...item, mark: null}} key={item.id} onPressHandler={onPressHandler}/>
          </View>}
      />
    </PageLayout>
  );
};

export default ChooseLessonPage;