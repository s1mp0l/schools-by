import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DiaryDayPage} from "../../pages/diary/screens/DiaryDayPage";
import {DiaryLessonPage} from "../../pages/diary/screens/DiaryLessonPage";
import {navigatorScreenOptions} from "../../shared/lib/constants";
import {DiaryTeacherTopTapNavigator} from "./DiaryTeacherTopTabNavigator";

export type DiaryDayNavigatorParamList = {
  Home: undefined,
  Lesson: { lesson: LessonWithMark },
  TeacherTopNav: undefined,
};

const DiaryDayStack = createNativeStackNavigator<DiaryDayNavigatorParamList>();

export const DiaryDayNavigator = () => {
  return (
    <DiaryDayStack.Navigator screenOptions={navigatorScreenOptions}>
      <DiaryDayStack.Screen
        name={"Home"}
        component={DiaryDayPage}
        options={{
          title: 'День'
        }}
      />
      <DiaryDayStack.Screen
        name={"Lesson"}
        component={DiaryLessonPage}
        initialParams={{lesson: {} as LessonWithMark}}
        options={{
          title: 'Урок',
        }}
      />
      <DiaryDayStack.Screen
        name={"TeacherTopNav"}
        component={DiaryTeacherTopTapNavigator}
        options={{
          title: 'Урок',
        }}
      />
    </DiaryDayStack.Navigator>
  );
};