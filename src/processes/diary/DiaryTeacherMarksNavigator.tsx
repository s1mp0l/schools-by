import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ChooseStudentWithMarkPage} from "../../pages/diary/screens/ChooseStudentWithMarkPage";
import {AddMarkPageDiary} from "../../entities/mark/components/AddMarkPageDiary";

export type DiaryTeacherMarksNavigatorParamList = {
  ChooseStudentWithMark: undefined,
  AddMark: undefined
};

const DiaryTeacherMarksStack = createNativeStackNavigator<DiaryTeacherMarksNavigatorParamList>();

export const DiaryTeacherMarksStackNavigator = () => {
  return (
    <DiaryTeacherMarksStack.Navigator screenOptions={{headerShown: false}}>
      <DiaryTeacherMarksStack.Screen
        name={'ChooseStudentWithMark'}
        component={ChooseStudentWithMarkPage}
        options={{
          title: 'Выберите ученика'
        }}
      />
      <DiaryTeacherMarksStack.Screen
        name={'AddMark'}
        component={AddMarkPageDiary}
        options={{
          title: 'Добавить оценку',
        }}
      />
    </DiaryTeacherMarksStack.Navigator>
  );
};