import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProgressSubjectDetailPage} from "../../pages/progress/screens/ProgressSubjectDetailPage";
import {ChooseClass} from "../../pages/progress/components/ChooseClass";
import {ChooseStudent} from "../../pages/progress/components/ChooseStudent";
import {navigatorScreenOptions} from "../../shared/lib/constants";

export type DiaryDayNavigatorParamList = {
  Home: undefined,
  Lesson: undefined,
};

const ProgressTeacherStack = createNativeStackNavigator();

export const ProgressTeacherNavigator = () => {
  return (
    <ProgressTeacherStack.Navigator screenOptions={navigatorScreenOptions}>
      {/*<ProgressTeacherStack.Screen*/}
      {/*  name={"Home"}*/}
      {/*  component={ProgressSubjectsListPage}*/}
      {/*  options={{*/}
      {/*    title: 'Выберите предмет'*/}
      {/*  }}*/}
      {/*/>*/}
      <ProgressTeacherStack.Screen
        name={"Home"}
        component={ChooseClass}
        options={{
          title: 'Выберите класс',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"ChooseStudent"}
        component={ChooseStudent}
        options={{
          title: 'Выберите ученика',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"SubjectDetail"}
        component={ProgressSubjectDetailPage}
        options={{
          title: 'Предмет',
        }}
      />
    </ProgressTeacherStack.Navigator>
  );
};