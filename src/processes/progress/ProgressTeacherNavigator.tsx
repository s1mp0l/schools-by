import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProgressSubjectDetailPage} from "../../pages/progress/screens/ProgressSubjectDetailPage";
import {ChooseClassPage} from "../../pages/progress/screens/ChooseClassPage";
import {ChooseStudentPage} from "../../pages/progress/screens/ChooseStudentPage";
import {navigatorScreenOptions} from "../../shared/lib/constants";
import {ChooseSubjectPage} from "../../pages/progress/screens/ChooseSubjectPage";
import ChooseLessonPage from "../../pages/progress/screens/ChooseLessonPage";
import AddMarkPage from "../../entities/mark/components/AddMarkPage";

export type TeacherNavigatorParamList = {
  ChooseSubject: undefined,
  ChooseClass: undefined,
  ChooseStudent: undefined,
  SubjectDetail: undefined,
  ChooseLesson: undefined,
  AddMark: undefined
};

const ProgressTeacherStack = createNativeStackNavigator<TeacherNavigatorParamList>();

export const ProgressTeacherNavigator = () => {
  return (
    <ProgressTeacherStack.Navigator
      screenOptions={navigatorScreenOptions}
      initialRouteName={"ChooseClass"}
    >
      <ProgressTeacherStack.Screen
        name={"ChooseClass"}
        component={ChooseClassPage}
        options={{
          title: 'Выберите класс',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"ChooseStudent"}
        component={ChooseStudentPage}
        options={{
          title: 'Выберите ученика',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"ChooseSubject"}
        component={ChooseSubjectPage}
        options={{
          title: 'Выберите предмет'
        }}
      />
      <ProgressTeacherStack.Screen
        name={"SubjectDetail"}
        component={ProgressSubjectDetailPage}
        options={{
          title: 'Предмет',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"ChooseLesson"}
        component={ChooseLessonPage}
        options={{
          title: 'Выберите урок',
        }}
      />
      <ProgressTeacherStack.Screen
        name={"AddMark"}
        component={AddMarkPage}
        options={{
          title: 'Выставление оценки',
        }}
      />
    </ProgressTeacherStack.Navigator>
  );
};