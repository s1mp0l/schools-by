import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DiaryDayPage} from "../../pages/diary/screens/DiaryDayPage";
import {DiaryLessonPage} from "../../pages/diary/screens/DiaryLessonPage";

export type DiaryDayNavigatorParamList = {
  Home: undefined,
  Lesson: undefined,
};

const DiaryDayStack = createNativeStackNavigator();

export const DiaryDayNavigator = () => {
  return (
    <DiaryDayStack.Navigator screenOptions={{
      headerShown: false
    }}>
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