import {FlatList} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {setSelectedStudent} from "../../../features/progress/store/progress-store";
import {ChooseStudentItem} from "../../../entities/student/components/ChooseStudentItem";
import {CustomText} from "../../../shared/ui/CustomText";
import {DiaryTeacherTopTapNavigatorParamList} from "../../../processes/diary/DiaryTeacherTopTabNavigator";
import {updateAbsenceStatus} from "../../../features/diary/store/diary-thunks";

type DiaryTeacherTopTapProp = StackNavigationProp<
  DiaryTeacherTopTapNavigatorParamList,
  'Absence'
>;

type Props = {
  navigation: DiaryTeacherTopTapProp;
};

export const DiaryAbsencePage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {selectedLesson} = useAppSelector((state: RootState) => state.diary);
  const studentsList = selectedLesson.students;

  const onPressHandler = (s: StudentData) => {
    dispatch(updateAbsenceStatus({lessonId: selectedLesson.id, studentId: s.id}));
  }

  return (
    <PageLayout>
      {studentsList?.length ? <FlatList
        contentContainerStyle={{gap: 20}}
        data={studentsList}
        renderItem={({item}) =>
          <ChooseStudentItem
            forAbsence={true}
            absence={item.absence}
            student={item}
            key={item.user.login}
            onPressHandler={onPressHandler}/>}
      /> : <CustomText text={'Cписок учеников пуст'} type={'title'} />}
    </PageLayout>
  );
};