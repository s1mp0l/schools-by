import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProgressSubjectDetailPage} from "../../pages/progress/screens/ProgressSubjectDetailPage";
import {ChooseSubjectPage} from "../../pages/progress/screens/ChooseSubjectPage";
import {navigatorScreenOptions} from "../../shared/lib/constants";

export type ProgressCurrentParamList = {
  SubjectDetail: undefined,
  ChooseSubject: undefined
};

const ProgressCurrentStack = createNativeStackNavigator<ProgressCurrentParamList>();

export const ProgressCurrentNavigator = () => {
  return (
    <ProgressCurrentStack.Navigator
      initialRouteName={'ChooseSubject'}
      screenOptions={navigatorScreenOptions}
    >
      <ProgressCurrentStack.Screen
        name={"SubjectDetail"}
        component={ProgressSubjectDetailPage}
        options={{
          title: 'Предмет',
        }}
      />
      <ProgressCurrentStack.Screen
        name={"ChooseSubject"}
        component={ChooseSubjectPage}
        options={{
          title: 'Выберите предмет'
        }}
      />
    </ProgressCurrentStack.Navigator>
  );
};