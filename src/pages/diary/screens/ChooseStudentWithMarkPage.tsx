import {FlatList} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {setSelectedStudent} from "../../../features/progress/store/progress-store";
import {ChooseStudentItem} from "../../../entities/student/components/ChooseStudentItem";
import {CustomText} from "../../../shared/ui/CustomText";
import {
  DiaryTeacherMarksNavigatorParamList,
} from "../../../processes/diary/DiaryTeacherMarksNavigator";
import {setDiarySelectedStudent} from "../../../features/diary/store/diary-store";

type DiaryTeacherMarksStackProp = StackNavigationProp<
  DiaryTeacherMarksNavigatorParamList,
  'ChooseStudentWithMark'
>;

type Props = {
  navigation: DiaryTeacherMarksStackProp;
};

export const ChooseStudentWithMarkPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {selectedLesson} = useAppSelector((state: RootState) => state.diary);
  const studentsList = selectedLesson.students;

  const onPressHandler = (s: StudentData, mark?: MarkData) => {
    if (!mark) {
      dispatch(setDiarySelectedStudent(s));
      navigation.navigate('AddMark')
    }
  }

  return (
    <PageLayout>
      {studentsList?.length ? <FlatList
        contentContainerStyle={{gap: 20}}
        data={studentsList}
        extraData={selectedLesson}
        renderItem={({item}) =>
          <ChooseStudentItem
            student={item}
            key={item.user.login}
            onPressHandler={onPressHandler}
            mark={item?.mark}
            withAddMark={true}
          />}
      /> : <CustomText text={'Cписок учеников пуст'} type={'title'} />}
    </PageLayout>
  );
};