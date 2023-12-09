import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProgressSubjectDetailPage} from "../../pages/progress/screens/ProgressSubjectDetailPage";
import {ProgressSubjectsListPage} from "../../pages/progress/screens/ProgressSubjectsListPage";

export type DiaryDayNavigatorParamList = {
  Home: undefined,
  Lesson: undefined,
};

const ProgressCurrentStack = createNativeStackNavigator();

export const ProgressCurrentNavigator = () => {
  return (
    <ProgressCurrentStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ProgressCurrentStack.Screen
        name={"Home"}
        component={ProgressSubjectsListPage}
        options={{
          title: 'Выберите предмет'
        }}
      />
      <ProgressCurrentStack.Screen
        name={"SubjectDetail"}
        component={ProgressSubjectDetailPage}
        options={{
          title: 'Предмет',
        }}
      />
    </ProgressCurrentStack.Navigator>
  );
};