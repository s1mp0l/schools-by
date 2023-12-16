import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DiaryDayPage} from "../../pages/diary/screens/DiaryDayPage";
import {DiaryLessonPage} from "../../pages/diary/screens/DiaryLessonPage";
import {navigatorScreenOptions} from "../../shared/lib/constants";

export type DiaryDayNavigatorParamList = {
  Home: undefined,
  Lesson: undefined,
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
        options={{
          title: 'Урок',
        }}
      />
    </DiaryDayStack.Navigator>
  );
};